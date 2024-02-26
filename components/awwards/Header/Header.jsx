'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from '@/components/awwards/Header/nav/Nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import Projects from '@/components/awwards/projects/Projects'

export default function Header() {
	const header = useRef(null);
	const [isActive, setIsActive] = useState(false);
	const pathname = usePathname();
	const button = useRef(null);

	useEffect(() => {
		setIsActive((prev) => !prev)
	}, [])

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.to(button.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				start: 0,
				end: window.innerHeight,
				onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
				onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }, setIsActive(false)) }
			}
		})
	}, [])

	return (
		<>
			<div id='header' ref={header} className={styles.header}>

				<div className={styles.nav}>
					<Magnetic>
						<div className={styles.el}>
							<a>Work</a>
							<div className={styles.indicator}></div>
						</div>
					</Magnetic>
					<Magnetic>
						<div className={styles.el}>
							<a>About</a>
							<div className={styles.indicator}></div>
						</div>
					</Magnetic>
					<Magnetic>
						<div className={styles.el}>
							<a>Contact</a>
							<div className={styles.indicator}></div>
						</div>
					</Magnetic>
				</div>
			</div>
			<div ref={button} className={styles.headerButtonContainer}>
				<Rounded onClick={() => { setIsActive((prev) => !prev) }} className={`${styles.button}`}>
					<div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
				</Rounded>
			</div>
			<AnimatePresence mode="wait">
				{isActive && <Nav />}
			</AnimatePresence>
			<Projects />
		</>
	)
}