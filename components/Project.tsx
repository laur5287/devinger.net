import { cn } from "@/lib/utils"

import Image from "next/image"
import { ProjectType } from "@/config/projects"
import { Tooltip } from "./Tooltip"
type ProjectProps = {
	className: string,
	data: ProjectType
}

const Project = (props: ProjectProps) => {
	const { className, data } = props
	const { name, tech } = data


	return (
		<div className="flex flex-col items-start justify-between w-full h-full ">

			<div className={cn("relative min-w-full  text-6xl font-bold opacity-50  text-stroke min-h-[15%]", className)} data-text={name} id={name}>
			</div>
			<div className="flex justify-center gap-8 font-bold text-2xl backdrop-blur-sm   w-full  items-center  h-[15%]" id="tech">
				{
					tech.map(((item, i) => (
						<Tooltip key={`${i}_${item}`} data={item}>
							<div className="relative w-10 h-10 p-4" id={item}>
								<Image className='hover:animate-lift hover:animation-scale ' src={`/tech_logo/${item}.png`} fill sizes='33vw' alt={item} />
							</div>

						</Tooltip>
					)))
				}
			</div>
		</div>
	)

}
export default Project