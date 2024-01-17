'use client'
import { cn } from "@/lib/utils"
import { useEffect, useMemo, useState } from "react"
import Rocket from "./Rocket"



const Title = () => {
	const words = useMemo(() => ['imagine', 'build', 'launch'], []);


	const [word, setWord] = useState('')

	useEffect(() => {
		let currentIndex = 0
		const rotateWords = () => {
			setWord(words[currentIndex])
			currentIndex = (currentIndex + 1) % words.length
		}
		const intervalId = setInterval(rotateWords, 2000)
		return () => clearInterval(intervalId)
	}, [words])

	return (
		<>
			<div className="relative flex flex-col items-center w-full h-auto xl:flex-row xl:gap-14 xl:justify-center ">
				<div
					className={cn(' bg-clip-text bg-cover bg-current  ',
						word === 'imagine' && ' bg-gradient-to-br from-blue-400 from-21%  to-green-500 to-90% transition-all   delay-100 '
					)}
				>
					<div className="flex items-center gap-3 ">
						<span className="text-[5em] font-extrabold tracking-tight text-transparent  ">IMAGINE</span>
						<span id='image-wrapper' className="relative w-[4em] h-[5em] ">
							{/* <Rocket color="currentColor" /> */}
						</span>
					</div>
				</div>

				<div
					className={cn(' bg-clip-text bg-cover bg-current  ',
						word === 'build' && ' bg-gradient-to-r from-blue-400 to-green-500 transition-all   delay-100 '
					)}
				>
					<div className="flex items-center gap-3">
						<span className="text-[5em] font-extrabold tracking-tight text-transparent ">BUILD</span>
						<span id='image-wrapper' className="relative w-[4em] h-[5em] ">
							{/* <Rocket color="currentColor" /> */}

						</span>
					</div>

				</div>
				<div
					className={cn(' bg-clip-text bg-cover  bg-current  ',
						word === 'launch' && 'bg-cover bg-gradient-to-b from-blue-400 to-green-500 transition-all   delay-100 '
					)}
				>
					<div className="flex items-center gap-3">
						<span className="text-[5em] font-extrabold tracking-tight text-transparent ">LAUNCH</span>
						<span id='image-wrapper' className="relative w-[4em] h-[5em] ">
							{/* <Rocket color="currentColor" /> */}
						</span>
					</div>
				</div>
			</div>

		</>
	)
}
export default Title