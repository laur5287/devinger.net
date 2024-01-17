'use client'
import CallToAction from '@/components/cta'
import Title from '@/components/title'
import { CarouselExample } from '@/components/Carousel'
import Divider from '@/components/divider/Divider'
import GlassyText from '@/components/GlassyText/GlassyText'

export default function Home() {

	return (
		<>
			<section className="flex flex-col ">
				<div className="flex flex-col justify-around xl:justify-center xl:gap-16 min-h-[80vh]    " id="Hero">
					<Title />
					<p className="flex items-center justify-center font-sans text-3xl font-bold text-center text-transparent bg-foreground backdrop-blur-sm text-wrap bg-clip-text">
						Devinger, where we craft your vision, perfect every pixel,
						and launch impactful online experiences.
						Your dreams, our reality.
					</p>
					<div id='cta-wrapper' className=" place-self-center">
						<CallToAction />
					</div>
				</div>
			</ section>

			<section className="relative flex flex-col items-center justify-center h-screen " id="second">
				<div className="absolute inset-0 flex flex-col w-full h-full overflow-visible border-red-600 " id="wrapper">
					{/* <Divider className='overflow-visible bg-transparent bg-cover fill-background' /> */}
					<div className="flex items-start h-full overflow-visible font-bold text-transparent align-baseline bg-transparent grow text-stroke text-9xl"><span>Projects</span></div>

				</div>
				<CarouselExample />
			</section>
			{/* <section className="flex flex-col items-center justify-center h-screen border " id="contact">


			</section> */}
		</>
	)
}
