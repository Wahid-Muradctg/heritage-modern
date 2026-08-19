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
            <div className='container py-8 md:py-15 px-4 md:px-0 '>
                <Link to="/menu" className='flex items-center gap-3 text-xl text-(--primary-color-dark)'><LuMoveLeft className='font-bold text-2xl' />Explore Dish</Link>
                <div className='mt-6'>
                    <h3 className='text-2xl md:text-4xl text-(--text-two)'>Your Dishes</h3>
                    {cartItem.length === 0 ? (
                        <div className='flex flex-col items-center text-center py-10 md:py-13 justify-center'>
                            <BiDish className='text-(--primary-color-dark)/40 text-9xl' />
                            <h4 className='my-3 md:my-6 text-2xl md:text-4xl text-(--primary-color-dark)'>No Dish Added</h4>
                            <p className='text-(--text-3) text-md md:text-xl font-family'>Look's like you haven't add any dish yet.</p>
                        </div>
                    ) : (
                        <div className=' mt-8 flex flex-col md:flex-row gap-5'>
                            <div className='md:w-[70%]'>
                                <div className='rounded-xl border border-(--primary-color-dark)/20 shadow-[0px_12px_32px_0_rgba(30,26,23,0.15)] overflow-x-auto'>
                                    <table className='w-full table-auto min-w-105'>
                                        <thead>
                                            <tr className='border-b border-(--primary-color-dark)/20'>
                                                <th className="text-xs md:text-sm font-semibold uppercase text-(--primary-color-dark)/70 text-left px-2 md:px-5 py-3 md:py-4 w-[40%]">Product</th>
                                                <th className="text-xs md:text-sm font-semibold uppercase text-(--primary-color-dark)/70 text-left px-2 md:px-5 py-3 md:py-4 w-[15%]">Price</th>
                                                <th className="text-xs md:text-sm font-semibold uppercase text-(--primary-color-dark)/70 text-left px-2 md:px-5 py-3 md:py-4 w-[25%]">Quantity</th>
                                                <th className="text-xs md:text-sm font-semibold uppercase text-(--primary-color-dark)/70 text-left px-2 md:px-5 py-3 md:py-4 w-[15%]">Subtotal</th>
                                                <th className="w-[5%] px-2 md:px-5 py-3 md:py-4"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItem.map((item) => (
                                                <tr key={item.id} className='border-b border-(--primary-color-dark)/10 last:border-b-0'>
                                                    <td className="px-2 md:px-5 py-2 md:py-4">
                                                        <div className="flex items-center gap-2 md:gap-4">
                                                            <div className="p-1 md:p-2 shrink-0">
                                                                <img src={item.image} alt={item.name} className="w-12 md:w-22 object-cover" />
                                                            </div>
                                                            <div className="min-w-0">
                                                                <h4 className="text-xs md:text-xl text-(--primary-color-dark) truncate">{item.name}</h4>
                                                                <p className="text-xs md:text-sm text-(--primary-color-dark)/60 hidden md:block">
                                                                    {item.description.split(' ').slice(0, 6).join(' ') + (item.description.split(' ').length > 6 ? '...' : '')}
                                                                </p>
                                                                <p className="text-[10px] md:hidden text-(--primary-color-dark)/60 truncate">{item.packQuantity}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-2 md:px-5 py-2 md:py-4 text-xs md:text-lg font-semibold text-(--primary-color-dark) whitespace-nowrap">
                                                        ৳{item.price}
                                                        <span className="block text-[10px] md:text-sm font-normal text-(--primary-color-dark)/50 whitespace-nowrap">{item.packQuantity}</span>
                                                    </td>
                                                    <td className="px-2 md:px-5 py-2 md:py-4">
                                                        <div className="inline-flex justify-center items-center gap-1 md:gap-2 px-1 md:px-2 py-1 rounded-md border border-(--primary-color-dark)/30 text-(--primary-color-dark)">
                                                            <Button
                                                                onClick={() => dispatch(decrement(item.id))}
                                                                rIcon={IoRemove}
                                                                className="flex! items-center justify-center w-6 h-6 md:w-8.5 md:h-8.5 rounded-full text-(--primary-color-dark) text-lg!"
                                                            />
                                                            <p className="w-6 md:w-10 text-center text-xs md:text-base text-(--gray-scale-gray-900)">{item.quantity}</p>
                                                            <Button
                                                                onClick={() => dispatch(increment(item.id))}
                                                                rIcon={IoAdd}
                                                                className="flex! items-center justify-center w-6 h-6 md:w-8.5 md:h-8.5 rounded-full text-(--primary-color-dark) text-lg!"
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className="px-2 md:px-5 py-2 md:py-4 text-xs md:text-lg font-semibold text-(--primary-color-dark) whitespace-nowrap">
                                                        ৳{item.quantity * item.price}
                                                    </td>
                                                    <td className="px-2 md:px-5 py-2 md:py-4">
                                                        <Button
                                                            onClick={() => dispatch(removeFromCart(item.id))}
                                                            rIcon={IoClose}
                                                            className="text-(--primary-color-dark)! hover:text-(--error)! text-lg! shrink-0"
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='md:w-[30%] md:self-start border border-(--primary-color-dark)/20 p-6 rounded-xl shadow-[0px_12px_32px_0_rgba(30,26,23,0.15)]'>
                                <h4 className='text-xl md:text-3xl text-(--primary-color-dark) mb-8'>Order Summary</h4>
                                <p className='flex justify-between mt-4 text-lg mb-6'>Subtotal({cartItem.reduce((sum, item) => sum + item.quantity, 0)} items) <span className='text-(--primary-color-dark)'>৳{total.toFixed(2)}</span></p>
                                
                                <hr className='text-(--primary-color-dark)/30 mb-6' />
                                <p className='flex justify-between mt-4 text-lg font-semibold'>Total <span className='text-(--primary-color-dark)'>৳{(total + 50).toFixed(2)}</span></p>
                                <Link to='/checkout' className='mt-6 w-full py-3 px-4 text-white  text-lg flex items-center justify-center rounded-md gap-3 bg-(--primary-color-dark) hover:bg-(--primary-color)'>
                                Proceed to FiNalyze <FaArrowRight/>
                                </Link>
                               
                                <p className='text-(--text-3) font-family text-center mt-5'>Taxes and additional charges are calculated at checkout.</p>

                            </div>


                        </div>

                    )}
                </div>


            </div>


        </div>
    );
};

export default DishCart;