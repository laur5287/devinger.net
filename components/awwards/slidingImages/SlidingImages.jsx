'use client'
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';
import { Icons } from "@/components/Icons";

const slider2 = [
	{
		color: "#e3e5e7",
		src: "next.png"
	},
	// {
	// 	color: "#d6d7dc",
	// 	src: "tailwind-svgrepo-com(1).svg"
	// },
	{
		color: "#e3e3e3",
		src: "supabase.png"
	},
	{
		color: "#21242b",
		src: "tailwind.png"
	}
]

const slider1 = [
	{
		color: "transparent",
		src: "maven.jpg"
	},
	{
		color: "#e5e0e1",
		src: "panda.jpg"
	},
	{
		color: "#d7d4cf",
		src: "powell.jpg"
	},
	{
		color: "#e1dad6",
		src: "wix.jpg"
	}
]

export default function SlidingImages() {

	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"]
	})

	const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
	const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
	const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

	return (
		<div ref={container} className={styles.slidingImages}>
			<motion.div style={{ x: x1 }} className={styles.slider}>
				{/* <Icons.nextjs /> */}
				{
					slider2.map((project, index) => {
						return <div key={index} className={styles.project}
						// style={{ backgroundColor: project.color }}
						>

							<div className={styles.imageContainer}>
								<Image
									fill={true}
									sizes=" 33vw"
									alt={"image"}
									// style={{ width: "100%" }}
									src={`/tech_logo/${project.src}`} />
							</div>
						</div>
					})
				}
			</motion.div>
			<motion.div style={{ x: x2 }} className={styles.slider}>
				{
					slider2.map((project, index) => {
						return <div key={index} className={styles.project}
						// style={{ backgroundColor: transparent }}
						>
							<div key={index} className={styles.imageContainer}>
								<Image
									fill={true}
									alt={"image"}
									src={`/tech_logo/${project.src}`} />
							</div>
						</div>
					})
				}
			</motion.div>
			<motion.div style={{ height }} className={styles.circleContainer}>
				<div className={styles.circle}></div>
			</motion.div>
		</div>
	)
}