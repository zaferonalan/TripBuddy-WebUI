import { useState } from "react"
import { HiMenuAlt1 } from "react-icons/hi"
import { Link } from "react-router-dom"
import ResponsiveMenu from "./ResponsiveMenu"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
  return (
    <header className="sticky mx-auto top-0 transition-all py-6 bg-transparent z-10">
        <div className="bg-transparent/75 px-4 fixed w-full z-50 top-0 py-2">
            <div className="max-w-7xl mx-auto py-2 px-5 flex bg-transparent justify-between items-center">
                <Link to="/">
                    <h1 className="text-2xl text-white font-bold">Trip<span className="text-red-500">Buddy</span></h1>
                </Link>
                <div className="flex items-center gap-5">
                    <nav className="hidden md:flex gap-7">
                        <ul className="flex items-center font-semibold text-white text-xl gap-7">
                            <Link to="/"> <li>Home</li> </Link>
                            <Link to="/about"> <li>About Us</li> </Link>
                            <Link to="/tours"> <li>Tours</li> </Link>
                            <Link to="/gallery"> <li>Gallery</li> </Link>
                            <Link to="/contact"> <li>Contact</li> </Link>
                        </ul>
                        <button className="bg-red-500 text-white px-4 py-1 rounded-md font-semibold">Book Now</button>
                    </nav>
                    <HiMenuAlt1
                        onClick={toggleMenu}
                        className="text-white cursor-pointer md:hidden"
                        size={30}
                    />
                </div>
            </div>
            <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
        </div>
    </header>
)
}

export default Navbar