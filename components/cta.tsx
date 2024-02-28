'use client'
import Link from "next/link"
import ContactForm from "./ContactForm"
import { DrawerDialog } from "./Drawer"
import { Drawer2 } from "./Drawer2"
import Popover from "./Popover"
import { Button } from "./ui/button"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { ButtonAceternity } from "@/components/aceternity/moving_border";

const CallToAction = () => {
	return (
		<div id='cta' className="flex gap-2">

			<Link className={cn('font-bold', buttonVariants({ variant: "default", size: 'xl' }))
			} href='#projects_section' >Projects</Link>


			<ButtonAceternity
				borderRadius="1.75rem"
				className=" border-neutral-200 dark:border-slate-800"
			>
				<DrawerDialog content={<ContactForm />}>


					<Button size='xl'>Contact</Button>
				</DrawerDialog >
			</ButtonAceternity>
		</div>
	)
}
export default CallToAction