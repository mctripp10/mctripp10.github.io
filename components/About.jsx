import React from 'react';
import { motion as m } from "framer-motion";

const gradPic = './images/me/grad_pic.jpg';
const wowPic = './images/other/wow_gnome.png';
const origamiDragon = './images/other/origami_dragon.png';
const westminsterMe = './images/me/westminster_me.png';
const climbingPic = './images/me/climbing.jpg';

const About = () => {
    return (
        <div className='mx-auto w-full max-w-6xl px-5 pt-28 sm:px-8 sm:pt-36 lg:px-12 lg:pt-44 flex flex-col text-center items-center'>
            <m.h2
                initial={{ y: "50%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ amount: 0.3, once: true }}
                transition={{ duration: 0.5 }}
                className='flex-col text-4xl md:text-5xl font-bold text-center'>
                About Me
            </m.h2>
            <m.p
                initial={{ y: "50%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ amount: 0.3, once: true }}
                transition={{ duration: 0.5 }}
                className='pt-5'>
                My journey into tech.
            </m.p>
            <div className='pt-10 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-x-10 max-w-5xl mx-auto'>
                <div className='text-left'>
                    <img
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.5, once: true }}
                        transition={{ duration: 0.5 }}
                        src={wowPic}
                        alt='Stylized World of Warcraft gnome artwork'
                        className='object-cover w-full max-w-[450px] h-[420px] sm:h-[520px] lg:h-[600px] rounded-2xl shadow-lg shadow-black cursor-wow mx-auto'
                    />
                    <m.div
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.5 }}
                        className='px-1 sm:px-5'
                    >
                        <h3 className='text-2xl pt-10 pb-5'>
                            Always Creating 🛠️
                        </h3>
                        <p className='pb-10'>
                            Beyond technology, I also really enjoyed creating and building out my own ideas. I found creative outlets through school projects, continued developing my origami hobby, and explored game development for fun.
                            <br /><br /> 
                            It was deeply gratifying to take an idea, build it from the ground up, and turn it into something meaningful to myself or others.
                        </p>
                    </m.div>

                    <img
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.5 }}
                        src={gradPic}
                        alt='Michael Tripp graduation portrait'
                        className='object-cover w-full max-w-[450px] h-[420px] sm:h-[520px] lg:h-[600px] rounded-2xl shadow-lg shadow-black mx-auto'
                    />
                    <m.div
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.5 }}
                        className='px-1 sm:px-5'
                    >
                        <h3 className='text-2xl pt-10 pb-5'>
                            What I&apos;m Doing Now 📌
                        </h3>
                        <p className='pb-10'>
                            Today, I work as a <span className="font-bold text-slate-300">Software Developer</span>, where I build ETL pipelines, data-driven solutions, and internal tools using SQL, Snowflake, and Python. My role allows me to solve business problems, improve workflows, and develop systems that support day-to-day operations.
                            <br /><br />
                            I enjoy the variety of challenges that come with the work and the opportunity to keep learning through new projects and technologies.
                        </p>
                    </m.div>

                    <img
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.5 }}
                        src={climbingPic}
                        alt='Michael Tripp rock climbing'
                        className='object-cover w-full max-w-[450px] h-[420px] sm:h-[520px] lg:h-[600px] rounded-2xl shadow-lg shadow-black mx-auto'
                    />
                </div>
                <div className='text-left'>
                    <m.div
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.5 }}
                        className='px-1 sm:px-5'
                    >
                        <h3 className='text-2xl pt-10 pb-5'>
                            Where It All Began 💻
                        </h3>
                        <p className='pb-10'>
                            Some of my fondest childhood memories are of playing video games with my family. Whether it
                            was fighting through Wailing Caverns in <bold className='cursor-wow'>World of Warcraft</bold>,
                            building elaborate worlds in <bold> Minecraft</bold>, or creating my first game in <bold>Roblox</bold>,
                            gaming was both a source of enjoyment and an early introduction to creativity, technology, and
                            problem-solving.
                            <br /><br />
                            Over time, that interest developed into a deeper curiosity about how software is built and why it works the way it does.                        </p>
                    </m.div>

                    <img
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.5 }}
                        src={origamiDragon}
                        alt='Origami dragon model'
                        className='object-cover w-full max-w-[450px] h-[420px] sm:h-[520px] lg:h-[600px] rounded-2xl shadow-lg shadow-black mx-auto'
                    />
                    <m.div
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.5 }}
                        className='px-1 sm:px-5'
                    >
                        <h3 className='text-2xl pt-10 pb-5'>
                            I Graduated College! 🎉
                        </h3>
                        <p className='pb-10'>
                            As high school graduation approached, I began thinking seriously about what path I wanted to pursue. With growing
                            interests in technology, development, and problem-solving, studying Computer Science felt like the right fit.
                            <br /><br />
                            Four years later, I graduated in Spring 2023 with a <bold className='font-bold text-gray-300'>Bachelor of Science
                            in Computer Science and Mathematics</bold>, picking up an extra math major I did not initially plan for!
                        </p>
                    </m.div>
                    <img
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.5 }}
                        src={westminsterMe}
                        alt='Michael Tripp on Westminster College campus'
                        className='object-cover w-full max-w-[450px] h-[420px] sm:h-[520px] lg:h-[600px] rounded-2xl shadow-lg shadow-black mx-auto'
                    />
                    <m.div
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.5 }}
                        className='px-1 sm:px-5'
                    >
                        <h3 className='text-2xl pt-10 pb-5'>
                            Outside of Work.. 🧗‍♂️
                        </h3>
                        <p className='pb-10'>
                            Outside of work, I enjoy staying active, learning new things, and making time for hobbies that keep life balanced.
                            You&apos;ll often find me playing guitar, rock climbing, playing video games, or binge-watching a good series.
                            <br /><br />
                            Thanks for taking the time to read a bit about me. <bold>Feel free to explore the rest of the site or reach out anytime.</bold>
                        </p>
                    </m.div>
                </div>
            </div>
        </div>
    )
}

export default About;
