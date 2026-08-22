import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Title from '../component/layouts/Title';
import { GiStorkDelivery } from "react-icons/gi";
import Button from './../component/ui/Button';
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaSackDollar, FaCreditCard } from "react-icons/fa6";
import { clearCart } from '../redux/cartSlice';
import { useFormValidation } from '../hooks/useFormValidation';
import { validateAll } from '../utils/validators';
import { BiDish } from "react-icons/bi";



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
    const navigate = useNavigate();
    const cartItem = useSelector(state => state.cart.item);
    const total = cartItem.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);

    const { errors, touched, handleChange, handleBlur, getInputBorder, getFocusClass } = useFormValidation();

    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const addressRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const fields = {
            name: nameRef.current?.value || '',
            phone: phoneRef.current?.value || '',
            email: emailRef.current?.value || '',
            address: addressRef.current?.value || '',
        };
        const { firstError } = validateAll(fields);

        Object.keys(fields).forEach(key => {
            handleChange({ target: { name: key, value: fields[key] } });
        });

        if (firstError) {
            const refs = { name: nameRef, phone: phoneRef, email: emailRef, address: addressRef };
            refs[firstError].current?.focus();
        }
    };

    const handleOrder = () => {
        dispatch(clearCart());
        toast.success("Order placed successfully! 🎉");
        setTimeout(() => navigate('/'), 1500);
    };

    return (
        <div className='bg-(--bg-light) '>
            <Title title={`Checkout | Heritage Modern`} description="Checkout selected dishes in the cart." />
            <div className='container md:py-15 py-8 px-4 md:px-0'>
                <h4 className='text-2xl md:text-4xl text-(--text-two) font-semi-bold mb-2'>Finalyze Your Dish</h4>
                <p className='text-md md:text-xl text-(--text-3) font-family'>Complete your Dish details below.</p>

                {cartItem.length === 0 ? (
                    <div className='flex flex-col items-center text-center py-10 md:py-13 justify-center'>
                        <BiDish className='text-(--primary-color-dark)/40 text-9xl' />
                        <h4 className='my-3 md:my-6 text-2xl md:text-4xl text-(--primary-color-dark)'>No Dish To Checkout</h4>
                        <p className='text-(--text-3) text-md md:text-xl font-family'>Look's like you haven't add any dish yet.</p>
                    </div>
                ) : (
                    <div className=' flex flex-col md:flex-row gap-5'>
                        <div className='md:w-[62%] '>
                            <h4 className='mt-12 mb-5 flex items-center gap-3 text-xl md:text-3xl text-(--text-two)'><GiStorkDelivery className='text-(--primary-color-dark)' />Drop-off Details</h4>
                            <form onSubmit={handleSubmit} className='w-full p-5 rounded-xl border border-(--primary-color-dark)/20 shadow-[0px_12px_32px_0_rgba(30,26,23,0.15)]'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-5'>
                                    <div>
                                        <label htmlFor="name" className='block text-(--text-3) mb-2'>Full Name</label>
                                        <input
                                            ref={nameRef}
                                            type="text"
                                            id='name'
                                            name='name'
                                            placeholder='Enter your name'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`w-full px-4 py-3 rounded-lg border ${getInputBorder('name')} ${getFocusClass('name')} focus:outline-none`}
                                        />
                                        {touched.name && errors.name && (
                                            <p className='text-(--error) text-sm mt-1'>{errors.name}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className='block text-(--text-3) mb-2'>Phone Number</label>
                                        <input
                                            ref={phoneRef}
                                            type="tel"
                                            id='phone'
                                            name='phone'
                                            placeholder='Enter your phone number'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`w-full px-4 py-3 rounded-lg border ${getInputBorder('phone')} ${getFocusClass('phone')} focus:outline-none`}
                                        />
                                        {touched.phone && errors.phone && (
                                            <p className='text-(--error) text-sm mt-1'>{errors.phone}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className='block text-(--text-3) mb-2'>Email Address</label>
                                        <input
                                            ref={emailRef}
                                            type="email"
                                            id='email'
                                            name='email'
                                            placeholder='Enter your email address'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`w-full px-4 py-3 rounded-lg border ${getInputBorder('email')} ${getFocusClass('email')} focus:outline-none`}
                                        />
                                        {touched.email && errors.email && (
                                            <p className='text-(--error) text-sm mt-1'>{errors.email}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="location" className='block text-(--text-3) mb-2'>Location</label>
                                        <select className='w-full px-4 py-3 rounded-lg border border-(--primary-color-dark)/30 focus:outline-none focus:border-(--primary-color-dark)'>
                                            {location.map((loc) => (
                                                <option key={loc.id} value={loc.name} className='bg-(--bg-light)'>{loc.name}</option>
                                            ))}
                                        </select>

                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="address" className='block text-(--text-3) mb-2'>Delivery Address</label>
                                    <input
                                        ref={addressRef}
                                        type="text"
                                        id='address'
                                        name='address'
                                        placeholder='Enter your delivery address'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full px-4 py-3 rounded-lg border ${getInputBorder('address')} ${getFocusClass('address')} focus:outline-none`}
                                    />
                                    {touched.address && errors.address && (
                                        <p className='text-(--error) text-sm mt-1'>{errors.address}</p>
                                    )}
                                </div>
                                <div className='mt-4'>
                                    <label htmlFor="note" className='block text-(--text-3) mb-2'>Note</label>
                                    <textarea className='w-full px-4 py-3 rounded-lg border border-(--primary-color-dark)/30 focus:outline-none focus:border-(--primary-color-dark)'></textarea>
                                </div>

                            </form>
                            <div>
                                <h4 className='mt-12 mb-5 flex items-center gap-3 text-xl md:text-3xl text-(--text-two)'><FaHandHoldingDollar className='text-(--primary-color-dark)' />Payment Method</h4>
                                <div className='w-full p-5 rounded-xl border border-(--primary-color-dark)/20 shadow-[0px_12px_32px_0_rgba(30,26,23,0.15)] space-y-4'>
                                    <div className='flex justify-between items-center p-3 border border-(--primary-color-dark)/40 rounded-md shadow-md'>
                                        <div className='flex items-center gap-3'>
                                            <input
                                                type='radio'
                                                id='cod'
                                                name='payment'
                                                defaultChecked
                                                className='w-5 h-5 accent-(--primary-color-dark) cursor-pointer'
                                            />
                                            <label htmlFor="cod" className='cursor-pointer'>
                                                Cash on Delivery <br />
                                                <span className='text-sm text-(--text-3)'>Pay when your order arrives.</span>
                                            </label>
                                        </div>
                                        <FaSackDollar />

                                    </div>

                                    <div className='flex justify-between items-center p-3 border border-(--primary-color-dark)/40 rounded-md shadow-md'>
                                        <div className='flex items-center gap-3'>
                                            <input
                                                type='radio'
                                                id='digital'
                                                name='payment'
                                                className='w-5 h-5 accent-(--primary-color-dark) cursor-pointer'
                                            />
                                            <label htmlFor="digital" className='cursor-pointer'>
                                                Digital Payment (bKash/Cards) <br />
                                                <span className='text-sm text-(--text-3)'>Secure online payment portal.</span>
                                            </label>
                                        </div>
                                        <FaCreditCard />

                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='md:mt-26 md:w-[38%] p-5 rounded-xl border border-(--primary-color-dark)/20 shadow-[0px_12px_32px_0_rgba(30,26,23,0.15)] md:self-start sticky top-5'>
                            <p className='text-xl md:text-3xl text-(--text-two) font-semi-bold mb-5'>Added Dish Summary</p>
                            <div className='space-y-4 max-h-64 overflow-y-auto pr-1'>
                                {cartItem.map((item, index) => (
                                    <div key={index} className='flex gap-3 items-center pb-4 border-b border-(--primary-color-dark)/20 last:border-b-0 last:pb-0'>
                                        <div className='shrink-0'>
                                            <img className='w-12 h-12 object-cover rounded-lg' src={item.image} alt={item.name} />
                                        </div>
                                        <div className='flex-1 min-w-0'>
                                            <h4 className='text-(--primary-color-dark) font-semibold truncate'>{item.name}</h4>
                                            <div className='flex gap-3 items-center'>
                                                <p className='text-(--primary-color-dark) font-semibold'>৳{item.price}</p>
                                                <p className='text-(--text-3)'>x{item.quantity}</p>
                                            </div>
                                        </div>
                                        <p className='text-(--text-two) font-semibold shrink-0'>৳{(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>

                            <div className='mt-5 pt-4 border-t border-(--primary-color-dark)/20 space-y-3'>
                                <div className='flex justify-between text-(--text-3)'>
                                    <p>Subtotal</p>
                                    <p className='font-semibold text-(--text-two)'>৳{total.toFixed(2)}</p>
                                </div>
                                <div className='flex justify-between text-(--text-3)'>
                                    <p>Delivery Fee</p>
                                    <p className='font-semibold text-(--text-two)'>৳60.00</p>
                                </div>
                                <div className='flex justify-between text-lg font-bold text-(--text-two) pt-3 border-t border-(--primary-color-dark)/20'>
                                    <p>Total</p>
                                    <p>৳{(total + 60).toFixed(2)}</p>
                                </div>
                            </div>

                            <Button
                                type='submit'
                                text='Place Order'
                                onClick={handleOrder}
                                className='mt-6 w-full py-3 bg-(--primary-color-dark) hover:bg-(--primary-color) text-white font-semibold rounded-lg transition-colors duration-300'
                            />
                        </div>

                    </div>
                )}

            </div>


        </div>
    );
};

export default Checkout;
