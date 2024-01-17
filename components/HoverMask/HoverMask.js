'use client'
import styles from './HoverMask.module.css';
import React, { useEffect, useState } from 'react';

const HoverMask = ({
	children,
}

) => {
	const [hoverStyle, setHoverStyle] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		if ('paintWorklet' in CSS) {
			CSS.paintWorklet.addModule('/paintWorklet.js');
		}
	}, []);

	const handleMouseMove = (evt) => {
		setHoverStyle({
			'--size': 150,
			'--x': evt.nativeEvent.offsetX,
			'--y': evt.nativeEvent.offsetY,
		});
	};

	const handleMouseEnter = () => setIsLoaded(true);
	const handleMouseLeave = () => {

		setIsLoaded(false);
		setHoverStyle({
			'--size': 150,
			'--x': hoverStyle['--x'],
			'--y': hoverStyle['--y'],
		});
	};
	// ${isLoaded ? `${styles.is - loaded}` : ''}

	return (
		<div
			className={`  ${styles.el}   ${isLoaded ? styles['is-loaded'] : ''}

			`}
			style={hoverStyle}
			onMouseMove={handleMouseMove}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</div>
	);
};

export default HoverMask;
