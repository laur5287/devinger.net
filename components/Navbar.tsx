import { ThemeToggle } from "./theme-toggle"
import { Menu } from 'lucide-react';
import { Button } from "./ui/button";


const NavBar = () => (
	<nav className="sticky top-0 z-10 flex items-center justify-between min-w-full p-4 mx-auto shadow-sm rounded-xl md:w-2/3 backdrop-blur-2xl ">
		<div id='wrapper_left' className="flex gap-2">
			<span className="font-sans text-xl font-extrabold">DEV</span>
		</div>
		<span className="flex-grow"></span>
		<div id='right-wrapper' className="flex gap-2">
			<ThemeToggle />
			<Button variant='ghost'>
				<Menu />

			</Button>
		</div>

	</nav>
)
export default NavBar