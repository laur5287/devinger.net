import {
	Popover as PopoverWrapper,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface PopoverProps {
	children: React.ReactNode;
	content: React.ReactNode;
	className?: string;
}
const Popover = ({ children, content, className }: PopoverProps) => {

	return (
		<>
			<PopoverWrapper >
				<PopoverTrigger asChild>
					{children}
				</PopoverTrigger>
				<PopoverContent className={cn('    ', className)}>
					{content}
				</PopoverContent>
			</PopoverWrapper>
		</>
	);
};
export default Popover;
