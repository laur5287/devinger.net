'use client'
import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '@/components/awwards/Header/animation';
import LinkComponent from '@/components/awwards/Header/nav/Link/Link';
import Curve from '@/components/awwards/Curve/Curve';
// import Footer from './Footer';

const navItems = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Work",
		href: "/work",
	},
	{
		title: "About",
		href: "/about",
	},
	{
		title: "Contact",
		href: "/contact",
	},
]

export default function Nav() {

	const pathname = usePathname();
	const [selectedIndicator, setSelectedIndicator] = useState(pathname);

	return (
		<motion.div
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className={styles.menu}
		>
			<div className={styles.body}>
				<div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={styles.nav}>
					<div className={styles.header}>
						<p>Navigation</p>
					</div>
					{
						navItems.map((data, index) => {
							return <LinkComponent
								key={index}
								data={{ ...data, index }}
								isActive={selectedIndicator == data.href}
								setSelectedIndicator={setSelectedIndicator}>
							</LinkComponent>
						})
					}
				</div>
				{/* <Footer /> */}
			</div>
			<Curve />
		</motion.div>
	)
}