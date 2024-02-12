import Link from 'next/link';
import { BsFillMoonStarsFill } from "react-icons/bs";

function NavBarGeneral() {
    return (
        <div>
            <nav className="w-full fixed left-0 right-0 z-10 backdrop-filter backdrop-blur-lg shadow-2xl">
                <div className="flex px-4 mx-auto lg:max-w md:items-center md:flex md:px-8">
                    <div className="my-10">
                        <h2 className="text-5xl text-white font-bold px-8 md:text-3xl hover:bg-gradient-to-br from-pink-500 to-violet-600 hover:text-transparent bg-clip-text">
                            <Link href="/pages/home">
                                Michael Tripp<span className="py-5 bg-gradient-to-br from-pink-500 to-violet-600 text-transparent bg-clip-text">.</span>
                            </Link>
                        </h2>
                    </div>
                    <div className="flex-1 justify-self-center">
                        <ul className="font-mono gap-16 pr-16 h-screen text-2xl text-white md:h-auto items-center justify-center md:flex ">
                            <li className="text-center border-b-2 py-2 hover:bg-gradient-to-br from-pink-500 to-violet-600 hover:text-transparent bg-clip-text md:border-b-0">
                                <Link href="/pages/about">
                                    About
                                </Link>
                            </li>
                            <li className="text-center border-b-2 hover:bg-gradient-to-br from-pink-500 to-violet-600 hover:text-transparent bg-clip-text md:border-b-0">
                                <Link href="/pages/projects">
                                    Projects
                                </Link>
                            </li>
                            <li className="text-center border-b-2 hover:bg-gradient-to-br from-pink-500 to-violet-600 hover:text-transparent bg-clip-text md:border-b-0">
                                <Link href="/pages/experience">
                                    Experience
                                </Link>
                            </li>
                            <li className="text-center border-b-2 hover:bg-gradient-to-br from-pink-500 to-violet-600 hover:text-transparent bg-clip-text md:border-b-0">
                                <Link href="/pages/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ml-auto text-white">
                        <ul className="flex items-center px-8">
                            <li>
                                <BsFillMoonStarsFill
                                onClick={() => setDarkMode(!darkMode)}
                                className=" cursor-pointer text-2xl text-gray-800 dark:text-white"
                                />
                            </li>
                            <li>
                                <button
                                    className="bg-transparent bg-gradient-to-br from-pink-500 to-violet-600 font-bold rounded-lg p-[1px] uppercase text-sm
                                    transition-all duration-300 hover:bg-gradient-to-tl hover:from-pink-500 hover:via-violet-600 hover:to-pink-500 hover:bg-size-200 bg-pos-0 hover:bg-pos-100
                                  text-white ml-8 px-4 py-2"
                                    href="#"
                                >
                                    Resume
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBarGeneral;