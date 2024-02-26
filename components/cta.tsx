import Link from "next/link"
import ContactForm from "./ContactForm"
import { DrawerDialog } from "./Drawer"
import { Drawer2 } from "./Drawer2"
import Popover from "./Popover"
import { Button } from "./ui/button"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"

const CallToAction = () => {
	return (
		<div id='cta' className="flex gap-2">
			{/* <div className="relative flex items-center justify-center gap-5 sm:m-auto"> */}
			{/* <Button size='xl' variant='outline'>Projects</Button> */}
			{/* <Popover content={<ContactForm />} >
					<Button className='' size='xl'>Contact</Button>

				</Popover> */}
			<Link className={cn('font-bold', buttonVariants({ variant: "default", size: 'xl' }))
			} href='#projects_section' >Projects</Link>
			<DrawerDialog content={<ContactForm />}>

				<Button size='xl'>Contact</Button>
			</DrawerDialog >
		</div>
	)
}
export default CallToAction