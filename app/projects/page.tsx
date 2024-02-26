
import { CarouselExample } from '@/components/Carousel'
import './css/base.css'
import './pater/pater.css'
import Script from 'next/script';

const ProjectsPage = () => {
	return (
		<>
			<main id='projects' className="demo-3 loading">
				<div className="slideshow">
					<div className="slides">
						<div className="slide slide--current">
							<div className="slide__img" style={{ backgroundImage: 'url(/projects_images/blackjack.webp)' }}></div>
							<h2 className="slide__title">Blackjack</h2>
							<p className="slide__desc">Free online blackjack game</p>
							<a className="slide__link" href="#">DEAL</a>
						</div>
						<div className="slide">
							<div className="slide__img" style={{ backgroundImage: 'url(/projects_images/chatgptYourFiles.webp)' }}></div>
							<h2 className="slide__title">chatgptYourFiles</h2>
							<p className="slide__desc">Upload your own files and bring them to life</p>
							<a className="slide__link" href="#">Try it</a>
						</div>

					</div>
					<nav className="slidenav">
						<button className="slidenav__item slidenav__item--prev">Previous</button>
						<span>/</span>
						<button className="slidenav__item slidenav__item--next">Next</button>
					</nav>
				</div>
				{/* <Script strategy='afterInteractive' src=""></Script> */}
				<Script strategy='afterInteractive' src="/js/imagesloaded.pkgd.min.js"></Script>
				<Script strategy='afterInteractive' src="/js/anime.min.js"></Script>
				<Script strategy='afterInteractive' type='module' src="/js/demo3.js"></Script>
				{/* <Script src="anime.min.js"></Script> */}



			</main>
		</>
	);
};
export default ProjectsPage;