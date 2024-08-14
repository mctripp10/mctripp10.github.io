"use client";

import Head from "next/head";
import { useState } from "react";
import NavBarGeneral from "@/components/NavBarGeneral";
import ReactGA from 'react-ga';
ReactGA.initialize('G-CST3MZ06DS');

if (typeof window === "undefined") {
  console.log("Oops, `window` is not defined")
} else {
  ReactGA.pageview(window.location.pathname + window.location.search);
}

export default function About() {

    return (
    <div>
      <Head>
        <title>Michael Tripp - About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-b px-10 from-gray-900 to-violet-950 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <NavBarGeneral />
          <div className="flex flex-col text-center items-center">
            <h1 className="mt-52 mb-12 text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text w-96">
                About Me
            </h1>
            <div className="mb-20 xl:mx-32 rounded-3xl bg-gray-900 shadow-[0px_0px_20px_10px_#00000024]">
              <div className="mx-8 my-6 sm:mx-16 sm:my-12">
                <p className="text-xl font-light text-left mt-8">
                  Hello and welcome to my website! I&apos;m Michael Tripp, a {' '}
                  <span className="font-bold bg-gradient-to-br from-pink-500 to-violet-600 text-transparent bg-clip-text"> 
                  data & systems analyst by day
                  </span>
                  {' '} and a {' '}
                  <span className="font-bold bg-gradient-to-br from-pink-500 to-violet-600 text-transparent bg-clip-text"> 
                  software developer by night 
                  </span> (or early morning).
                  My work revolves around problem-solving, which I find incredibly fulfilling—there's always something intriguing to tackle. <br /><br />

                  As a {' '}
                  <span className="font-bold bg-gradient-to-br from-pink-500 to-violet-600 text-transparent bg-clip-text"> 
                  mathematician with a strong interest in coding
                  </span>
                  , I'm fascinated by the power of computer programming to bring mathematical concepts to life. 
                  I've always been passionate about creation and development, and I relish the opportunity to explore the potential of the technologies at my disposal. 
                  The process of building something from the ground up and then applying it to solve real-world challenges is deeply gratifying for me. <br /><br />

                  Before stepping into my current role as a data analyst, I gained valuable experience as a desktop support student technician with Westminster College's ITS department, 
                  where I worked throughout most of my undergraduate studies. In May 2023, I earned my {' '}
                  <span className="font-bold bg-gradient-to-br from-pink-500 to-violet-600 text-transparent bg-clip-text"> 
                  Bachelor of Science in Computer Science and Mathematics
                  </span> from Westminster College, which laid the foundation for my current career path. <br /><br />

                  In my free time, I enjoy playing board and video games as well as many rec sports (rock climbing, snowboarding, volleyball, & pickleball are my favorites).
                  I also enjoy origami, learning new technologies, and binge-watching series. <br /><br />

                  This website serves as a platform not only to showcase my projects and skills as a developer but also to foster continual learning and growth.
                  If any of this resonates with you, {' '}
                  <span className="font-bold bg-gradient-to-br from-pink-500 to-violet-600 text-transparent bg-clip-text"> 
                  feel free to explore my site and reach out with any questions!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    );
}
