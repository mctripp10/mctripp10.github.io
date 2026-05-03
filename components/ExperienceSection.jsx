import React from 'react';
import ExperienceCard from './ExperienceCard';

const experienceData = [
    {
        id: 1,
        company: "HRS Financing Technologies",
        department: "Engineering",
        title: "Software Developer II",
        startDate: "Mar 2025",
        endDate: "Present",
        description: 
        `Designed and maintained scalable ETL pipelines using SQL, Snowflake, and Python to ingest, transform, validate, and deliver data for reporting and analytics.
        Owned end-to-end implementation of a new enterprise client, leading ETL setup, custom Python development, deployment, and ongoing production support.
        Played a key role in redesigning the company's core ETL pipeline to improve configurability, deployment speed, and runtime performance.
        Built a custom cash flow engine in Python with SQL-defined configurations, leveraging Snowflake integration for performance optimization across 21M+ rows per run to satisfy new client business requirements.
        Optimized core Python engines for 6x faster runtime performance across a 100K+ asset portfolio using Snowflake DataFrame API, enabling significantly greater scalability across clients.
        Collaborated cross-functionally with clients and internal teams to deliver technical solutions, leveraging Agile workflows across Jira, GitHub, and Confluence.`
    },
    {
        id: 2,
        company: "Westminster College",
        department: "Enrollment Management",
        title: "Data & Systems Analyst",
        startDate: "July 2023",
        endDate: "Mar 2025",
        description: 
        `Provided application support and troubleshooting for institutional software, ensuring data integrity and system reliability.
        Automated annual reporting processes through SQL, Python, and Pandas, reducing completion time by 32%.
        Collaborated with cross-functional teams to improve data integration processes, reducing manual workload by over 20%.
        Leveraged HTML and CSS to build and troubleshoot student and staff portals as well as email communications.
        Received the "Titan Above and Beyond Award" for enhancing financial aid systems and improving data integrations.`
    },
    {
        id: 3,
        company: "Westminster College",
        department: "ITS Department",
        title: "Lead Desktop Support Student Tech",
        startDate: "Feb 2020",
        endDate: "July 2023",
        description: 
        `Promoted to lead position in August 2021 and supervised and trained a team of 6-8 student technicians.
        Managed team projects, developing action plans to improve operational efficiency and issue resolution.
        Diagnosed and resolved technical issues for campus stakeholders, providing excellent customer service.
        Helped optimize team workflows, contributing to a 66% reduction in open work orders.`
    }
]

const ExperienceSection = () => {
    return (
        <div className="w-full max-w-6xl">
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
    )
}

export default ExperienceSection;
