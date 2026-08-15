import React from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';
import { IoClose, IoRemove, IoAdd, } from "react-icons/io5";
import Rating from 'react-rating';
import { IoMdStarOutline } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrement } from '../../redux/cartSlice';
import { BiDish } from "react-icons/bi";



const ItemView = ({ product, onClose }) => {
    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cart.item.find((item) => item.id === product.id));

    const handleAdd = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        dispatch(addToCart({
            product,
            from: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
        }));
    };

    return createPortal(
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60' onClick={onClose}>
            <div className='relative flex w-full max-w-225 overflow-hidden rounded-xl bg-(--bg-light) shadow-2xl' onClick={(e) => e.stopPropagation()}>

                <div className='hidden md:flex w-1/2 min-h-[560px] bg-(--bg-dark)'>
                    <img src={product.image} alt={product.name} className='w-full h-full object-cover' />
                </div>

                <div className='flex flex-col justify-center flex-1 p-8 md:p-12'>
                    <div className='mb-6'>
                        <h3 className='text-4xl md:text-6xl font-bold text-(--text-two) leading-tight'>{product.name}</h3>
                    </div>

                    <div className='flex items-center gap-4 mb-8'>
                        <p className='text-xl font-bold text-(--primary-color-dark)'>৳{product.price}</p>
                        <Rating initialRating={product.rating} readonly fractions={2}
                            emptySymbol={<IoMdStarOutline className='text-(--disable)' />}
                            fullSymbol={<IoMdStarOutline className='text-(--primary-color-dark)' />} />
                        <span className='text-sm text-(--text-two)/70'>{product.quantity}</span>
                    </div>

                    <p className='text-base text-(--text-two) mb-10 leading-relaxed'>{product.description}</p>

                    <div className='flex items-center gap-4'>
                        <div className='flex items-center bg-(--bg-light) border border-(--disable) rounded'>
                            <Button onClick={() => dispatch(decrement(product.id))}
                                rIcon={IoRemove}
                                className='flex! items-center justify-center w-12 h-12 text-(--text-two) text-lg!' />
                            <span className='w-12 text-center font-bold text-(--text-two)'>{cartItem ? cartItem.quantity : 0}</span>
                            <Button onClick={() => dispatch(addToCart({ product }))}
                                rIcon={IoAdd}
                                className='flex! items-center justify-center w-12 h-12 text-(--text-two) text-lg!' />
                        </div>

                        <Button onClick={handleAdd} text="Add Dish"
                            className='flex! items-center justify-center gap-2 px-8 py-4 bg-(--primary-color-dark) text-white font-bold rounded hover:bg-(--primary-color) transition shadow-lg'
                            rIcon={BiDish} />
                    </div>
                </div>

                <Button onClick={onClose} rIcon={IoClose}
                    className='absolute top-4 right-4 size-10 rounded-full bg-(--bg-light)/80 backdrop-blur-sm flex! items-center justify-center text-(--text-two) hover:text-(--error) shadow' />

            </div>
        </div>,
        document.body
    );
};

export default ItemView;
