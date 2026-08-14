import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaEye, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import Button from './Button';
import ItemView from './ItemView';
import { addToCart } from '../../redux/cartSlice';


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
        <div key={id} >
            <div>
                <img src={image} />
            </div>
            <div>
                <div>
                    <span>
                        <Rating initialRating={rating} readonly fractions={2}
                            emptySymbol={<FaStar className="text-gray-300" />}
                            fullSymbol={<FaStar className="text-yellow-400" />} />
                        {rating}
                    </span>
                    <span onClick={() => setShowView(true)} className="cursor-pointer"><FaEye /></span>
                </div>
                <h4>{name}</h4>
                <p>{description}</p>
                <div className='md:flex items-center justify-between'>
                    <div className='text-(--primary-color-dark)'>
                        <span className='me-4'>৳ {price}</span>
                        <span>{quantity}</span>
                    </div>
                     <Button text="Add Dish" onClick={handleAdd} className='bg-(--primary-color-dark) py-2 px-5 text-white hover:bg-(--primary-color)' />
                </div>
            </div>
            {showView && <ItemView product={product} onClose={() => setShowView(false)} />}

        </div>
    );
};

export default DishCard;