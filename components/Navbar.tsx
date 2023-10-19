import { ThemeToggle } from "./theme-toggle"
import { Menu } from 'lucide-react';
import { Button } from "./ui/button";


const NavBar = () => (
    <nav className="flex justify-between items-center p-3 ">
        <div id='wrapper_left' className="flex gap-2">
            <span className="">logo</span>
            <span className="">Devinger</span>
        </div>
        <div className="flex-grow"></div>
        <div id='right-wrapper' className="flex gap-2">
            <ThemeToggle />
            <Button variant='ghost'>
                <Menu />

            </Button>
        </div>

    </nav>
)
export default NavBar