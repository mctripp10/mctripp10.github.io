import Link from 'next/link';

function NavBar() {
    return (
        <div>
            <nav className="w-full fixed top-10 left-0 right-0 z-10">
                <div className="font-mono justify-center px-4 pb-4 mx-auto border-b-2 border-slate-300 lg:max-w md:items-center md:flex md:px-8">
                    <div>
                        <div
                        className={'flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0'}
                        >
                        <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                            <li className="pb-6 text-2xl text-white py-2 px-8 text-center border-b-2 bg-gradient-to-br from-pink-500 to-violet-600 text-transparent bg-clip-text md:border-b-0">
                            <Link href="#about">
                                About
                            </Link>
                            </li>
                            <li className="pb-6 text-2xl text-white py-2 px-8 text-center  border-b-2 md:border-b-0">
                            <Link href="#blog">
                                Blogs
                            </Link>
                            </li>
                            <li className="pb-6 text-2xl text-white py-2 px-8 text-center  border-b-2 md:border-b-0">
                            <Link href="#contact">
                                Contact
                            </Link>
                            </li>
                            <li className="pb-6 text-2xl text-white py-2 px-8 text-center  border-b-2 md:border-b-0">
                            <Link href="#projects">
                                Projects
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;