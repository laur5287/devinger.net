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
				<div className="flex flex-col justify-around xl:justify-center xl:gap-16 min-h-[80vh] " id="Hero">
					<Title />
					<div className="flex items-center justify-center font-sans text-3xl font-bold text-center bg-foreground backdrop-blur-sm text-wrap bg-clip-text">
						Devinger, where we craft your vision, perfect every pixel,
						and launch impactful online experiences.
						Your dreams, our reality.
					</div>
					<div id='cta-wrapper' className=" place-self-center">
						<CallToAction />
					</div>
				</div>
			</ section>

			<section className="relative flex flex-col gap-4" id="projects">
				{/* <div className="flex flex-col overflow-visible justify-self-start " id="wrapper"> */}
				{/* <Divider className='overflow-visible bg-transparent bg-cover fill-background' /> */}
				<div className="overflow-hidden font-bold text-transparent align-baseline whitespace-nowrap text-stroke text-9xl"><span className='inline-block animate-ticker'>Projects</span></div>

				{/* </div> */}
				<CarouselExample />
			</section>
			{/* <section className="flex flex-col items-center justify-center h-screen border " id="contact">


			</section> */}
		</>
	)
}
