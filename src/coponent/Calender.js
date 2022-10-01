import React, { useState } from 'react';
import Date from './Date';
import Modal from './Modal';
import Table from './Table';

const Calender = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-5"  onClick={() => setShowModal(true)}>
                    + Create a schedule
                </button>
            </div>
            <div className='border rounded-lg shadow-md m-5 '>
                <Date/>
                <Table/>
            </div>
        {showModal && <Modal 
        setShowModal={setShowModal}
        />}
        </div>
    );
};

export default Calender;