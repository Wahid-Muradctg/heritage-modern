import React from 'react';
import Rating from 'react-rating';
import { IoMdStarOutline } from "react-icons/io";


const TestimonialCard = ({ name, review, rating, location, image }) => {
    return (
        <div className='md:px-3'>
            <div className='flex bg-(--bg-light)/10 p-8 gap-6 rounded-md'>
                <div className='size-40'>
                    <img src={image} alt={name} className='size-ful rounded-full object-cover' />
                </div>
                <div>
                    <Rating initialRating={rating} readonly fractions={2}
                        emptySymbol={<IoMdStarOutline className="text-(--primary-color-dark)/20" />}
                        fullSymbol={<IoMdStarOutline className="text-(--primary-color)" />} />
                    <p className='text-white font-family my-2 text-sm md:text-md mb-2 line-clamp-2'>{review}</p>
                    <h4 className='text-(--primary-color) text-xl md:text-2xl font-semibold mb-2'>{name}</h4>
                    <p className='text-white font-family text-sm md:text-md mb-2 line-clamp-2'>{location}</p>
                </div>
                
            </div>
            
        </div>
       
    );
};

export default TestimonialCard;