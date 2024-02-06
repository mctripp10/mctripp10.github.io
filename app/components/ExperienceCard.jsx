import React from 'react';
import ExperienceSection from './ExperienceSection';

const ExperienceCard = ({ company, department, title, startDate, endDate, description }) => {
    return (
        <div className="grid grid-cols-2 mx-16 my-12">
            <div className="mr-auto text-left">
                <h2 className='font-mono text-2xl'>
                    { company }
                </h2>
                <h3 className='text-lg text-slate-400 mt-5'>
                    { department }
                </h3>
            </div>
            
            <div className='mr-auto text-left'>
                <h2 className='font-mono text-2xl'>
                    { title }
                </h2>
                <div className='text-xl text-slate-400'>
                    <h3 className='mt-5'>
                        { startDate } - { endDate }
                    </h3>
                    <p className='mt-8 mb-16 leading-relaxed'>
                        <NewlineText text={ description } />
                    </p>
                </div>
                
            </div>
            
        </div>
        
    )
}


// Function that will add new lines dynamically according to \n in a string that comes from a prop
function NewlineText(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p className='mb-5'>{str}</p>);

    return newText;
}

export default ExperienceCard;