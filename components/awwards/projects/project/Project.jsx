'use client';
import React from 'react'
import styles from './style.module.scss';
import { Badge } from "@/components/ui/badge"

export default function Project({ index, title, manageModal, badges = [] }) {

	return (
		<>
			<a href={`https://${title}.devinger.net`} onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY) }} onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY) }} className={styles.project}>
				<h2>{title}</h2>
				<span className='grid grid-cols-3 col-auto grid-rows-3 gap-1 '>
					{badges.map(badge => (
						<Badge variant='destructive' key={Math.random()}>{badge}</Badge>
					))}
				</span>
			</a>

		</>
	)
}