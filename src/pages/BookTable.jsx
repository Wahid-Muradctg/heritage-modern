import React, { useRef, useState } from 'react';
import { FaPerson } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { toast } from 'react-toastify';
import Button from '../component/ui/Button';
import Title from '../component/layouts/Title';
import { useFormValidation } from '../hooks/useFormValidation';
import { validateAll } from '../utils/validators';


const BookTable = () => {
    const { errors, touched, handleChange, handleBlur, getInputBorder, getFocusClass, resetValidation } = useFormValidation();

    const dateRef = useRef(null);
    const timeRef = useRef(null);
    const partySizeRef = useRef(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const fields = {
            date: dateRef.current?.value || '',
            time: timeRef.current?.value || '',
            partySize: partySizeRef.current?.value || '',
            name: nameRef.current?.value || '',
            email: emailRef.current?.value || '',
            phone: phoneRef.current?.value || '',
        };
        const { firstError } = validateAll(fields);

        Object.keys(fields).forEach(key => {
            handleChange({ target: { name: key, value: fields[key] } });
        });

        if (firstError) {
            const refs = { date: dateRef, time: timeRef, partySize: partySizeRef, name: nameRef, email: emailRef, phone: phoneRef };
            refs[firstError].current?.focus();
            return;
        }

        setFormData(fields);
        setShowModal(true);
    };

    const handleConfirm = () => {
        setShowModal(false);
        setFormData({});
        resetValidation();
        [dateRef, timeRef, partySizeRef, nameRef, emailRef, phoneRef].forEach(ref => {
            if (ref.current) ref.current.value = '';
        });
        toast.success("Table booked successfully!");
    };

    const guestLabels = {
        '1': '1 Guest', '2': '2 Guests', '3': '3 Guests', '4': '4 Guests',
        '5': '5 Guests', '6': '6 Guests', '7': '7 Guests', '8': '8 Guests',
        '9': '9 Guests', '10': '10 Guests', '11': 'More Than 10 Guests',
    };

    return (
        <div className='bg-(--bg-light) py-10 md:py-20'>
            <Title title="Book a Table | Heritage Modern" description="Reserve your table for an unforgettable dining experience." />
            <div className='container grid gap-10 grid-cols-1 md:grid-cols-2 place-items-center px-4 md:px-0'>
                <div className='relative h-full self-start'>
                    <img src='/images/booktable.png' className='object-cover' />
                    <p className='text-white text-xl md:text-3xl font-[font-family:--third-family] absolute left-10 bottom-16 md:bottom-25 md:left-17'>An evening of deep-rooted <br />traditions awaits.</p>

                </div>
                <div className='rounded-xl border border-(--primary-color-dark)/20 shadow-[0px_12px_32px_0_rgba(30,26,23,0.15)] p-6 md:p-10 -mt-7 '>
                    <h4 className='text-2xl md:text-4xl text-(--text-two) font-bold mb-3 md:mb-5'>Book a Table</h4>
                    <p className='text-md md:text-xl text-(--text-3) font-family font-medium'>Join us for an unforgettable dining experience. Please provide your details below.</p>
                    <form onSubmit={handleSubmit} className='w-full mt-8'>
                        <div className='w-full flex flex-col md:flex-row gap-4 items-center'>
                            <div className='w-full md:w-1/2 flex flex-col gap-2'>
                                <label for='date' className='text-(--font-3)'>Date</label>
                                <input ref={dateRef} name='date' type='date' onChange={handleChange} onBlur={handleBlur} className={`p-3 border-2 rounded-md focus:outline-0 focus:border-2 ${getInputBorder('date')} ${getFocusClass('date')}`} />
                                {touched.date && errors.date && <p className='text-(--error) text-sm'>{errors.date}</p>}
                            </div>
                            <div className='w-full md:w-1/2 flex flex-col gap-2'>
                                <label className='text-(--font-3)'>Time</label>
                                <input ref={timeRef} name='time' type='time' onChange={handleChange} onBlur={handleBlur} className={`p-3 border-2 rounded-md focus:outline-0 focus:border-2 ${getInputBorder('time')} ${getFocusClass('time')}`} />
                                {touched.time && errors.time && <p className='text-(--error) text-sm'>{errors.time}</p>}
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-2 relative mt-4'>
                            <FaPerson className='absolute left-3 top-11.5 text-(--primary-color-dark) text-xl' />

                            <label className='text-(--font-3)'>Party Size</label>
                            <select ref={partySizeRef} name='partySize' onChange={handleChange} onBlur={handleBlur} className={`py-3 ps-8 pe-3 border-2 rounded-md focus:outline-0 focus:border-2 ${getInputBorder('partySize')} ${getFocusClass('partySize')}`}>
                                <option value=''>Select guests</option>
                                <option value='1'>1 Guest</option>
                                <option value='2'>2 Guests</option>
                                <option value='3'>3 Guests</option>
                                <option value='4'>4 Guests</option>
                                <option value='5'>5 Guests</option>
                                <option value='6'>6 Guests</option>
                                <option value='7'>7 Guests</option>
                                <option value='8'>8 Guests</option>
                                <option value='9'>9 Guests</option>
                                <option value='10'>10 Guests</option>
                                <option value='11'>More Than 10 Guests</option>
                            </select>
                            {touched.partySize && errors.partySize && <p className='text-(--error) text-sm'>{errors.partySize}</p>}
                        </div>
                        <div className='w-full flex flex-col gap-2 mt-4'>
                            <label className='text-(--font-3)'>Full Name</label>
                            <input ref={nameRef} name='name' placeholder='Your Name' type='text' onChange={handleChange} onBlur={handleBlur} className={`p-3 border-2 rounded-md focus:outline-0 focus:border-2 ${getInputBorder('name')} ${getFocusClass('name')}`} />
                            {touched.name && errors.name && <p className='text-(--error) text-sm'>{errors.name}</p>}
                        </div>
                        <div className='w-full flex flex-col md:flex-row gap-4 items-center mt-4'>
                            <div className='w-full md:w-1/2 flex flex-col gap-2'>
                                <label className='text-(--font-3)'>Email</label>
                                <input ref={emailRef} name='email' placeholder='Your Email' type='email' onChange={handleChange} onBlur={handleBlur} className={`w-full p-3 border-2 rounded-md focus:outline-0 focus:border-2 ${getInputBorder('email')} ${getFocusClass('email')}`} />
                                {touched.email && errors.email && <p className='text-(--error) text-sm'>{errors.email}</p>}
                            </div>
                            <div className='w-full md:w-1/2 flex flex-col gap-2'>
                                <label className='text-(--font-3)'>Phone</label>
                                <input ref={phoneRef} name='phone' placeholder='Phone Number' type='tel' onChange={handleChange} onBlur={handleBlur} className={`w-full p-3 border-2 rounded-md focus:outline-0 focus:border-2 ${getInputBorder('phone')} ${getFocusClass('phone')}`} />
                                {touched.phone && errors.phone && <p className='text-(--error) text-sm'>{errors.phone}</p>}
                            </div>
                        </div>
                        <Button type='submit' text='CONFIRM BOOK' className='py-3 px-5 bg-(--primary-color-dark) text-md md:text-xl text-white w-full flex justify-center mt-8 rounded-md hover:bg-(--primary-color) ' />

                    </form>
                </div>

            </div>

            {showModal && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4'>
                    <div className='bg-(--bg-light) rounded-xl shadow-xl w-full max-w-md p-6 relative'>
                        <Button onClick={() => setShowModal(false)} rIcon={IoClose} text='' className='absolute top-3 right-3 text-gray-500 hover:text-gray-800' />
                        <h3 className='text-xl md:text-2xl font-bold text-(--text-two) mb-4'>Booking Summary</h3>
                        <div className='space-y-3 text-(--text-3)'>
                            <div className='flex justify-between border-b border-(--primary-color-dark)/10 pb-2'>
                                <span className='font-medium'>Date</span>
                                <span>{formData.date}</span>
                            </div>
                            <div className='flex justify-between border-b border-(--primary-color-dark)/10 pb-2'>
                                <span className='font-medium'>Time</span>
                                <span>{formData.time}</span>
                            </div>
                            <div className='flex justify-between border-b border-(--primary-color-dark)/10 pb-2'>
                                <span className='font-medium'>Party Size</span>
                                <span>{guestLabels[formData.partySize] || formData.partySize}</span>
                            </div>
                            <div className='flex justify-between border-b border-(--primary-color-dark)/10 pb-2'>
                                <span className='font-medium'>Name</span>
                                <span>{formData.name}</span>
                            </div>
                            <div className='flex justify-between border-b border-(--primary-color-dark)/10 pb-2'>
                                <span className='font-medium'>Email</span>
                                <span>{formData.email}</span>
                            </div>
                            <div className='flex justify-between pb-2'>
                                <span className='font-medium'>Phone</span>
                                <span>{formData.phone}</span>
                            </div>
                        </div>
                        <div className='flex gap-3 mt-6'>
                            <Button onClick={() => setShowModal(false)} text='Cancel' className='flex-1 py-3 border-2 border-(--primary-color-dark)/40 rounded-md font-semibold hover:bg-(--hover) transition-colors' />
                            <Button onClick={handleConfirm} text='Confirm' className='flex-1 py-3 bg-(--primary-color-dark) text-white rounded-md font-semibold hover:bg-(--primary-color) transition-colors' />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookTable;
