import React from 'react';

import { Link } from 'react-router';


const Error = () => {
    return (
        <div className=' bg-(--bg-light) md:min-h-screen pb-15'>
            <div className='container  flex flex-col justify-center items-center '>
                <img src='/images/error.png' alt='error'/>
                <div className='mt-10 text-center'>
                    <h2 className='font-(family-name:--second-family) text-4xl font-bold text-(--primary-color-dark) '>Whoops ! Our Stove's Too Hot To Handle ! </h2>
                    <p className='text-md md:text-xl mt-6  text-(--primary-color-dark) font-semibold'>Looks Like This Dish Was Taken Off the Menu.
                          <br/> We've got plenty of other delicious options waiting for you.</p>
                </div>
                <div className='flex md:flex-row flex-col items-center justify-center mt-10 gap-8'>
                    <Link to="/" className='bg-(--primary-color-dark) text-white text-xl px-6 py-4 rounded-md font-semibold hover:bg-(--primary-color) transition font-(family-name:--second-family)'>RETURN TO HOME
                    </Link>
                    <Link className=' text-xl px-6 py-4 border-2 border-(--bg-dark) rounded-md font-semibold hover:bg-(--bg-dark) hover:text-white hover:border-(--bg-dark) transition font-(family-name:--second-family)'>VIEW OUR MENU</Link>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Error;