import CallToAction from '@/components/cta'
import Title from '@/components/title'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="container flex flex-col justify-start min-h-screen mt-16 gap-9 ">

      <Title />

      <p className="flex items-center justify-center ">
        Description: "We're Devinger, where we craft your vision, perfect every pixel,
        and launch impactful online experiences.
        Your dreams, our reality."
      </p>

      <CallToAction />
    </main >
  )
}
