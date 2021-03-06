import Image from "next/image";
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <>
        <nav className=" shadow-md bg-white p-2 w-full font-montserrat">
            <div className=" flex flex-col sm:flex-row items-center justify-center">
                <Image className=" rounded-lg cursor-pointer" src="https://imgur.com/OGcsWsU.png" width={110} height={50} alt="logo"/>
                <div className=" sm:w-1/2 flex space-x-2 sm:space-x-0 sm:ml-36 sm:justify-between items-baseline font-semibold text-sm sm:text-base">
                    <div className="cursor-pointer hover:text-blue-500">
                        <Link to="header" smooth={true} duration={1000}>Home</Link>
                    </div>
                    <div className="cursor-pointer hover:text-blue-500">
                        <Link to="aboutme" smooth={true} duration={1000}>About</Link>
                    </div>
                    <div className="cursor-pointer hover:text-blue-500">
                        <Link to="skills" smooth={true} duration={1000}>Skills</Link>
                    </div>
                    <div className="cursor-pointer hover:text-blue-500">
                        <Link to="services" smooth={true} duration={1000}>Services</Link>
                    </div>
                    <div className="cursor-pointer hover:text-blue-500">
                        <Link to="interests" smooth={true} duration={1000}>Interests</Link>
                    </div>
                    <div className="cursor-pointer hover:text-blue-500">
                        <Link to="contactme" smooth={true} duration={1000}>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Navbar
        