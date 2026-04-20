import React from 'react';

const ExperienceCard = ({ company, department, title, startDate, endDate, description }) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-[minmax(0,220px)_1fr] lg:mx-16 xl:mx-32 mb-14">
            <div className="text-left">
                <h4 className='font-mono text-lg sm:text-xl'>
                    { company }
                </h4>
                <p className='text-md text-slate-400 mt-5'>
                    { department }
                </p>
            </div>
            <div className='text-left'>
                <h4 className='font-mono text-lg sm:text-xl'>
                    { title }
                </h4>
                <div className='text-md text-slate-400'>
                    <p className='mt-5'>
                        { startDate } - { endDate }
                    </p>
                    <div className='mt-8 leading-relaxed'>
                        <NewlineText text={ description } />
                    </div>
                </div>
            </div>
        </div>
        
    )
}


// Function that will add new lines dynamically according to \n in a string that comes from a prop
function NewlineText(props) {
    const text = props.text;
    const newText = text.split('\n').map((str, index) => <p key={index} className='mb-5'>{str.trim()}</p>);

    return newText;
}

export default ExperienceCard;
