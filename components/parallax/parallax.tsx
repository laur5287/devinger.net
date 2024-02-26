import Script from 'next/script';
import './parallax.css'
const Parallax = () => {

	return (
		<>
			<div className=" stage">


				<div className="container">
					<div className="container_ring">
						{/* <div className="img"></div> */}
						<a className='a' href="/">
							<img src="/projects_images/blackjack.webp" alt="image" />
						</a>
						<a className='a' href="/">
							<img src="/projects_images/blackjack.webp" alt="image" />
						</a>
						<a className='a' href="/">
							<img src="/projects_images/blackjack.webp" alt="image" />
						</a>

						{/* <div className="img"></div>
						<div className="img"></div>
						<div className="img"></div>
						<div className="img"></div>
						<div className="img"></div>
						<div className="img"></div>
						<div className="img"></div>
						<div className="img"></div>
						<div className="img"></div> */}
					</div>
				</div>

			</div>
			<Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></Script>
			<Script src="https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js"></Script>
			<Script src="/parallax_js//script.js"></Script>
		</>
	);
};
export default Parallax;