import React, { useEffect, useState } from 'react';
import Schedule from './Schedule';

const Table = () => {
    const [schedules, setSchedule] = useState([]);
    let [schedule1, setSchedule1] = useState();




    useEffect(() => {
        fetch('http://localhost:5000/schedule')
            .then((res) => res.json())
            .then(data => setSchedule(data))
    }, []);


    return (
        <div>
            <div className='border h-20'>
                <div className="grid grid-cols-7 grid-flow-col ml-32">
                    <div className='border h-20'></div>
                    <div className='border h-20'></div>
                    <div className='border h-20'></div>
                    <div className='border h-20'></div>
                    <div className='border h-20'></div>
                    <div className='border h-20'></div>
                    <div className='border h-20'></div>
                </div>
            </div>
            <div className='border h-20'>
                10:00 AM
                <div className="grid grid-cols-7 grid-flow-col ml-32  mt-[-24px]">
                    <div className='border h-20'>{schedules.map(schedule => schedule.date == '25/09/2022' && schedule.schedule == '10:00 AM - 11:00 AM' && <Schedule schedule={schedule} />
                    )}</div>
                    <div className='border h-20'>{schedules.map(schedule => schedule.date == '26/09/2022' && schedule.schedule == '10:00 AM - 11:00 AM' && <Schedule schedule={schedule} />
                    )}</div>
                    <div className='border h-20'>{schedules.map(schedule => schedule.date == '27/09/2022' && schedule.schedule == '10:00 AM - 11:00 AM' && <Schedule schedule={schedule} />
                    )}</div>
                    <div className='border h-20'>{schedules.map(schedule => schedule.date == '28/09/2022' && schedule.schedule == '10:00 AM - 11:00 AM' && <Schedule schedule={schedule} />
                    )}</div>
                    <div className='border h-20'>{schedules.map(schedule => schedule.date == '29/09/2022' && schedule.schedule == '10:00 AM - 11:00 AM' && <Schedule schedule={schedule} />
                    )}</div>
                    <div className='border h-20'>{schedules.map(schedule => schedule.date == '30/09/2022' && schedule.schedule == '10:00 AM - 11:00 AM' && <Schedule schedule={schedule} />
                    )}</div>
                    <div className='border h-20'>{schedules.map(schedule => schedule.date == '01/10/2022' && schedule.schedule == '10:00 AM - 11:00 AM' && <Schedule schedule={schedule} />
                    )}</div>
                </div>
            </div>
            <div className='border h-20'>
                11:00 AM
                <div className="grid grid-cols-7 grid-flow-col ml-32  mt-[-24px]">
                    <div className='border h-20'>{schedules.map(schedule => schedule.date == '25/09/2022' && schedule.schedule == '11:00 AM - 12:00 PM' && <Schedule schedule={schedule}/>
                    )}</div>
                    <div className='border h-20'>{schedules.map(schedule => schedule.date == '26/09/2022' && schedule.schedule == '11:00 AM - 12:00 PM' && <Schedule schedule={schedule} />
                    )}</div>
                    <div className='border h-20'>{schedules.map(schedule => schedule.date == '27/09/2022' && schedule.schedule == '11:00 AM - 12:00 PM' && <Schedule schedule={schedule} />
                    )}</div>
                    <div className='border h-20'>{schedules.map(schedule => schedule.date == '28/09/2022' && schedule.schedule == '11:00 AM - 12:00 PM' && <Schedule schedule={schedule} />
                    )}</div>
                    <div className='border h-20'>{schedules.map(schedule => schedule.date == '29/09/2022' && schedule.schedule == '11:00 AM - 12:00 PM' && <Schedule schedule={schedule} />
                    )}</div>
                    <div className='border h-20'>{schedules.map(schedule => schedule.date == '30/09/2022' && schedule.schedule == '11:00 AM - 12:00 PM' && <Schedule schedule={schedule} />
                    )}</div>
                    <div className='border h-20'>{schedules.map(schedule => schedule.date == '01/10/2022' && schedule.schedule == '11:00 AM - 12:00 PM' && <Schedule schedule={schedule} />
                    )}</div>
                </div>
            </div>
            <div className='border h-20'>
                12:00 PM
                <div className="grid grid-cols-7 grid-flow-col ml-32  mt-[-24px]">
                    <div className='border h-20'>{schedules.map(schedule =>
                        schedule.date == '25/09/2022' && schedule.schedule == '12:00 PM - 01:00 PM' && <Schedule schedule={schedule}  color='bg-green-300'/>
                    )}</div>
                    <div className='border h-20'>{schedules.map(schedule =>
                        schedule.date == '26/09/2022' && schedule.schedule == '12:00 PM - 01:00 PM' && <Schedule schedule={schedule} />
                    )}</div>
                    <div className='border h-20'>{schedules.map(schedule =>
                        schedule.date == '27/09/2022' && schedule.schedule == '12:00 PM - 01:00 PM' && <Schedule schedule={schedule} />
                    )}</div>
                    <div className='border h-20'>{schedules.map(schedule =>
                        schedule.date == '28/09/2022' && schedule.schedule == '12:00 PM - 01:00 PM' && <Schedule schedule={schedule} />
                    )}</div>
                    <div className='border h-20'>{schedules.map(schedule =>
                        schedule.date == '29/09/2022' && schedule.schedule == '12:00 PM - 01:00 PM' && <Schedule schedule={schedule} />
                    )}</div>
                    <div className='border h-20'>{schedules.map(schedule =>
                        schedule.date == '30/09/2022' && schedule.schedule == '12:00 PM - 01:00 PM' && <Schedule schedule={schedule} />
                    )}</div>
                    <div className='border h-20'>{schedules.map(schedule =>
                        schedule.date == '01/10/2022' && schedule.schedule == '12:00 PM - 01:00 PM' && <Schedule schedule={schedule} />
                    )}</div>
                </div>
            </div>
            <div className='border h-20'>
                01:00 pM
                <div className="grid grid-cols-7 grid-flow-col ml-32  mt-[-24px]">
                    <div className='border h-20'></div>
                    <div className='border h-20'></div>
                    <div className='border h-20'></div>
                    <div className='border h-20'></div>
                    <div className='border h-20'></div>
                    <div className='border h-20'></div>
                    <div className='border h-20'></div>
                </div>
            </div>
        </div>
    );
};

export default Table;