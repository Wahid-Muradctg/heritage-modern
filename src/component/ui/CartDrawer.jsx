import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoClose, IoRemove, IoAdd } from "react-icons/io5";
import { FaPlateWheat } from "react-icons/fa6";
import { decrement, increment, removeFromCart } from '../../redux/cartSlice';
import Button from './Button';

const CartDrawer = ({ isOpen, onClose,  }) => {
    
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cart.item);
    const total = cartItem.reduce((sum, item) => sum + parseFloat((item.price).replace('$', '')) * item.quantity, 0)
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
                        <div>
                            {
                                cartItem.map((item) => (
                                    <div key={item.id} className="flex items-center gap-3 p-3 border border-(--primary-color-dark) rounded-lg">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-lg shrink-0"
                                        />

                                        <div className="w-24 md:w-32 shrink-0 md:me-10">
                                            <p className="text-sm md:text-md font-medium text-(--text-two) truncate">
                                                {item.title}
                                            </p>
                                            <p className='text-(--text-3) text-xs md:text-sm'>{item.description}</p>
                                            <p className="text-sm md:text-md font-semibold text-(--primary-color-dark) mt-1">
                                                {item.price}
                                            </p>
                                        </div>

                                        <div className="inline-flex justify-center items-center shrink-0 relative p-1 md:p-2 rounded-[170px] bg-(--primary-color) border border-(--primary-color-dark)/30 text-(--primary-color-dark) text-sm md:text-base font-medium" >
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

                                        <div className="flex-1" />

                                        <Button
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                            lIcon={IoClose}
                                            className="text-(--primary-color-dark)! hover:text-(--error)! text-lg! shrink-0"
                                        />
                                        
                                    </div>
                                ))
                            }
                        </div>
                    )}
                </div>

            </div>


        </div>
    );
};

export default CartDrawer;