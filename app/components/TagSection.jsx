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

const TagSection = ({ projectTags }) => {
    return (
        <>
            <div className="flex flex-row justify-center items-center gap-2 pb-6">
                {
                    projectTags.filter(tag => tag != 'All').map(tag => 
                        <Tag name={tag} />
                    )
                }
            </div>
        </>
    )
}

export default TagSection;