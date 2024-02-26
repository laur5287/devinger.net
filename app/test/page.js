'use client'
import HoverMask from '@/components/HoverMask/HoverMask'
// import Parallax from '@/components/parallax/parallax'
// import Curve from '@/components/awwards/Curve/Curve'
import Header from '@/components/awwards/Header/Header'

import { useEffect } from "react";

const Test = () => {


	return (
		<section style={{ height: '200vh' }} className='flex flex-col w-screen h-[200vh]'>

			{/* <div className="w-[80vw] h-[80vh] wrapper"> */}
			<Header />
			<h1 className="h-10" id="">Projects</h1>
			<div className="flex flex-col justify-center grow">
				{/* <Parallax /> */}
			</div>
			<h1 className="h-10">footer</h1>
			{/* <Curve /> */}

			{/* </div> */}

		</section>

	)
}
export default Test