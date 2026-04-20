import React from 'react';
import ProjectsSection from "@/components/ProjectsSection";
import { motion as m } from "framer-motion";

const Home = () => {
    return (
        <section className="px-5 sm:px-8 md:px-20 lg:px-30 xl:px-40 min-h-screen">
            <div className="flex flex-col text-center items-center">
                <h2 className="pt-28 sm:pt-32 text-3xl md:text-5xl font-bold bg-clip-text">
                    My Projects
                </h2>
                <p className='pt-5 pb-10 px-2 sm:px-5 max-w-2xl'>
                    Check out these links to my GitHub to see some of my favorite projects I&apos;ve worked on.
                </p>
            </div> 
            <ProjectsSection />
        </section>
    )
}

export default Home;
