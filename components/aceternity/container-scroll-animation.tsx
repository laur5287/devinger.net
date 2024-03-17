"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({
	users,
	titleComponent,
}: {
	users: {
		name: string;
		designation: string;
		image: string;
		badge?: string;
	}[];
	titleComponent?: string | React.ReactNode;
}) => {
	const containerRef = useRef<any>(null);
	const { scrollYProgress } = useScroll(
		{
			target: containerRef,
		}
	);
	const [isMobile, setIsMobile] = React.useState(false);

	React.useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => {
			window.removeEventListener("resize", checkMobile);
		};
	}, []);

	const scaleDimensions = () => {
		// return isMobile ? [0.7, 0.9] : [1.05, 1];
		return isMobile ? [0.8, 1] : [1.05, 1];
	};

	const rotate = useTransform(scrollYProgress, [1, 0.6], [5, 80]);
	const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
	const translate = useTransform(scrollYProgress, [0, 1], [-50, -150]);

	return (
		<div
			id="ref"
			className="h-[60rem] md:h-[80rem] flex -mt-16 justify-center relative p-2 "
			ref={containerRef}
		>
			<div
				className="relative w-full overflow-hidden "
				style={{
					perspective: "1000px",
				}}
			>
				<Header translate={translate} titleComponent={titleComponent} />

				<Card
					rotate={rotate}
					translate={translate}
					scale={scale}
					users={users}
				/>
			</div>
		</div>
	);
};

export const Header = ({ translate, titleComponent }: any) => {
	return (
		<motion.div
			style={{
				translateY: translate,
			}}
			className="max-w-5xl mx-auto mt-32 text-center div"
		>
			{titleComponent}
		</motion.div>
	);
};

export const Card = ({
	rotate,
	scale,
	translate,
	users,
}: {
	rotate: any;
	scale: any;
	translate: any;
	users: {
		name: string;
		designation: string;
		image: string;
		badge?: string;
	}[];
}) => {
	return (
		<motion.div
			id="cardX"
			style={{
				backfaceVisibility: 'hidden',
				rotateX: rotate, // rotate in X-axis
				scale,
				boxShadow:
					"0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
			}}
			className="max-w-7xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
		>
			<div className="grid w-full h-full grid-cols-1 gap-4 p-4 overflow-hidden bg-gray-100 rounded-2xl md:grid-cols-3 lg:grid-cols-5">
				{users.map((user, idx: number) => (
					<motion.div
						key={`user-${idx}`}
						className="relative bg-white rounded-md cursor-pointer"
						style={{ translateY: translate }}
						whileHover={{
							boxShadow:
								"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
						}}
					>
						<div className="absolute px-2 py-1 text-xs font-bold bg-white rounded-full top-2 right-2">
							{user.badge}
						</div>
						<img
							src={user.image}
							className="text-sm rounded-tr-md rounded-tl-md "
							alt="thumbnail"
						/>
						<div className="p-4">
							<h1 className="text-sm font-semibold ">{user.name}</h1>
							<h2 className="text-xs text-gray-500 ">{user.designation}</h2>
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

// "use client";

// import React, { useEffect, useRef } from "react";
// import { useScroll, useTransform, motion } from "framer-motion";

// export const ContainerScroll = ({
// 	users,
// 	titleComponent,
// }: {
// 	users: {
// 		name: string;
// 		designation: string;
// 		image: string;
// 		badge?: string;
// 	}[];
// 	titleComponent?: string | React.ReactNode;
// }) => {
// 	const containerRef = useRef<any>(null);
// 	const { scrollYProgress } = useScroll({
// 		target: containerRef,
// 	});
// 	useEffect(() => {
// 		console.log(scrollYProgress)

// 	}, [scrollYProgress])
// 	const [isMobile, setIsMobile] = React.useState(false);

// 	React.useEffect(() => {
// 		const checkMobile = () => {
// 			setIsMobile(window.innerWidth <= 768);
// 		};
// 		checkMobile();
// 		window.addEventListener("resize", checkMobile);
// 		return () => {
// 			window.removeEventListener("resize", checkMobile);
// 		};
// 	}, []);

// 	const scaleDimensions = () => {
// 		return isMobile ? [0.7, 0.9] : [1.05, 1];
// 	};

// 	const rotate = useTransform(scrollYProgress, [0, 1], [30, 0]);
// 	const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
// 	const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

// 	return (
// 		<div
// 			id="containerRef"
// 			className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
// 			ref={containerRef}
// 		>
// 			<div
// 				className="relative w-full py-10 md:py-40"
// 				style={{
// 					perspective: "1000px",
// 				}}
// 			>
// 				<Header translate={translate} titleComponent={titleComponent} />
// 				<Card

// 					rotate={rotate}
// 					translate={translate}
// 					scale={scale}
// 					users={users}
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export const Header = ({ translate, titleComponent }: any) => {
// 	return (
// 		<motion.div
// 			style={{
// 				translateY: translate,
// 			}}
// 			className="max-w-5xl mx-auto text-center div"
// 		>
// 			{titleComponent}
// 		</motion.div>
// 	);
// };

// export const Card = ({
// 	rotate,
// 	scale,
// 	translate,
// 	users,
// }: {
// 	rotate: any;
// 	scale: any;
// 	translate: any;
// 	users: {
// 		name: string;
// 		designation: string;
// 		image: string;
// 		badge?: string;
// 	}[];
// }) => {
// 	return (
// 		<motion.div
// 			id="Card"
// 			style={{
// 				rotateX: rotate, // rotate in X-axis
// 				scale,
// 				boxShadow:
// 					"0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
// 			}}
// 			className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
// 		>
// 			<div className="grid w-full h-full grid-cols-1 gap-4 p-4 overflow-hidden bg-gray-100 rounded-2xl md:grid-cols-3 lg:grid-cols-5">
// 				{users.map((user, idx: number) => (
// 					<motion.div
// 						id="user"
// 						key={`user-${idx}`}
// 						className="relative bg-white rounded-md cursor-pointer"
// 						style={{ translateY: translate }}
// 						whileHover={{
// 							boxShadow:
// 								"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
// 						}}
// 					>
// 						<div className="absolute px-2 py-1 text-xs font-bold bg-white rounded-full top-2 right-2">
// 							{user.badge}
// 						</div>
// 						<img
// 							src={user.image}
// 							className="text-sm rounded-tr-md rounded-tl-md "
// 							alt="thumbnail"
// 						/>
// 						<div className="p-4">
// 							<h1 className="text-sm font-semibold ">{user.name}</h1>
// 							<h2 className="text-xs text-gray-500 ">{user.designation}</h2>
// 						</div>
// 					</motion.div>
// 				))}
// 			</div>
// 		</motion.div>
// 	);
// };
