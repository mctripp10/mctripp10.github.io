import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: 'Wi-Fi Positioning System',
        description: 'Application to approximate user device location by scanning nearby Wi-Fi hotspots.',
        image: './images/projects/wifi-positioning-app-proj-inverted.png',
        src: 'https://github.com/Mctripp10/wi-fi-positioning-app',
        tags: ['All', 'Python', 'WLAN API', 'Network']
    },
    {
        id: 2,
        title: 'Clustering Iris Flower Data',
        description: 'Unsupervised learning clustering algorithms to analyze and build predictive models for the iris flower dataset.',
        image: './images/projects/clustering-iris-flower-data-proj.png',
        src: 'https://github.com/Mctripp10/clustering-iris-flower-data',
        tags: ['All', 'Python', 'Machine Learning']
    },
    {
        id: 3,
        title: 'Neural Net Digit Classification',
        description: 'Program to identify handwritten digits using dense and convolutional neural nets on digit image data.',
        image: './images/projects/neural_net_digit_classificiation_proj.png',
        src: 'https://github.com/Mctripp10/neural-network-handwritten-digit-classification',
        tags: ['All', 'Python', 'TensorFlow', 'Keras']
    },
    {
        id: 4,
        title: 'The Burning Number in Directed Graphs',
        description: 'Directed acyclic graph (DAG) generator and "burner" for the purpose of research on graph burning.',
        image: './images/projects/digraph-network.png',
        src: 'https://github.com/Mctripp10/dag-generator',
        tags: ['All', 'Java', 'Graph Theory', 'Research']
    },
    {
        id: 5,
        title: 'Bouncy Bouncy',
        description: 'GUI application that uses OpenGL to display a user-drawn object bouncing within a user-drawn boundary',
        image: './images/projects/bouncy-bouncy-proj.png',
        src: 'https://github.com/Mctripp10/bouncy-bouncy',
        tags: ['All', 'C++', 'OpenGL', 'Linear Algebra']
    },
    {
        id: 6,
        title: 'Memory Game',
        description: 'Memory game in which the player must attempt to remove all cards by flipping over matching pairs.',
        image: './images/projects/memory-game-proj.png',
        src: 'https://github.com/Mctripp10/memory-game',
        tags: ['All', 'C++', 'OpenGL']
    },
    {
        id: 7,
        title: 'Melon Mall Website',
        description: 'A "for fun" website dedicated to the celebration of melons and all they have to offer.',
        image: './images/projects/melon-mall-proj.png',
        src: 'https://github.com/Mctripp10/melon-mall',
        tags: ['All', 'HTML', 'CSS', 'JavaScript']
    },
    {
        id: 8,
        title: 'This Website',
        description: 'My personal portfolio website used to showcase everything you see here.',
        image: './images/projects/react-portfolio-proj.png',
        src: 'https://github.com/Mctripp10/react-portfolio',
        tags: ['All', 'React.js', 'Tailwind CSS', 'Framer Motion']
    }
]

const ProjectsSection = () => {
    return (
        <>
            <div className='flex flex-wrap justify-center text-center gap-4 pb-16'>
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