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
        title: 'Wi-Fi Positioning App',
        description: 'App that attempts to approximate user device location by scanning nearby Wi-Fi hotspots.',
        image: '/images/projects/wifi-positioning-app-proj.png',
        src: 'https://github.com/Mctripp10/wi-fi-positioning-app',
        tag: ['All', 'Web']
    },
    {
        id: 3,
        title: 'Neural Net Digit Classification',
        description: 'Program to identify handwritten digits using dense and convolutional neural nets on digit image data.',
        image: '/images/projects/neural_net_digit_classificiation_proj.png',
        src: 'https://github.com/Mctripp10/neural-network-handwritten-digit-classification',
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
                        srcUrl = {project.src}
                    />
                ))}
            </div>
        </>
    )
}

export default ProjectsSection;