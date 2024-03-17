// 'use client'
import CallToAction from '@/components/cta'
import Title from '@/components/title'
import { CarouselExample } from '@/components/Carousel'
import Divider from '@/components/divider/Divider'
import GlassyText from '@/components/GlassyText/GlassyText'
import Link from 'next/link'
import Projects from '@/components/awwards/projects/Projects'
import Contact from '@/components/awwards/contact/Contact'
import SlidingImages from '@/components/awwards/slidingImages/SlidingImages'
import { BackgroundBeams } from "@/components/aceternity/background_beams";
import { ContainerScroll } from '@/components/aceternity/container-scroll-animation'

export default function Home() {
	const users = [
		{
			name: "Manu Arora",
			designation: "Founder, Algochurn",
			image: "https://picsum.photos/id/10/300/300",
			badge: "Mentor",
		},
		{
			name: "Sarah Singh",
			designation: "Founder, Sarah's Kitchen",
			image: "https://picsum.photos/id/11/300/300",
			badge: "Mentor",
		},
		{
			name: "John Doe",
			designation: "Software Engineer, Tech Corp",
			image: "https://picsum.photos/id/12/300/300",
			badge: "Mentor",
		},
		{
			name: "Jane Smith",
			designation: "Product Manager, Innovate Inc",
			image: "https://picsum.photos/id/13/300/300",
			badge: "Mentor",
		},
		{
			name: "Robert Johnson",
			designation: "Data Scientist, DataWorks",
			image: "https://picsum.photos/id/14/300/300",
			badge: "Mentor",
		},
		{
			name: "Emily Davis",
			designation: "UX Designer, DesignHub",
			image: "https://picsum.photos/id/15/300/300",
			badge: "Mentor",
		},
		{
			name: "Michael Miller",
			designation: "CTO, FutureTech",
			image: "https://picsum.photos/id/16/300/300",
			badge: "Mentor",
		},
		{
			name: "Sarah Brown",
			designation: "CEO, StartUp",
			image: "https://picsum.photos/id/17/300/300",
		},
		{
			name: "James Wilson",
			designation: "DevOps Engineer, CloudNet",
			image: "https://picsum.photos/id/18/300/300",
			badge: "Something",
		},
		{
			name: "Patricia Moore",
			designation: "Marketing Manager, MarketGrowth",
			image: "https://picsum.photos/id/19/300/300",
			badge: "Mentor",
		},
		{
			name: "Richard Taylor",
			designation: "Frontend Developer, WebSolutions",
			image: "https://picsum.photos/id/20/300/300",
		},
		{
			name: "Linda Anderson",
			designation: "Backend Developer, ServerSecure",
			image: "https://picsum.photos/id/21/300/300",
		},
		{
			name: "William Thomas",
			designation: "Full Stack Developer, FullStack",
			image: "https://picsum.photos/id/22/300/300",
			badge: "Badger",
		},
		{
			name: "Elizabeth Jackson",
			designation: "Project Manager, ProManage",
			image: "https://picsum.photos/id/23/300/300",
			badge: "Mentor",
		},
		{
			name: "David White",
			designation: "Database Administrator, DataSafe",
			image: "https://picsum.photos/id/24/300/300",
			badge: "Advocate",
		},
		{
			name: "Jennifer Harris",
			designation: "Network Engineer, NetConnect",
			image: "https://picsum.photos/id/25/300/300",
		},
		{
			name: "Charles Clark",
			designation: "Security Analyst, SecureIT",
			image: "https://picsum.photos/id/26/300/300",
		},
		{
			name: "Susan Lewis",
			designation: "Systems Analyst, SysAnalyse",
			image: "https://picsum.photos/id/27/300/300",
		},
		{
			name: "Joseph Young",
			designation: "Mobile Developer, AppDev",
			image: "https://picsum.photos/id/28/300/300",
			badge: "Mentor",
		},
		{
			name: "Margaret Hall",
			designation: "Quality Assurance, BugFree",
			image: "https://picsum.photos/id/29/300/300",
			badge: "Developer",
		},
	];

	return (
		<>
			<section id='landing_section' className="relative flex flex-col h-[300vh] ">
				{/* <Link href='/'><div className="header__ArrowHead-sc-1ljvmue-1 gTezeq"><svg fill="none" height="26" viewBox="0 0 47 26" width="47" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m5.01771 14.2501 9.86609 9.8661-1.7677 1.7678-12.883922-12.8839 12.883922-12.883889 1.7677 1.767769-9.86609 9.86612h41.98229v2.5z" fill="#000" fillRule="evenodd"></path></svg></div></Link> */}

				{/* <Link className='absolute right-0 w-32 h-16 fill-accent' href='/'>
					<svg viewBox="0 0 250 250" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{ transformOrigin: '130px 106px' }} className="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path></svg>
				</Link> */}
				<div className="flex relative flex-col justify-around xl:justify-center xl:gap-16 min-h-[80vh] " id="Hero">

					<BackgroundBeams />
					<Title />
					{/* <Curve /> */}
					<div className="flex justify-center font-sans text-3xl font-bold text-center bg-foreground backdrop-blur-sm text-wrap bg-clip-text">
						Devinger, where we craft your vision, perfect every pixel,
						and launch impactful online experiences.
						Your dreams, our reality.
					</div>
					<div id='cta-wrapper' style={{ "zIndex": "1" }} className=" z-2 place-self-center">
						<CallToAction />

					</div>
				</div>
				{/* {users.map(user => (
					<ContainerScroll
						key={Math.random()}
						users={users}

					/>
				))} */}
				<ContainerScroll
					users={users}
					titleComponent={
						<>
							<h1 className="  py-8 text-[6rem] font-bold leading-none  ">
								Projects <br />

							</h1>
						</>
					}

				/>
				<ContainerScroll
					users={users}

				/>
			</ section>
			{/* <section id='projects_section' className=''>
				<Projects />
			</section> */}
			{/* <SlidingImages /> */}
			{/* <Curve /> */}
			{/* <section> */}
			{/* <Contact /> */}
			{/* </section> */}

		</>
	)
}
