import React from 'react';
import ExperienceSection from './ExperienceSection';

const ExperienceCard = ({ company, title, startDate, endDate, description }) => {
    return (
        <div className="grid grid-cols-2 mx-16 my-12">
            <h2 className="mr-auto font-mono text-2xl">
                { company }
            </h2>
            <div className='mr-auto text-left'>
                <h2 className='font-mono text-2xl'>
                    { title }
                </h2>
                <div className='text-xl text-slate-400'>
                    <h3 className='mt-5'>
                        { startDate } - { endDate }
                    </h3>
                    <p className='mt-5 mb-16'>
                        { description }
                    </p>
                </div>
                
            </div>
            
        </div>
        
    )
}

export default ExperienceCard;