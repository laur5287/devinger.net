if (typeof registerPaint !== 'undefined') {

	class SimplePainter {
		paint(ctx, geom, properties) {
			ctx.fillStyle = 'green'; // Use a bright color for visibility
			ctx.fillRect(0, 0, geom.width, geom.height);
		}
	}
	registerPaint('simple', SimplePainter);
}

// if (typeof registerPaint !== 'undefined') {
// 	console.log('work')

// 	class CirclePainter {
// 		static get inputProperties() {
// 			return ['--x', '--y', '--size'];
// 		}

// 		paint(ctx, geom, properties) {
// 			const x = properties.get('--x')?.value || geom.width / 2;
// 			const y = properties.get('--y')?.value || geom.height / 2;
// 			const size = properties.get('--size')?.value || 20; // Fallback size

// 			ctx.fillStyle = 'black';
// 			ctx.beginPath();
// 			ctx.arc(x, y, size, 0, 3 * Math.PI);
// 			ctx.fill();
// 		}
// 	}
// 	registerPaint('circle', CirclePainter);
// }

// if (typeof registerPaint !== 'undefined') {
// 	console.log('work')

// 	class CirclePainter {
// 		paint(ctx, size) {
// 			const radius = size.width / 2;
// 			ctx.fillStyle = 'red';
// 			ctx.beginPath();
// 			ctx.arc(radius, radius, radius, 0, 2 * Math.PI);
// 			ctx.fill();
// 		}
// 	}

// registerPaint('circle', CirclePainter);
// }
