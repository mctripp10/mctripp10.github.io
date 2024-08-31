import React from 'react';
import ExperienceSection from "@/components/ExperienceSection";

const Experience = () => {
    return (
      <div>
          <section className="md:px-20 lg:px-40 min-h-screen flex flex-col text-center items-center">
            <h1 className="pt-32 text-4xl md:text-5xl font-bold w-96">
                Experience
            </h1>
            <p className='pt-5 pb-10'>
                My career journey in tech.
            </p>
            <ExperienceSection />
          </section>
    </div>
    )
}

export default Experience;