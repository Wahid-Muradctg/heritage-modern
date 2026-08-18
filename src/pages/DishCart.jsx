import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { LuMoveLeft } from "react-icons/lu";
import Title from '../component/layouts/Title';
import { BiDish } from "react-icons/bi";
import Button from '../component/ui/Button';
import { IoRemove, IoAdd, IoClose } from "react-icons/io5";
import { decrement, increment, removeFromCart } from '../redux/cartSlice';
import { FaArrowRight } from "react-icons/fa";





const DishCart = () => {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cart.item);
    const total = cartItem.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
    return (
        <div className='bg-(--bg-light) '>
            <Title title={`Dish Cart | Heritage Modern`} description="View and manage your selected dishes in the cart." />
            <div className='container py-10 md:py-20 px-4 md:px-0 '>
                <Link to="/menu" className='flex items-center gap-3 text-xl text-(--primary-color-dark)'><LuMoveLeft className='font-bold text-2xl' /> Check Dish Again</Link>
                <div className='mt-6'>
                    <h3 className='text-xl md:text-3xl text-(--text-two)'>Your Dishes</h3>
                    {cartItem.length === 0 ? (
                        <div className='flex flex-col justify-center'>
                            <BiDish />
                            <h4>No Dish Added</h4>
                            <p>Look's like you haven't add any dish yet.</p>
                        </div>
                    ) : (
                        <div className=' mt-8 flex flex-col md:flex-row gap-5'>
                            <div className='md:w-[70%]'>
                                {
                                    cartItem.map((item) => (
                                        <div className='flex flex-wrap items-center justify-between gap-4 border border-(--primary-color-dark)/20 p-4 rounded-xl shadow-[0px_12px_32px_0_rgba(30,26,23,0.15)] mb-4'>
                                            <div className='flex items-center gap-4'>
                                                <div className='w-14 md:w-22 '><img className='' src={item.image} alt={item.name} /></div>
                                                <div>
                                                    <h4 className='text-md md:text-2xl text-(--primary-color-dark)'>{item.name}</h4>
                                                    <p className='text-sm md:text-md font-family font-semibold'>{item.description.split(' ').slice(0, 6).join(' ') + (item.description.split(' ').length > 5 ? '...' : '')}</p>
                                                    <p className="text-md md:text-xl font-semibold text-(--primary-color-dark) mt-2 "> ৳
                                                        {item.price} <span className='ms-2 text-(--primary-color-dark)/50 text-sm md:text-md'>{item.packQuantity}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between w-full md:w-auto gap-4 md:gap-3'>
                                                <div className="shrink-0 flex justify-center items-center relative p-1 md:p-2 rounded-md border border-(--primary-color-dark)/30 text-(--primary-color-dark) text-sm md:text-base " >
                                                    <Button
                                                        onClick={() => dispatch(decrement(item.id))}
                                                        rIcon={IoRemove}
                                                        className="flex! items-center justify-center md:w-8.5 md:h-8.5 rounded-full  text-(--primary-color-dark) text-lg!"
                                                    />
                                                    <p className="grow-0 shrink-0 w-7 md:w-10 text-base text-center text-(--gray-scale-gray-900)">
                                                        {item.quantity}
                                                    </p>
                                                    <Button
                                                        onClick={() => dispatch(increment(item.id))}
                                                        rIcon={IoAdd}
                                                        className="flex! items-center justify-center md:w-8.5 md:h-8.5 rounded-full  text-(--primary-color-dark) text-lg!"
                                                    />
                                                </div>
                                                <p className='text-md md:text-xl font-semibold text-(--primary-color-dark)'>৳{item.quantity * item.price}</p>
                                                <Button
                                                    onClick={() => dispatch(removeFromCart(item.id))}
                                                    rIcon={IoClose}
                                                    className="text-(--primary-color-dark)! hover:text-(--error)! text-lg! shrink-0"
                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='md:w-[30%] border border-(--primary-color-dark)/20 p-6 rounded-xl shadow-[0px_12px_32px_0_rgba(30,26,23,0.15)]'>
                                <h4 className='text-xl md:text-3xl text-(--primary-color-dark) mb-8'>Order Summary</h4>
                                <p className='flex justify-between mt-4 text-lg mb-6'>Subtotal({cartItem.reduce((sum, item) => sum + item.quantity, 0)} items) <span className='text-(--primary-color-dark)'>৳{total.toFixed(2)}</span></p>
                                <p className='flex justify-between mt-4 text-lg mb-6'>Delivery Fee <span className='text-(--primary-color-dark)'>৳50.00</span></p>
                                <hr className='text-(--primary-color-dark)/30 mb-6'/>
                                <p className='flex justify-between mt-4 text-lg font-semibold'>Total <span className='text-(--primary-color-dark)'>৳{(total + 50).toFixed(2)}</span></p>
                                <Button className='mt-6 w-full py-3 px-4 text-white  text-lg flex items-center justify-center rounded-md gap-3 bg-(--primary-color-dark) hover:bg-(--primary-color)' text='Proceed to Checkout ' rIcon={FaArrowRight}/>

                            </div>


                        </div>

                    )}
                </div>


            </div>


        </div>
    );
};

export default DishCart;