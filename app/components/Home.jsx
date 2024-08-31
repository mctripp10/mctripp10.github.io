import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { motion as m } from "framer-motion";

const ProfBodyShot = './images/me/prof_torso_shot_transparent_v3.png';

const Home = () => {
    return (
        <section className="px-5 sm:px-20 md:px-20 lg:px-40 xl:px-60 min-h-screen">
            <div className="relative sm:flex sm:flex-row h-screen pt-20 text-center sm:text-left items-center">
                <div className="sm:absolute left-0 z-10">
                    <div className='overflow-hidden'>
                        <m.h3 
                            initial={{ y: "100%" }} 
                            animate={{ y: 0 }} 
                            transition={{ duration: 1.0 }}
                            className="font-mono text-2xl text-sky-500 md:text-3xl"
                        >
                        Hi, my name is
                        </m.h3>
                    </div>
                    <div className='overflow-hidden'>
                        <m.h2 
                            initial={{ y: "100%" }} 
                            animate={{ y: 0 }} 
                            transition={{ delay: 0.5, duration: 1.0 }}
                            className="text-4xl pt-5 text-white font-bold md:text-5xl xl:text-7xl"
                        >
                        Michael Tripp
                        </m.h2>
                    </div>
                    <div className='overflow-hidden'>
                        <m.p 
                            initial={{ y: "100%" }} 
                            animate={{ y: 0 }} 
                            transition={{ delay: 0.7, duration: 1.0 }}
                            className="pt-5 sm:w-7/12"
                        >
                        Nice to meet you! I am a <span className="font-bold text-gray-300">Data & Systems Analyst</span> by day and a  
                        <span className="font-bold text-gray-300"> Hobbyist Software Developer</span> by night. I enjoy solving problems
                        and am always looking for new challenges to tackle!
                        </m.p>
                    </div>
                    <div className="text-4xl flex mb-10 sm:mb-0 justify-left gap-16 pt-10 text-gray-400 overflow-hidden">
                        <m.div
                            initial={{ y: "125%" }} 
                            animate={{ y: 0 }} 
                            transition={{ delay: 0.8, duration: 1.0 }}
                        >
                            <a className="transition-colors hover:text-gray-300" href="https://www.linkedin.com/in/michaelctripp/" target="_blank">
                                <BsLinkedin />
                            </a>
                        </m.div>
                        <m.div 
                            initial={{ y: "125%" }} 
                            animate={{ y: 0 }} 
                            transition={{ delay: 0.9, duration: 1.0 }}
                            className="overflow-hidden">
                            <a 
                                className="transition-colors hover:text-gray-300" href="https://github.com/Mctripp10" target="_blank">
                                <BsGithub />
                            </a>
                        </m.div>
                        <m.div
                            initial={{ y: "125%" }} 
                            animate={{ y: 0 }} 
                            transition={{ delay: 1.0, duration: 1.0 }}
                        >
                            <a className="transition-colors hover:text-gray-300" href="https://www.instagram.com/mc_fold/" target="_blank">
                                <BsInstagram />
                            </a>
                        </m.div>
                    </div>
                </div>
                <m.img 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 100 }} 
                    transition={{ delay: 0.5, duration: 1.0 }}
                src={ProfBodyShot} className="mx-auto sm:mx-0 sm:absolute object-cover top-32 h-[50%] sm:h-[100%] right-0 scale-x-[-1] z-0"/>
            </div>
        </section>
    )
}

export default Home;