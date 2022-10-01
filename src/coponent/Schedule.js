import React from 'react';

const Schedule = ({schedule}) => {
    return (
        <div className='bg-green-300 h-full'>
            <h1 className='text-blue-800 font-bold'>{schedule?.title}</h1>
            <p>{schedule.schedule}</p>
        </div>
    );
};

export default Schedule;