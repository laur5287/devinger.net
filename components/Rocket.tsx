const Rocket = ({ color }: { color: string }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
			<defs>
				<linearGradient id={`rocketGradient-${color}`} x1="0%" y1="100%" x2="100%" y2="0%">
					<stop offset="0%" style={{ stopColor: "green", stopOpacity: 1 }} />
					<stop offset="100%" style={{ stopColor: color, stopOpacity: 1 }} />
				</linearGradient>
			</defs>
			<path className="animate-flame-flicker" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke={`url(#rocketGradient-${color})`} />
			<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke={`url(#rocketGradient-${color})`} />
			<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke={`url(#rocketGradient-${color})`} />
			<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke={`url(#rocketGradient-${color})`} />
		</svg>
	)
}
export default Rocket