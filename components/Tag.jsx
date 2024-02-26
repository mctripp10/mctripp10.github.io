import React from 'react';

const tagColor = {
    'Python': 'bg-blue-500',
    'C++': 'bg-yellow-300',
    'HTML': 'bg-lime-400',
    'CSS': 'bg-sky-500',
    'JavaScript': 'bg-violet-400',
    'Tailwind CSS': 'bg-fuchsia-600',
    'Next.js': 'bg-cyan-500',
    'OpenGL': 'bg-amber-500',
    'Windows WLAN API': 'bg-indigo-500',
    'TensorFlow': 'bg-orange-500',
    'Keras': 'bg-red-600',
}

const Tag = ({ name }) => {
    return (
        <div className={`flex h-6 rounded-md ${tagColor[name]} bg-fu`}>
            <div className="m-auto px-3 text-xs text-black">
                {name}
            </div>
        </div>
    )
}

export default Tag;