import React from 'react';

const Date = () => {
    return (
        <div className='p-5 grid grid-cols-7 gap-10 lg:ml-32 sm:ml-10'>
            <button className=" hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4 rounded-full">
                Sun <br />25
            </button>
            <button className=" hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4 rounded-full">
                Mon <br />26
            </button>
            <button className=" hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4 rounded-full">
                Tue <br />27
            </button>
            <button className=" hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4 rounded-full">
                Wed <br />28
            </button>
            <button className=" hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4 rounded-full">
                Thu<br />29
            </button>
            <button className=" hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4 rounded-full">
                Fri <br />30
            </button>
            <button className=" hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4 rounded-full">
                Sat <br />1
            </button>
        </div>
    );
};

export default Date;