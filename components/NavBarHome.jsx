import Link from 'next/link';

function NavBarHome() {
    return (
        <div>
            <nav className="w-full fixed left-0 right-0 z-10 backdrop-filter backdrop-blur-lg shadow-2xl">
                <div className="flex items-center justify-center px-12 mx-auto xl:max-w xl:flex">
                    <div className="my-10">
                        <div className="mt-1">
                            <ul className="flex font-mono gap-10 text-xl text-white items-center justify-center xl:gap-16">
                                <li className="text-center hover:bg-gradient-to-br from-pink-500 to-violet-600 hover:text-transparent bg-clip-text">
                                    <Link href="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="text-center hover:bg-gradient-to-br from-pink-500 to-violet-600 hover:text-transparent bg-clip-text ">
                                    <Link href="/projects">
                                        Projects
                                    </Link>
                                </li>
                                <li className="text-center hover:bg-gradient-to-br from-pink-500 to-violet-600 hover:text-transparent bg-clip-text ">
                                    <Link href="/experience">
                                        Experience
                                    </Link>
                                </li>
                                <li className="text-center hover:bg-gradient-to-br from-pink-500 to-violet-600 hover:text-transparent bg-clip-text ">
                                    <Link href="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden xl:block ml-auto text-white">
                        <ul className="flex items-center">
                            <li>
                                <Link
                                    className=" bg-transparent bg-gradient-to-br from-pink-500 to-violet-600 font-bold rounded-lg p-[1px] uppercase text-sm
                                    transition-all duration-300 hover:bg-gradient-to-tl hover:from-pink-500 hover:via-violet-600 hover:to-pink-500 hover:bg-size-200 bg-pos-0 hover:bg-pos-100
                                  text-white ml-8 px-4 py-2"
                                    href="/resume.pdf"
                                    target="_blank"
                                >
                                    Resume
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBarHome;