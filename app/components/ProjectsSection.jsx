import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: 'React Portfolio Website',
        description: 'Portfolio website made using react and tailwind css.',
        image: '/images/projects/react-portfolio-proj.png',
        src: 'https://github.com/Mctripp10/react-portfolio',
        tag: ['All', 'Web']
    },
    {
        id: 2,
        title: 'React Portfolio Website',
        description: 'Project 2 description',
        image: '/images/projects/1.png',
        src: 'test',
        tag: ['All', 'Web']
    },
    {
        id: 3,
        title: 'React Portfolio Website',
        description: 'Project 2 description',
        image: '/images/projects/1.png',
        src: 'test',
        tag: ['All', 'Web']
    }
]

const ProjectsSection = () => {
    return (
        <>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {projectsData.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image} 
                        srcLink = {project.src}
                    />
                ))}
            </div>
        </>
    )
}

export default ProjectsSection;