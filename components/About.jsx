import React from 'react';
import { motion as m } from "framer-motion";

const gradPic = './images/me/grad_pic.jpg';
const wowPic = './images/other/wow_gnome.png';
const origamiDragon = './images/other/origami_dragon.png';
const westminsterMe = './images/me/westminster_me.png';
const climbingPic = './images/me/climbing.jpg';

const About = () => {
    return (
        <div className='mx-auto pt-44 w-5/6 flex flex-col text-center items-center'>
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
                Where I came from.
            </m.p>
            <div className='pt-10 grid grid-cols-2 gap-x-10 max-w-4xl mx-auto'>
                <div className='text-left'>
                    <img
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.5, once: true }}
                        transition={{ duration: 0.5 }}
                        src={wowPic} 
                        className='object-cover w-[450px] h-[600px] rounded-2xl shadow-lg shadow-black cursor-wow' 
                    />
                    <m.div 
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.5 }}
                        className='px-5'
                    >
                        <h3 className='text-2xl pt-10 pb-5'>
                            A Passion for Creation 🛠️
                        </h3>
                        <p className='pb-10'>
                            Beyond technology, I also discovered how much I enjoyed building things and bringing ideas to life. I found creative outlets through school projects, continued developing my origami hobby, and explored game development for fun.

                            What interested me most was the process of starting with an idea, solving challenges along the way, and creating something useful or meaningful.
                        </p>
                    </m.div>
                    
                    <img
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.5 }}
                        src={gradPic} 
                        className='object-cover w-[450px] h-[600px] rounded-2xl shadow-lg shadow-black'
                    />
                    <m.div 
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.3, once: true }} 
                        transition={{ duration: 0.5 }}
                        className='px-5'
                    >
                        <h3 className='text-2xl pt-10 pb-5'>
                            What I&apos;m Doing Now 📌
                        </h3>
                        <p className='pb-10'>
                            Today, I work as a <span className="font-bold text-slate-300">Software Developer</span>, where I build ETL pipelines, data-driven solutions, and internal tools using SQL, Snowflake, and Python. My role allows me to solve business problems, improve workflows, and develop systems that support day-to-day operations.
                            <br/><br/>
                            I enjoy the variety of challenges that come with the work and the opportunity to keep learning through new projects and technologies.
                        </p>
                    </m.div>
                    
                    <img
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.5 }}
                        src={climbingPic} 
                        className='object-cover w-[450px] h-[600px] rounded-2xl shadow-lg shadow-black'
                    />
                </div>
                <div className='text-left'>
                    <m.div 
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.3, once: true }} 
                        transition={{ duration: 0.5 }}
                        className='px-5'
                    >
                        <h3 className='text-2xl pt-10 pb-5'>
                            A Love For Tech 💻
                        </h3>
                        <p className='pb-10'>
                            Some of my fondest childhood memories are of playing video games with my family. Whether it
                            was fighting through Wailing Caverns in <bold className='cursor-wow'>World of Warcraft</bold>,
                            building elaborate worlds in <bold> Minecraft</bold>, or creating my first game in <bold>Roblox</bold>,
                            gaming was both a source of enjoyment and an early introduction to creativity, technology, and
                            problem-solving. 
                            <br/><br/>
                            As I got older, that interest naturally grew into a deeper curiosity about how software works and is built.
                        </p>
                    </m.div>
                    
                    <img
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.5 }}
                        src={origamiDragon} 
                        className='object-cover w-[450px] h-[600px] rounded-2xl shadow-lg shadow-black'
                    />       
                    <m.div 
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.3, once: true }} 
                        transition={{ duration: 0.5 }}
                        className='px-5'
                    >
                        <h3 className='text-2xl pt-10 pb-5'>
                            I Graduated College! 🎉
                        </h3>
                        <p className='pb-10'>
                            As high school graduation approached, I began thinking seriously about what path I wanted to pursue. With growing
                            interests in technology, problem-solving, and mathematics, studying Computer Science felt like the right fit.
                            <br/><br/>
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
                        className='object-cover w-[450px] h-[600px] rounded-2xl shadow-lg shadow-black'
                    />
                    <m.div 
                        initial={{ y: "5%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ amount: 0.3, once: true }} 
                        transition={{ duration: 0.5 }}
                        className='px-5'
                    >
                        <h3 className='text-2xl pt-10 pb-5'>
                            Outside of Work.. 🧗‍♂️
                        </h3>
                        <p className='pb-10'>
                            Outside of work, I enjoy staying active, learning new things, and making time for hobbies that keep life balanced. 
                            You'll often find me playing my guitar, rock climbing, playing video games, or binge-watching a good series.
                            <br/><br/>
                            Thanks for taking the time to read a bit about me. <bold>Feel free to explore the rest of the site or reach out anytime.</bold>
                        </p>
                    </m.div>              
                    
                </div>
            </div>
        </div>
    )
}

export default About;