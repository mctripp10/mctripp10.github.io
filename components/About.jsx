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
                Allow me to introduce myself!
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
                            Aside from technology, I also began to realize how much I enjoyed <bold>creation and development</bold>. I sought creative outlets through school projects, 
                            discovered a passion for origami, and I started developing Roblox games for fun. 
                            <br/><br/>
                            I loved the process of creating
                            something out of nothing in my own unique way.
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
                            Since graduating, I now work for my alma mater as a <bold className='font-bold text-slate-300'>Data & Systems Analyst</bold>. Working here
                            has been such a priviledge as it has given me the opportunity to give back to all those who helped me develop the skillset I have today. 
                            <br/><br/>
                            Every day there is a new challenge, but I believe my background has well prepared me. It certainly helps that I have an amazing team as well. 😉
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
                            Some of my fondest childhood memories are of my family and I playing video games together. Whether it was
                            fighting through Wailing Caverns in <bold className='cursor-wow'>World of Warcraft</bold>, building an EPIC base in 
                            <bold> Minecraft</bold>, or developing my first game in <bold>Roblox</bold>,
                            video games were always a place of comfort for me.
                            <br/><br/>
                            As I grew older, this interest developed into a curiosity for how technology worked, and eventually, <bold>a love 
                            for tech as a whole.</bold>
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
                            As high school graduation was quickly approaching, I had to decide what career path I wanted to take. Due to this love of technology,
                            passion for creation, and my then growing interest for mathematics, I chose to go to college for Computer Science.
                            <br/><br/>
                            Four years later, in the Spring of 2023, I graduated from college with a <bold className='font-bold text-gray-300'>Bachelor of Science 
                            in Computer Science and Mathematics</bold>, picking up an extra math degree I did not initially plan for!
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
                            Well then, enough talk about work! I am a firm believer that your job should not define your entire life. 
                            <bold> There are so many other amazing things to enjoy in this world!</bold>
                            <br/><br/>
                            Out in the wild, you may find me rock climbing, snowboarding, binge-watching shows, or playing video games.
                            <br/><br/>
                            If you reached this part of my bio, thanks for reading! Feel feel to explore the rest of my site and <bold>reach out if there is anything you&apos;d like
                            contact me about</bold>, work related or not!
                        </p>
                    </m.div>              
                    
                </div>
            </div>
        </div>
    )
}

export default About;