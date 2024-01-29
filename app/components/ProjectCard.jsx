import React from 'react';
import Link from 'next/link';

const ProjectCard = ({ title, description, imgUrl, srcUrl }) => {
    return (
        <Link href={`https://github.com/Mctripp10/react-portfolio`}>
        <div className="rounded-3xl bg-gray-900">
            <div
                className="h-52 md:h-72 rounded-t-xl" 
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
            ></div>
            <div className='text-white rounded-b-xl bg-[#181818]'>
                <h5 className='text-xl font-semibold'>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
        </Link>
    )
}

export default ProjectCard;