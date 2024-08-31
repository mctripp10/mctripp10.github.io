import React from 'react';
import Tag from './Tag';

const TagSection = ({ projectTags }) => {
    return (
        <>
            <div className="flex flex-row justify-center items-center gap-2 pb-2">
                {
                    projectTags.filter(tag => tag != 'All').map(tag => 
                        <Tag key='' name={tag} />
                    )
                }
            </div>
        </>
    )
}

export default TagSection;