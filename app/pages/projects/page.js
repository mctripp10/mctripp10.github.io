"use client";

import { useState } from "react";
import NavBarGeneral from "@/app/components/NavBarGeneral";
import ProjectsSection from "@/app/components/ProjectsSection";

export default function Projects() {
    const [darkMode, setDarkMode] = useState(true);

    return (
    <div className={darkMode ? "dark" : ""}>
        <main className="bg-gradient-to-b from-white to-violet-700 px-10 dark:bg-gradient-to-b dark:from-gray-900 dark:to-violet-950 md:px-20 lg:px-40">
            <section className="min-h-screen">
                <NavBarGeneral />
                <div className="flex flex-col text-center">
                    <h2 className="mt-52 mb-8 text-3xl md:text-6xl font-bold bg-gradient-to-br from-pink-500 to-violet-600 text-transparent bg-clip-text">
                        My Projects
                    </h2>
                    <ProjectsSection />
                </div> 
            </section>
        </main>
    </div>
    );
}