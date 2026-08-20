import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../component/layouts/Title';
import { GiStorkDelivery } from "react-icons/gi";
const location = [
    { id: 1, name: "Agrabad" },
    { id: 2, name: "G.E.C" },
    { id: 3, name: "Boddarhat" },
    { id: 4, name: "Muradpur" },
    { id: 5, name: "EPZ" },
    { id: 6, name: "Pachlish" },
    { id: 7, name: "Other" },
]



const Checkout = () => {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cart.item);
    const total = cartItem.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
    return (
        <div className='bg-(--bg-light) '>
            <Title title={`Checkout | Heritage Modern`} description="Checkout selected dishes in the cart." />
            <div className='container md:py-15 py-8 px-4 md:px-0'>
                <h4 className='text-2xl md:text-4xl text-(--text-two) font-semi-bold mb-2'>Finalyze Your Dish</h4>
                <p className='text-md md:text-xl text-(--text-3) font-family'>Complete your Dish details below.</p>

                <h4 className='mt-12 mb-5 flex items-center gap-3 text-xl md:text-3xl text-(--text-two)'><GiStorkDelivery className='text-(--primary-color-dark)' />Drop-off Details</h4>
                <div className=' flex flex-col md:flex-row gap-5'>
                    <div className='md:w-[62%] p-5 rounded-xl border border-(--primary-color-dark)/20 shadow-[0px_12px_32px_0_rgba(30,26,23,0.15)]'>
                        <form className='w-full'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-5'>
                                <div>
                                    <label for="name" className='block text-(--text-3) mb-2'>Full Name</label>
                                    <input type="text" id='name' placeholder='Enter your name' className='w-full px-4 py-3 rounded-lg border border-(--primary-color-dark)/30 focus:outline-none focus:border-(--primary-color-dark)' />
                                </div>
                                <div>
                                    <label for="phone" className='block text-(--text-3) mb-2'>Phone Number</label>
                                    <input type="tel" id='phone' placeholder='Enter your phone number' className='w-full px-4 py-3 rounded-lg border border-(--primary-color-dark)/30 focus:outline-none focus:border-(--primary-color-dark)' />
                                </div>
                                <div>
                                    <label for="email" className='block text-(--text-3) mb-2'>Email Address</label>
                                    <input type="email" id='email' placeholder='Enter your email address' className='w-full px-4 py-3 rounded-lg border border-(--primary-color-dark)/30 focus:outline-none focus:border-(--primary-color-dark)' />
                                </div>
                                <div>
                                    <label for="location" className='block text-(--text-3) mb-2'>Location</label>
                                    <select className='w-full px-4 py-3 rounded-lg border border-(--primary-color-dark)/30 focus:outline-none focus:border-(--primary-color-dark)'>
                                        {location.map((loc) => (
                                            <option key={loc.id} value={loc.name} className='bg-(--bg-light)'>{loc.name}</option>
                                        ))}
                                    </select>

                                </div>
                            </div>
                            <div>
                                <label for="address" className='block text-(--text-3) mb-2'>Delivery Address</label>
                                <input type="text" id='address' placeholder='Enter your delivery address' className='w-full px-4 py-3 rounded-lg border border-(--primary-color-dark)/30 focus:outline-none focus:border-(--primary-color-dark)' />
                            </div>
                        </form>

                    </div>
                    <div className='w-[38%] p-5 rounded-xl border border-(--primary-color-dark)/20 shadow-[0px_12px_32px_0_rgba(30,26,23,0.15)]'>
                        <p className='text-xl md:text-3xl text-(--text-two)'>Added Dish Summary</p>
                        <div className='space-y-4'>
                            {cartItem.map((item) => (

                                <div className='flex gap-3 items-center pb-4 border-b border-(--primary-color-dark)/20'>
                                    <div>
                                        <img className='w-12' src={item.image} />
                                    </div>
                                    <div >
                                        <h4 className='text-(--primary-color-dark) font-semibold'>{item.name}</h4>
                                        <div className='flex gap-3'>
                                            <p className='text-(--primary-color-dark) font-semibold'>৳{item.price}</p>
                                            <p className='text-(--text-3)'>x{item.quantity}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>


                    </div>

                </div>
            </div>


        </div>
    );
};

export default Checkout;