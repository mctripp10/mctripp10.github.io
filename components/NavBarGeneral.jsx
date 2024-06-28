import Link from 'next/link';

function NavBarGeneral() {
    return (
        <div>
            <nav className="w-full fixed left-0 right-0 z-10 backdrop-filter backdrop-blur-lg shadow-2xl">
                <div className="flex-row items-center justify-center px-4 mx-auto xl:max-w xl:px-12 xl:flex">
                    <div className="my-5 xl:my-8">
                        <h2 className="text-2xl text-center text-white font-bold xl:text-2xl xl:py-2 hover:bg-gradient-to-br from-pink-500 to-violet-600 hover:text-transparent bg-clip-text">
                            <Link href="/">
                                Michael Tripp<span className="py-5 bg-gradient-to-br from-pink-500 to-violet-600 text-transparent bg-clip-text">.</span>
                            </Link>
                        </h2>
                    </div>
                    <div className="flex-1 justify-self-center pb-5 xl:py-0">
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
                    <div className="hidden xl:block ml-auto text-white">
                        <ul className="flex items-center">
                            <li>
                                <Link
                                    className="text-sm bg-transparent bg-gradient-to-br from-pink-500 to-violet-600 font-bold rounded-lg p-[1px] uppercase
                                    transition-all duration-300 hover:bg-gradient-to-tl hover:from-pink-500 hover:via-violet-600 hover:to-pink-500 hover:bg-size-200 bg-pos-0 hover:bg-pos-100
                                  text-white ml-8 px-4 py-2"
                                    href="/jake_resume.pdf"
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

export default NavBarGeneral;