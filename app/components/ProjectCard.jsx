import React from 'react';
import Link from 'next/link';

const ProjectCard = ({ title, description, imgUrl, srcUrl }) => {
    return (
        <Link href={`${srcUrl}`}>
        <div className="rounded-3xl bg-gray-900">
            <div
                className="h-52 md:h-72 rounded-t-xl" 
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
            ></div>
            <div className='flex h-28 mx-5 text-centertext-white rounded-b-xl'>
                <div className='m-auto'>
                    <h5 className='text-xl font-semibold'>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default ProjectCard;