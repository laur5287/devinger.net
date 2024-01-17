import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Reveal from "@/components/reveal_bg"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import NavBar from '@/components/Navbar'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Devinger',
	description: 'Front-end development agency',
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {

	return (
		<html suppressHydrationWarning lang="en">
			<body className={cn(
				"min-h-screen relative  flex flex-col font-sans antialiased bg-gradient-to-br from-muted from-30%    to-muted/90 to-85% backdrop-blur-sm",

				fontSans.variable
			)} >
				<ThemeProvider attribute="class" enableSystem>
					{/* <div id='cover' className="absolute inset-0 w-full h-full bg-accent -z-4 " /> */}
					<NavBar />
					<main className=" grow">
						{children}

					</main>
					<Toaster />
					<TailwindIndicator />
					{/* <Reveal /> */}
				</ThemeProvider>
			</body>
		</html>
	)
}
