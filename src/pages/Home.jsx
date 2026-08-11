import React from 'react';
import Button from './../component/ui/Button';

const Home = () => {
    return (
        <div>
            {/* hero section start */}
            <div className='bg-[url(/images/herobg.png)] bg-cover bg-center aspect-2/1 py-15 '>
                <div className='container px-4 md:px-0 py-30'>
                    <h1 className='text-white text-5xl md:text-6xl'>The Heart of <br/> Bangladeshi Heritage</h1>
                    <p className='text-white text-sm md:text-base mt-5 font-family'>Experience the authentic taste of tradition in every bite.</p>
                    <div className='mt-10 flex items-center gap-8'>
                        <Button text="Reserve a Table" className='px-5 py-3 bg-(--primary-color-dark) hover:bg-(--primary-color) transition duration-300 text-white rounded-md'/>
                        <Button text="View Menu" className='text-white border-2 border-white px-8 py-2.5 hover:border-(--bg-dark) hover:bg-(--bg-dark) transition duration-300  rounded-md'/>
                    </div>
                </div>
            
            </div>
            
            {/*  */}


        </div>
    );
};

export default Home;