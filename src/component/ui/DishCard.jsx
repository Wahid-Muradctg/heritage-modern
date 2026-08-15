import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaEye } from "react-icons/fa";
import Rating from 'react-rating';
import Button from './Button';
import ItemView from './ItemView';
import { addToCart } from '../../redux/cartSlice';
import { IoMdStarOutline } from "react-icons/io";
import { BiDish } from "react-icons/bi";


const DishCard = ({ id, image, name, price, description, rating = 0, quantity }) => {
    const dispatch = useDispatch();
    const [showView, setShowView] = useState(false);
    const product = { id, image, name, price, description, rating, quantity };
   

    const handleAdd = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        dispatch(addToCart({
            product,
            from: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
        }));
    };

    return (
        <div key={id} className='rounded-xl max-w-98 max-h-150 flex flex-col h-full shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.15),0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300' >
            <div className='w-full h-85'>
                <img className='object-cover rounded-tl-xl rounded-tr-xl  size-full' src={image} />
            </div>
            <div className='bg-white p-4 rounded-bl-xl rounded-br-xl flex-1 flex flex-col'>
                <div className='flex items-center justify-between'>
                    <span className='mb-3'>
                        <Rating initialRating={rating} readonly fractions={2}
                            emptySymbol={<IoMdStarOutline className="text-(--text-two)/40" />}
                            fullSymbol={<IoMdStarOutline className="text-(--primary-color-dark)" />} />
                        <span className='text-(--text-3) ms-2 mb-2'>{rating}</span>
                    </span>
                    <span onClick={() => setShowView(true)} className="cursor-pointer mb-3"><FaEye className='text-(--primary-color-dark) text-xl' /></span>
                </div>
                <h4 className='text-(--text-two) text-xl md:text-2xl font-semibold mb-2'>{name}</h4>
                <p className='text-(--text-3) text-sm md:text-md mb-2 line-clamp-2'>{description}</p>
                <div className='flex items-center justify-between mt-6'>
                    <div className='text-(--primary-color-dark)'>
                        <span className='me-3 text-xl font-semibold'>৳ {price}</span>
                        <span className='text-(--text-3)/70'>{quantity}</span>
                    </div>
                     <Button text="Add Dish" rIcon={BiDish} onClick={handleAdd} className='bg-(--primary-color-dark) py-2 px-5 text-white hover:bg-(--primary-color) rounded-md flex items-center gap-3' />
                </div>
            </div>
            {showView && <ItemView product={product} onClose={() => setShowView(false)} />}

        </div>
    );
};

export default DishCard;