"use client";

import {useRef} from 'react';
import Head from "next/head";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const handleClickHome = () => {
    homeRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickAbout = () => {
    aboutRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickProjects = () => {
    projectsRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickExperience = () => {
    experienceRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickContact = () => {
    contactRef.current?.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <div>
      <Head>
        <title>Michael Tripp</title>
        <meta name="description" content="Personal Portolfio Website" />
        <a rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-900 text-white">
      <div>
            <nav className="w-full fixed right-0 z-20 backdrop-filter backdrop-blur-lg shadow-2xl">
                <div className="flex items-center justify-center mx-auto">
                    <div className="my-2.5 sm:my-10">
                        <div>
                            <ul className="flex flex-col sm:flex-row font-mono gap-1 sm:gap-10 text-xl text-white items-center justify-center xl:gap-16">
                                <li className="text-center hover:text-sky-500 transition-all duration-200">
                                    <button onClick={handleClickHome}>
                                        Home
                                    </button>
                                </li>
                                <li className="text-center hover:text-sky-500 transition-all duration-200">
                                    <button onClick={handleClickAbout}>
                                        About
                                    </button>
                                </li>
                                <li className="text-center hover:text-sky-500 transition-all duration-200">
                                    <button onClick={handleClickProjects}>
                                        Projects
                                    </button>
                                </li>
                                <li className="text-center hover:text-sky-500 transition-all duration-200">
                                    <button onClick={handleClickExperience}>
                                        Experience
                                    </button>
                                </li>
                                <li className="text-center hover:text-sky-500 transition-all duration-200">
                                    <button onClick={handleClickContact}>
                                        Contact
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
      </main>
      <div ref={contactRef}>
          <Contact />
        </div>
    </div>
  );
}
