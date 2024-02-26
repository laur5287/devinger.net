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
import Script from 'next/script'

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
		<html suppressHydrationWarning lang="en" className='dark'>
			<body className={cn(
				// from - secondary from - 10 % to - 70 % to - muted   bg - gradient - to - tr dark:from-muted dark:to-transparent
				"min-h-screen relative   flex flex-col font-sans antialiased  ",

				fontSans.variable
			)} >
				{/* <ThemeProvider attribute="class" enableSystem> */}
				{/* <NavBar /> */}
				<main className="relative grow">
					{children}

				</main>
				<Toaster />
				<TailwindIndicator />
				{/* <Reveal /> */}
				{/* </ThemeProvider> */}
			</body>

		</html>
	)
}
