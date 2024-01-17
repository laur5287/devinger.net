'use client'
import HoverMask from '@/components/HoverMask/HoverMask'

import { useEffect } from "react";

const Test = () => {
	useEffect(() => {
		if ('paintWorklet' in CSS) {
			CSS.paintWorklet.addModule('/paintWorklet.js');
		}
	}, []);
	return (
		<section className="relative z-50 w-full h-screen border "
			style={{
				background: 'paint(circle)',
				border: '10px,solid,black',
			}}

		>
			<HoverMask className='h-full bg-red-300 border'>
				<div className="w-full bg-red-500">hello</div>

			</HoverMask>
		</section>
	)
}
export default Test