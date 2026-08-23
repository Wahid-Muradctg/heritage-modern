import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoClose, IoRemove, IoAdd } from "react-icons/io5";
import { FaPlateWheat } from "react-icons/fa6";
import { decrement, increment, removeFromCart } from '../../redux/cartSlice';
import Button from './Button';
import { Link } from 'react-router';
import { BiDish } from "react-icons/bi";


const CartDrawer = ({ isOpen, onClose,  }) => {
    
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cart.item);
const total = cartItem.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
    return (
        <div className={`fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.5)] z-50 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            onClick={onClose}>
            <div className={`fixed top-0 right-0 w-[80%] md:w-[40%] 0 h-full bg-(--bg-light) transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between p-5 bg-(--hover) border-b-2 border-(--primary-color-dark)">
                    <h2 className="text-lg font-semibold text-(--primary-color-dark)">
                        Dish Cart ({cartItem.length})
                    </h2>
                    <Button
                    onClick={onClose} className="text-2xl text-(--primary-color-dark) hover:text-(--error)" rIcon={IoClose}/>
                         
                </div>
                <div>
                    {cartItem.length === 0 ? (
                        <div className="flex flex-col items-center justify-center flex-1 gap-3 py-20">
                            <FaPlateWheat className="text-9xl mb-10 text-(--primary-color-dark)/30" />
                            <p className="text-(--primary-color-dark) text-3xl">No Dish Added</p>
                        </div>

                    ) : (
                        <div className='overflow-y-auto'>
                            {
                                cartItem.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between gap-2 md:gap-5 p-2 md:p-4 border-b border-(--primary-color-dark)/20 hover:bg-(--primary-color-dark)/5 transition-colors duration-300 ease-in-out ) ">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-14 h-14 md:size-22 object-cover rounded-lg shrink-0"
                                        />

                                        <div className="flex-1 md:me-4 ">
                                            <p className="text-sm md:text-xl font-medium text-(--text-two) mb-2">
                                                {item.name}
                                            </p>
                                            <p className='text-(--text-3) text-xs md:text-md hidden md:block  font-family'>
                                                {item.description.split(' ').slice(0, 6).join(' ') + (item.description.split(' ').length > 5 ? '...' : '')}
                                                </p>
                                            <p className="text-sm md:text-xl font-semibold text-(--primary-color-dark) mt-2 "> ৳
                                                {item.price} <span className='ms-2 text-(--primary-color-dark)/50 text-xs md:text-md'>{item.packQuantity}</span>
                                            </p>
                                        </div>

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

                                        <Button
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                            rIcon={IoClose}
                                            className="text-(--primary-color-dark)! hover:text-(--error)! text-lg! shrink-0"
                                        />
                                        
                                    </div>
                                   
                                    
                                ))
                            }
                        </div>
                    )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-(--hover) border-t-2 border-(--primary-color-dark)">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-lg font-semibold text-(--primary-color-dark)">Total</p>
                        <p className="text-xl font-bold text-(--primary-color-dark)">৳ {total}</p>
                    </div>
                    <div className='flex items-center justify-around gap-4'>
                        <Link to='dishcart' className='flex justify-center items-center w-1/2 bg-(--primary-color-dark) text-white hover:bg-(--primary-color) text-sm  md:text-xl py-3 rounded-md gap-1 md:gap-3'>View Dish <BiDish /> </Link>
                        <Link to='checkout' className='flex justify-center items-center w-1/2 bg-(--primary-color-dark) text-white hover:bg-(--primary-color) text-sm  md:text-xl py-3 rounded-md px-1 gap-1 md:gap-3'>Checkout Dish <BiDish /></Link>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default CartDrawer;