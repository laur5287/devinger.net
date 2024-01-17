'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

export function Projects() {
	return (
		<Carousel
			// orientation: 'vertical',
			opts={{
				align: "start",
				loop: true,
			}}
			className="w-full border border-blue-600 "
			id='carousel'

		>
			<CarouselContent id='content' className='border '>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem className='md:basis-1/2 lg:basis-1/3' key={index}>
						<div className="p-1">
							<Card>
								<CardContent className="flex items-center justify-center p-6 aspect-square">
									<span className="text-4xl font-semibold">{index + 1}</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
