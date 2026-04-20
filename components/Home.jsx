import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { motion as m } from "framer-motion";

const ProfBodyShot = './images/me/prof_torso_shot_transparent_v3.png';

const Home = () => {
    return (
        <section className="px-5 sm:px-12 md:px-20 lg:px-40 xl:px-60 min-h-screen">
            <div className="relative flex min-h-screen flex-col justify-center gap-10 pt-28 pb-10 text-center sm:pt-32 sm:pb-16 sm:text-left md:gap-12 lg:flex-row lg:items-center lg:justify-between">
                <div className="z-10 w-full lg:max-w-2xl">
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
                            className="pt-5 mx-auto max-w-xl text-base sm:mx-0 sm:max-w-2xl md:text-lg"
                        >
                        Nice to meet you! I&apos;m a <span className="font-bold text-gray-300">Software Developer</span> specializing
                        in ETL, data pipeline automation, and application development using SQL, Snowflake, and Python.
                        </m.p>
                    </div>
                    <div className="text-3xl sm:text-4xl flex justify-center sm:justify-start gap-10 sm:gap-16 pt-10 text-gray-400 overflow-hidden">
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
                src={ProfBodyShot} alt="Michael Tripp portrait" className="mx-auto h-auto w-full max-w-[280px] scale-x-[-1] object-contain sm:max-w-[360px] md:max-w-[420px] lg:mx-0 lg:max-w-[460px] xl:max-w-[520px]"/>
            </div>
        </section>
    )
}

export default Home;
