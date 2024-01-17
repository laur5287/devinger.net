import styles from './GlassyText.module.css';
const GlassyText = ({ text }) => {

	return (
		<>
			<h1 className={`${styles.headline} ${styles.h}`}>
				<span className={`${styles.headline}`}> Headlin</span>
				<svg aria-hidden="true" id="lockup-headline-mask" className={`${styles.headline} ${styles.lockupHeadlinesMask} ${styles.visuallyHidden}`}>
					<clipPath id="lockup-headline-mask-path">
						<text dominant-baseline="hanging" text-anchor="middle" x="50%" y="0em" dy="0.125em">Awesome Headlin</text>
					</clipPath>
				</svg>
			</h1 >
		</>
	);
};
export default GlassyText;