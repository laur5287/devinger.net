let xPos = 0;

gsap.timeline()
	.set('.container_ring', { rotationY: 0, cursor: 'drag' })
	//set initial rotationY so the parallax jump happens off screen
	.set('.a', { // apply transform rotations to each image
		rotateY: (i) => i * -36,
		transformOrigin: '50% 50% 500px',
		z: -500,
		// border: "1px solid red ",
		height: 'auto',
		// backgroundImage: (i) => 'url(https://picsum.photos/id/' + (i + 32) + '/600/400/)',
		backgroundPosition: (i) => getBgPos(i),
		backfaceVisibility: 'hidden'
	})
	.from('.a', {
		duration: 1.5,
		y: 200,
		opacity: 0,
		stagger: 0.1,
		ease: 'expo'
	})
	.add(() => {
		$('.a').on('mouseenter', (e) => {
			let current = e.currentTarget;
			gsap.to('.a', { opacity: (i, t) => (t == current) ? 1 : 0.5, ease: 'power3' })
		})
		$('.a').on('mouseleave', (e) => {
			gsap.to('.a', { opacity: 1, ease: 'power2.inOut' })
		})
	}, '-=0.5')

$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);


function dragStart(e) {
	if (e.touches) e.clientX = e.touches[0].clientX;
	xPos = Math.round(e.clientX);
	gsap.set('.container_ring', { cursor: 'grabbing' })
	$(window).on('mousemove touchmove', drag);
}


function drag(e) {
	if (e.touches) e.clientX = e.touches[0].clientX;

	gsap.to('.container_ring', {
		rotationY: '-=' + ((Math.round(e.clientX) - xPos) % 180),
		onUpdate: () => { gsap.set('.a', { backgroundPosition: (i) => getBgPos(i) }) }
	});

	xPos = Math.round(e.clientX);
}


function dragEnd(e) {
	$(window).off('mousemove touchmove', drag);
	gsap.set('.container_ring', { cursor: 'grab' });
}


function getBgPos(i) {
	//returns the background-position string to create parallax movement in each image
	return (100 - gsap.utils.wrap(0, 360, gsap.getProperty('.container_ring', 'rotationY') - 180 - i * 36) / 360 * 500) + 'px 0px';
}