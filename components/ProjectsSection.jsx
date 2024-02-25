import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: 'Wi-Fi Positioning App',
        description: 'Investigates the ability to approximate user device location by scanning nearby Wi-Fi hotspots.',
        image: '/images/projects/wifi-positioning-app-proj-inverted.png',
        src: 'https://github.com/Mctripp10/wi-fi-positioning-app',
        tags: ['All', 'Python', 'Network', 'Windows WLAN API']
    },
    {
        id: 2,
        title: 'Neural Net Digit Classification',
        description: 'Program to identify handwritten digits using dense and convolutional neural nets on digit image data.',
        image: '/images/projects/neural_net_digit_classificiation_proj.png',
        src: 'https://github.com/Mctripp10/neural-network-handwritten-digit-classification',
        tags: ['All', 'Python', 'Keras', 'Machine Learning']
    },
    {
        id: 3,
        title: 'Melon Mall Website',
        description: 'A "for fun" website dedicated to the celebration of melons and all they have to offer.',
        image: '/images/projects/melon-mall-proj.png',
        src: 'https://github.com/Mctripp10/melon-mall',
        tags: ['All', 'Web', 'HTML', 'CSS', 'JavaScript']
    },
    {
        id: 4,
        title: 'React Portfolio Website',
        description: 'Portfolio website made using react and tailwind css.',
        image: '/images/projects/react-portfolio-proj.png',
        src: 'https://github.com/Mctripp10/react-portfolio',
        tags: ['All', 'Web', 'React.js', 'Tailwind CSS']
    },
    {
        id: 5,
        title: 'Clustering Iris Flower Data',
        description: 'Utilizes unsupervised learning clustering algorithms to analyze and build predictive models for the iris flower dataset.',
        image: '/images/projects/clustering-iris-flower-data-proj.png',
        src: 'https://github.com/Mctripp10/clustering-iris-flower-data',
        tags: ['All', 'Python', 'Keras', 'Machine Learning']
    }
    
]

const ProjectsSection = () => {
    return (
        <>
            <div className='flex flex-wrap justify-center text-center gap-8 md:gap-12 pb-16'>
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image} 
                        srcUrl = {project.src}
                        tags = {project.tags}
                    />
                ))}
            </div>
        </>
    )
}

export default ProjectsSection;