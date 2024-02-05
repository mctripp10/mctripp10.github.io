import React from 'react';
import ExperienceCard from './ExperienceCard';

const experienceData = [
    {
        id: 1,
        company: "Westminster College",
        title: "Data & Systems Analyst",
        startDate: "July 2023",
        endDate: "Present",
        description: `
        Uphold high standards of data integrity through the daily maintenance and analysis of college data systems. 
        Write queries to pull data from institutional databases using SQL and other database tools. 
        Coordinate data collection for survey submissions and other data requests, including the USNEWS and Common Data Set surveys. 
        Communicate with campus partners to assess data needs.`
    },
    {
        id: 2,
        company: "Westminster College",
        title: "Lead Desktop Support Student Tech",
        startDate: "February 2020",
        endDate: "July 2023",
        description: "DESC"
    }
]

const ExperienceSection = () => {
    return (
        <div className="flex flex-col text-center">
            <h1 className="mt-52 mb-8 text-3xl md:text-6xl font-bold bg-gradient-to-br from-pink-500 to-violet-600 text-transparent bg-clip-text">
                Experience
            </h1>
            <div className="mx-52 mb-20 ">
                {experienceData.map((experience) => (
                    <ExperienceCard
                        key={experience.id}
                        company={experience.company}
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