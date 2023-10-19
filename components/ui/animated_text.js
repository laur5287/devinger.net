'use client'
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        x: -50
    },
    animate: {
        opacity: 1,
        x: 0,

    }
}

function Animated_Text({ text, className }) {
    return (
        <div className="flex items-center justify-center p-4 mb-4 overflow-hidden text-center ">
            <motion.h1
                className={cn(
                    "inline-block capitalize font-bold  text-6xl",
                    className
                )}
                variants={quote}
                initial='initial'
                animate='animate'
            >
                {text.split(" ").map((word, index) =>
                    <motion.span
                        key={`${word}-${index}`}
                        variants={singleWord}

                        className="inline-block"
                    >

                        {word}&nbsp;
                    </motion.span>
                )}
            </motion.h1>
        </div>
    )
}

export default Animated_Text