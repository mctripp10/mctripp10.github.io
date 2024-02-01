import React from 'react';

const Tag = ({ name }) => {
    return (
        <div className="flex h-10 rounded-2xl  bg-slate-700">
            <div className="m-auto px-3">
                {name}
            </div>
        </div>
    )
}

export default Tag;