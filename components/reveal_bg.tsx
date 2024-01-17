'use client'
import { Skeleton as SkeletonReact } from "@/components/ui/skeleton"


const Skeleton = () => {

	return (
		<div className="flex items-center space-x-4">
			<SkeletonReact className="w-12 h-12 rounded-full" />
			<div className="space-y-2">
				<SkeletonReact className="h-4 w-[250px]" />
				<SkeletonReact className="h-4 w-[200px]" />
			</div>
		</div>

	)
}
export default Skeleton