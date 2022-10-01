import { useFormik } from 'formik';
import React from 'react';

const Modal = ({ setShowModal }) => {
    const formik = useFormik({
        initialValues: {
            title: '',
            schedule: '',
            date:''
        },
        onSubmit: values => {
            console.log(values);
            fetch('http://localhost:5000/addSchedule', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log('Success:', data);
                })
        },
    });
    return (
        <div>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold text-orange-500">
                                Add Schedule
                            </h3>
                            <button
                                className="p-1 ml-auto bg-sky-400 border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none rounded-full"
                                onClick={() => setShowModal(false)}
                            >
                                ×
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                        Title
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Title"
                                        id="title"
                                        name="title"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.title} />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                        Date
                                    </label>
                                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                        id="date"
                                        name="date"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.date}
                                    >
                                        <option>Select Your Date</option>
                                        <option>25/09/2022</option>
                                        <option>26/09/2022</option>
                                        <option>27/09/2022</option>
                                        <option>28/09/2022</option>
                                        <option>29/09/2022</option>
                                        <option>30/09/2022</option>
                                        <option>01/10/2022</option>
                                    </select>
                                </div>
                                <div className="inline-block relative w-64">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Schedule
                                    </label>
                                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                        id="schedule"
                                        name="schedule"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.schedule}
                                    >
                                        <option>Select Your Schedule</option>
                                        <option>10:00 AM - 11:00 AM</option>
                                        <option>11:00 AM - 12:00 PM</option>
                                        <option>12:00 PM - 01:00 PM</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-7 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-5">
                                    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value='ADD' />

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    );
};

export default Modal;