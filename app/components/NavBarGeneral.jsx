import Link from 'next/link';
import { BsFillMoonStarsFill } from "react-icons/bs";

function NavBarGeneral() {
    return (
        <div>
            <nav className="w-full fixed left-0 right-0 z-10">
                <div className="flex px-4 mx-auto lg:max-w md:items-center md:flex md:px-8">
                    <div className="my-10">
                        <h2 className="text-5xl text-white font-bold px-8 md:text-3xl hover:bg-gradient-to-br from-pink-500 to-violet-600 hover:text-transparent bg-clip-text">
                            <Link href="/pages/home">
                                Michael Tripp<span className="py-5 bg-gradient-to-br from-pink-500 to-violet-600 text-transparent bg-clip-text">.</span>
                            </Link>
                        </h2>
                    </div>
                    <div className="flex-1 justify-self-center">
                        <ul className="font-mono h-screen text-2xl text-white md:h-auto items-center justify-center md:flex ">
                            <li className="pr-8 text-center border-b-2 py-2 hover:bg-gradient-to-br from-pink-500 to-violet-600 hover:text-transparent bg-clip-text md:border-b-0">
                                <Link href="/pages/about">
                                    About
                                </Link>
                            </li>
                            <li className="px-8 text-center border-b-2 hover:bg-gradient-to-br from-pink-500 to-violet-600 hover:text-transparent bg-clip-text md:border-b-0">
                                <Link href="#blog">
                                    Projects
                                </Link>
                            </li>
                            <li className="px-8 text-center border-b-2 hover:bg-gradient-to-br from-pink-500 to-violet-600 hover:text-transparent bg-clip-text md:border-b-0">
                                <Link href="#contact">
                                    Experience
                                </Link>
                            </li>
                            <li className="pl-8 pr-16 text-center border-b-2 hover:bg-gradient-to-br from-pink-500 to-violet-600 hover:text-transparent bg-clip-text md:border-b-0">
                                <Link href="#projects">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ml-auto text-white">
                        <ul className="flex px-8">
                            <li>
                                <BsFillMoonStarsFill
                                onClick={() => setDarkMode(!darkMode)}
                                className=" cursor-pointer text-2xl text-gray-800 dark:text-white"
                                />
                            </li>
                            <li>
                                <a
                                className="bg-gradient-to-br from-pink-500 to-violet-700 text-white px-4 py-2 border-none rounded-md ml-8"
                                href="#">
                                Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBarGeneral;