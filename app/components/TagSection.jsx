import React from 'react';
import Tag from './Tag';
import { projectsData } from './ProjectsSection';

const tagsData = [
    {
        id: 1,
        name: "React"
    },
    {
        id: 2,
        name: "Tailwind CSS"
    },
    {
        id: 3,
        name: "React"
    }
]

const TagSection = () => {
    return (
        <>
            <div className="flex flex-row justify-center items-center gap-2 mb-4">
                {
                projectsData.map((project) => (
                    project.tags.map((tag) => (
                        <Tag 
                            key={tag.id} 
                            name={tag.name}
                        />
                    ))
                ))
                }
            </div>
        </>
    )
}

export default TagSection;