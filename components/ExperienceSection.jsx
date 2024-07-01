import React from 'react';
import ExperienceCard from './ExperienceCard';

const experienceData = [
    {
        id: 1,
        company: "Westminster College",
        department: "Enrollment Management",
        title: "Data & Systems Analyst",
        startDate: "July 2023",
        endDate: "Present",
        description: 
        `Uphold high standards of data integrity through the daily maintenance and analysis of college data systems 
        Coordinate data collection for surveys and other data requests, including the IPEDS and Common Data Set 
        Communicate with campus partners to assess data needs`
    },
    {
        id: 2,
        company: "Westminster College",
        department: "ITS Department",
        title: "Lead Desktop Support Student Tech",
        startDate: "Feb 2020",
        endDate: "July 2023",
        description: 
        `Promoted to lead position in August 2021; supervised 6-8 student techs.
        Planned and coordinated team member project activity.
        Monitored daily performance of computer systems on campus.`
    },
    {
        id: 3,
        company: "Westminster College",
        department: "Academic Success Center",
        title: "Computer Science and Mathematics Tutor",
        startDate: "Aug 2021",
        endDate: "May 2022",
        description: 
        `Led individual or small group instruction to improve academic performance
        Provided feedback and positive reinforcement to students to foster learning and build confidence in them
        Courses tutored: Intro to Computer Science I \& II, Calculus I \& II, Discrete Math, and Database Design \& Development`
    }
]

const ExperienceSection = () => {
    return (
        <div className="flex flex-col text-center items-center">
            <h1 className="mt-52 mb-12 text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text w-96">
                Experience
            </h1>
            <div className='pb-16'>
                {experienceData.map((experience) => (
                    <ExperienceCard
                        key={experience.id}
                        company={experience.company}
                        department={experience.department}
                        title={experience.title}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        description={experience.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default ExperienceSection;