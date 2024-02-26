'use client'
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Textarea } from "@/components/ui/textarea"
import * as React from "react"
import { useToast } from "@/components/ui/use-toast"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';

import { cn } from "@/lib/utils"
// import { useMediaQuery } from "@/hooks/use-media-query"
import { useMediaQuery } from 'usehooks-ts'
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
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


const schema = z.object({
	name: z.string().min(5, { message: "Name must be at least 2 characters.", }).max(50),
	email: z.string().email(),
	message: z.string().min(10).max(500)
});

export function Drawer2() {
	const [open, setOpen] = React.useState(false)
	const isDesktop = useMediaQuery("(min-width: 768px)")



	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button variant="outline">Edit Profile</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when you are done.
						</DialogDescription>
					</DialogHeader>
					<ProfileForm2 />
				</DialogContent>
			</Dialog>
		)
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button variant="outline">Edit Profile</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="text-left">
					<DrawerTitle>Edit profile</DrawerTitle>
					<DrawerDescription>
						Make changes to your profile here. Click save when you are done.
					</DrawerDescription>
				</DrawerHeader>
				<ProfileForm className="px-4" />
				<DrawerFooter className="pt-2">
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
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


function ProfileForm2({ className }: React.ComponentProps<"form">) {

	const { toast } = useToast()
	const { formState: { errors } } = useForm()
	// console.log(errors)
	const form = useForm({
		resolver: zodResolver(schema),
	});

	function onSubmit(data: any) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-background p-4">
					<code className="text-foreground">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		})
	}
	return (

		<Form  {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-red-600 ">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									{...form.register('name', {
										required: 'name is required',
										minLength: {
											value: 2,
											message: 'Name must be at least 2 characters',
										},
										maxLength: {
											value: 50,
											message: 'Name cannot exceed 50 characters',
										},
									})}
									placeholder="Enter your Name"
									onChange={(e) => field.onChange(e.target.value)}
									value={field.value || ''}
								/>
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									{...form.register('email', {

										minLength: {
											value: 2,
											message: 'Email must be at least 2 characters',
										},
										maxLength: {
											value: 50,
											message: 'Email  cannot exceed 50 characters',
										},
									})}
									placeholder="Enter your Email"
									onChange={(e) => field.onChange(e.target.value)}
									value={field.value || ''}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea
									// className="resize-none"
									{...form.register('message', {

										minLength: {
											value: 2,
											message: 'Message must be at least 2 characters',
										},
										maxLength: {
											value: 50,
											message: 'Message  cannot exceed 50 characters',
										},
									})}
									placeholder="Enter your message"
									onChange={(e) => field.onChange(e.target.value)}
									value={field.value || ''}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>


				<Button
					className='w-full bg-secondary'
					type="submit">Submit
				</Button>
			</form>
		</Form >
	)
}
