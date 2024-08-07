"use client";

import Head from "next/head";
import { useState } from "react";
import NavBarGeneral from "@/components/NavBarGeneral";

export default function About() {

    return (
    <div>
      <Head>
        <title>Create Next App</title>
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
                  Regardless of the task, problem-solving is key to everything I do. I find it very rewarding to be able to collaborate on 
                  real-world problems every day. There is always something interesting to work on! <br /><br />

                  As a {' '}
                  <span className="font-bold bg-gradient-to-br from-pink-500 to-violet-600 text-transparent bg-clip-text"> 
                  mathematician with a keen interest in coding
                  </span>
                  , I find the ability to use computer programming to implement solutions to mathematical problems very interesting. 
                  Furthermore, creation and development have always been a passion of mine, so I love exploring what is possible to build with the technologies at my disposal.
                  The process of creating something from nothing and then finding ways to use that creation to solve real-world problems is particularly gratifying to me. <br /><br />

                  Prior to my work as a data analyst, I worked as a desktop support student tech for Westminster College&apos;s ITS department for almost the entirety of my college career.
                  I graduated from Westminster College in May 2023 with a {' '}
                  <span className="font-bold bg-gradient-to-br from-pink-500 to-violet-600 text-transparent bg-clip-text"> 
                  Bachelor of Science in Computer Science and Mathematics
                  </span>, allowing me to 
                  transition into my current role in data. <br /><br />

                  In my free time, I enjoy playing board and video games as well as many rec sports (rock climbing, snowboarding, volleyball, & pickleball are my favorites).
                  I also enjoy origami, learning new technologies, and binge-watching series. <br /><br />

                  My goal is to not only use this website to showcase some of my projects and skills as a developer, but also provide myself with a platform for 
                  continual learning and development. If any of that sounds interesting to you, {' '}
                  <span className="font-bold bg-gradient-to-br from-pink-500 to-violet-600 text-transparent bg-clip-text"> 
                  feel free to browse my website and reach out if you have any questions!
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