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
				"min-h-screen relative  dark:bg-blend-multiply light:bg-blend-saturation flex flex-col font-sans antialiased bg-gradient-to-br dark:from-secondary dark:from-30 from-primary/20 from-30  to-green-500   dark:to-muted to-85 dark:backdrop-blur-sm",

				fontSans.variable
			)} >
				<ThemeProvider attribute="class" enableSystem>
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
