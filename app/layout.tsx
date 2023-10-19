import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { fontSans } from "@/lib/fonts"

import { cn } from "@/lib/utils"
import Reveal from "@/components/reveal_bg"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import NavBar from '@/components/Navbar'

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
        "h-screen relative   font-sans antialiased",
        fontSans.variable
      )} >
        <ThemeProvider attribute="class" enableSystem>

          <header className="z-50  fixed top-0 h-16 w-full bg-transparent">
            <NavBar />
          </header>
          {children}
          <TailwindIndicator />
          <Reveal />
        </ThemeProvider>
      </body>
    </html>
  )
}
