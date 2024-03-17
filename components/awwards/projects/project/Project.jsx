'use client';
import React from 'react'
import styles from './style.module.scss';
import { Badge } from "@/components/ui/badge"
import { Icons } from '@/components/Icons';

export default function Project({ index, title, manageModal, badges = [] }) {
	const { gitHub } = Icons
	console.log(Icons.gitHub())
	const svg = {
		gitHub: Icons.gitHub,
	}
	console.log(svg.gitHub)



	return (
		<>
			<a href={`https://${title}.devinger.net`} onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY) }} onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY) }} className={styles.project}>
				<h2>{title}</h2>
				<span className='flex justify-end h-8 gap-4 '>
					{badges.map(badge => (
						// <Badge variant='destructive' key={Math.random()}>{badge}</Badge>
						<>
							{/* <div key={Math.random()}> */}
							{/* {badge} */}
							{/* <div className='w-8 h-8'>{`${badge}`()}</div> */}
							{/* <div key={index} dangerouslySetInnerHTML={{ __html: svg[badge] }} /> */}
							{/* <div className="">

								{svg.react}
							</div> */}
							{/* <Icons.gitHub key={Math.random()} /> */}

							{/* </div> */}
							{/* <Icons.gitHub /> */}

						</>
					))}
				</span>
			</a>

		</>
	)
}