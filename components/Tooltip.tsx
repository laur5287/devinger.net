import {
	Tooltip as TooltipShadcn,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"

type TooltipProps = {
	children: React.ReactNode,
	data: string
}

export const Tooltip = ({ children, data }: TooltipProps) => {

	return (
		<>
			<TooltipProvider>
				<TooltipShadcn>
					<TooltipTrigger>{children}</TooltipTrigger>
					<TooltipContent>
						{data}
					</TooltipContent>
				</TooltipShadcn>
			</TooltipProvider>

		</>
	)
}