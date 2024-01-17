'use client'
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Textarea } from "@/components/ui/textarea"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"

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
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"

const schema = z.object({
	name: z.string().min(5, { message: "Name must be at least 2 characters.", }).max(50),
	email: z.string().email(),
	message: z.string().min(10).max(500)

});

const ContactForm = () => {

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

		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
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
	);
};

export default ContactForm;
