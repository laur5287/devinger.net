'use client'
import { cn } from "@/lib/utils"
import { useMediaQuery } from 'usehooks-ts'

import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogPortal,
	DialogOverlay,
	DialogTrigger,
} from "@/components/ui/dialog"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,

	DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"

type DrawerDialogProps = {
	children?: React.ReactNode;
	content?: React.ReactNode;
	data?: {},
	className?: string
}

export function DrawerDialog({ children, data, content, className }: DrawerDialogProps) {
	const [open, setOpen] = useState(false)
	const [container, setContainer] = useState<HTMLDivElement | null>(null);
	const isDesktop = useMediaQuery("(min-width: 768px)")
	useEffect(() => {
		console.log(isDesktop)

	}, [isDesktop])

	useEffect(() => {
		setContainer(document.body as HTMLDivElement | null); // Set the container to document.body or any other desired container
		console.log(isDesktop);
	}, [isDesktop]);


	if (isDesktop) {
		return (

			<div ref={setContainer} className="relative border ">
				<Dialog open={open} onOpenChange={setOpen} >
					<DialogTrigger asChild>
						{children ? children :
							<DialogTrigger><Button variant='outline'>Trigger Dialog</Button></DialogTrigger>
						}
					</DialogTrigger>

					<DialogPortal container={container}>
						<DialogOverlay />
						<DialogContent id='dialog_content' className="">
							<DialogDescription id="dialog_description">
								{content ? content : <ProfileForm />}
							</DialogDescription>
						</DialogContent>


					</DialogPortal>

				</Dialog>


			</div>



		)
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				{children ? children :
					<Button variant="outline">Trigger Drawer</Button>

				}
			</DrawerTrigger>
			<DrawerContent>

				{content ? content : <ProfileForm className="px-4" />}


				<DrawerClose asChild>
					<Button variant="outline">Cancel</Button>
				</DrawerClose>
			</DrawerContent>
		</Drawer >
	)
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
	return (
		<form className={cn("grid items-start gap-4", className)}>
			<div className="grid gap-2">
				<Label htmlFor="email">Email</Label>
				<Input type="email" id="email" defaultValue="shadcn@example.com" />
			</div>
			<div className="grid gap-2">
				<Label htmlFor="username">Username</Label>
				<Input id="username" defaultValue="@shadcn" />
			</div>
			<Button type="submit">Save changes</Button>
		</form>
	)
}
