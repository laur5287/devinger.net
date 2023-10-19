'use client'
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const Title = () => {
    // const words = ['craft', 'perfect', 'launch']
    const words = [
        // { name: 'craft', gradient: 'bg-craft' },
        // { name: 'perfect', gradient: '' },
        // { name: 'launch', gradient: '' },
        'craft', 'perfect', 'launch'
    ]

    const [word, setWord] = useState('')

    useEffect(() => {
        let currentIndex = 0
        const rotateWords = () => {
            setWord(words[currentIndex])
            currentIndex = (currentIndex + 1) % words.length
        }
        const intervalId = setInterval(rotateWords, 2000)
        return () => clearInterval(intervalId)
    },)

    return (
        <>
            <div className="relative flex flex-col items-center w-full xl:flex-row xl:gap-28 xl:justify-around">
                <div
                    className={cn(' bg-clip-text bg-cover  bg-current  ',
                        word === 'craft' && 'bg-craft transition-all   delay-100 '
                    )}
                >
                    <span className="text-[4.5em] font-bold bg-cover text-transparent ">CRAFT.</span>
                </div>
                <div
                    className={cn('  bg-clip-text  bg-current bg-cover  ',
                        word === 'perfect' && 'bg-perfect  transition-bg   '

                    )}
                >
                    <span className="text-[5em] font-bold text-transparent ">PERFECT.</span>
                </div>
                <div
                    className={cn('  bg-clip-text  bg-current ',
                        word === 'launch' && 'bg-launch object-cover  transition-color delay-100 duration-700'

                    )}
                >
                    <span className="text-[5em] font-bold text-transparent ">LAUNCH</span>
                </div>
            </div>
        </>
    )
}
export default Title