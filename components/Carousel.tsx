'use client'
import { type CarouselApi } from "@/components/ui/carousel"
import Project from "@/components/Project"

import { Card, CardContent } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import { projectsConfig } from '@/config/projects'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const CarouselExample = () => {
	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (!api) {
			return
		}
		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])


	const projectsArray = Object.entries(projectsConfig)


	return (
		<Carousel
			setApi={setApi}
			orientation='horizontal'
			opts={{
				// dragFree: true,
				// breakpoints: { '(max-width:768px)': { axis: 'y' } },
				align: "center",
				loop: true,
			}}
			className="relative w-[90vw] max-w-fit mx-auto "
			id='carousel'

		>
			<CarouselContent id='content' className='relative -mt-1 '>
				{projectsArray.map((project, index) => (

					<CarouselItem id='carousel-item' className='pt-1 group ' key={index}>
						<div id='wrapper' className="pl-1 ">
							<Link href={project[1].link}  >
								<Card id='card' className='border shadow-md flex-nowrap ' >

									<CardContent id='card-content' className={`relative flex items-center justify-center w-full h-[50vh]`}>

										<div className="absolute inset-0 w-full h-full -z-1 ">
											<Image
												className="object-fill group-hover:opacity-80"
												onError={(e) => console.error(e.target)}
												fill src={project[1].image} alt={project[1].name} />
										</div>
										<Project className='group-hover:opacity-80 group-hover:backdrop-blur-sm ' data={project[1]} />
									</CardContent>
								</Card>
							</Link>

						</div>
					</CarouselItem>

				))}

			</CarouselContent>
			<CarouselPrevious id="previous"
				className='top-[50%] left-0 justify-center w-12 h-12  '
			/>
			<CarouselNext
				id='next'
				className='top-[50%] right-4 justify-center w-12 h-12  '
			/>


		</Carousel>
	)
}

export default Carousel