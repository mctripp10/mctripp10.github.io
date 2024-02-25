"use client";

import NavBarGeneral from "@/components/NavBarGeneral";
import ProjectsSection from "@/components/ProjectsSection";

export default function Projects() {
    return (
    <div>
        <main className="px-10 bg-gradient-to-b from-gray-900 to-violet-950 md:px-20 lg:px-40">
            <section className="min-h-screen">
                <NavBarGeneral />
                <div className="flex flex-col text-center items-center">
                    <h2 className="mt-52 mb-12 text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text">
                        My Projects
                    </h2>
                </div> 
                <ProjectsSection />
            </section>
        </main>
    </div>
    );
}