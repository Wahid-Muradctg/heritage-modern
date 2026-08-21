import React from 'react';
import { chefdetails } from '../data/gallery';
import { galimage } from './../data/gallery';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Title from '../component/layouts/Title';


const About = () => {
    return (
        <div className='bg-(--bg-light) py-10 '>
            <Title title="About Us | Heritage Modern" description="A journey through time, spice, and modern epicurean elegance." />
            
            <div className='container px-4 md:px-0'>
                <div className='text-center md:py-10 '>
                    <h1 className='text-2xl md:text-5xl font-bold md-3 md:mb-5 text-(--text-two)'>Our Heritage</h1>
                    <p className='text-md md:text-xl text-(--text-3) font-family font-medium'>A journey through time, spice, and modern epicurean elegance.</p>
                    {/* about us */}
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 place-items-center mb-10 '>
                        <div>
                            <img src='/images/about.png' className='object-cover' />
                        </div>
                        <div>
                            <h4 className='text-start text-2xl md:text-5xl text-(--text-two) mb-5'>Rooted in Tradition, Plated for Today.</h4>
                            <p className='text-md md:text-xl text-start text-(--text-3) font-family mb-3'>Heritage Modernism is more than a concept; it is our narrative. Born from the rich culinary tapestry of Bengal, we seek to
                                elevate time-honored recipes through the lens of contemporary gastronomy. Every dish is a dialogue between the bold, unabashed flavors of our ancestors and the refined, minimalist plating of the modern era.</p>
                            <p className='text-md md:text-xl text-start text-(--text-3) font-family mb-3'>We source the finest local ingredients, honoring the seasons and the artisans who cultivate them. Our kitchen is a sanctuary where smoke, spice, and precision converge, creating an experience that is both deeply familiar and thrillingly new. Welcome to our table.</p>
                        </div>
                    </div>

                </div>
                {/* chef section */}
                <div className='text-center md:py-20 mb-20'>
                    <h4 className='text-2xl md:text-5xl text-(--text-two) font-bold md-3 md:mb-5'>Meet the Artisans</h4>
                    <p className='text-md md:text-xl text-(--text-3) font-family font-medium'>The visionaries behind our Heritage Modernism philosophy.</p>

                    <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 md:gap-8 mt-10 md:mt-20'>

                        {chefdetails.map((chef) => (
                            <div key={chef.id} className='p-8 rounded-xl border border-(--primary-color-dark)/20 shadow-[0px_12px_32px_0_rgba(30,26,23,0.15)] flex flex-col items-center justify-center hover:scale-105 transition'>
                                <img src={chef.image} className='size-18 md:size-30 rounded-full mb-5' />
                                <h4 className='text-2xl md:text-3xl text-(--text-two) font-bold mb-2'>{chef.name}</h4>
                                <p className='text-md md:text-xl text-(--primary-color-dark) font-medium mb-4'>{chef.designation}</p>
                                <p className='text-sm md:text-lg text-(--text-3) font-family'>{chef.description}</p>

                            </div>
                        ))}
                    </div>
                </div>

                {/* gallery section */}
                <div className='text-center md:py-10 mb-10'>
                    <h4 className='text-2xl md:text-5xl text-(--text-two) font-bold mb-3 md:mb-5'>Visual Story</h4>
                    <p className='text-md md:text-xl text-(--text-3) font-family font-medium mb-10 md:mb-20'>A glimpse into our aesthetic and culinary philosophy.</p>
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
                     gutterBreakPoints={{350: "12px", 750: "16px", 900: "24px"}}>
                        <Masonry gutter="1rem">
                            {galimage.map((img, index) => (
                                <img
                                    key={index}
                                    src={img.image}
                                    alt={img.alt || "gallery"}
                                    className='w-full rounded-xl object-cover hover:scale-105 transition-transform duration-300'
                                />
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>


                </div>


            </div>

        </div>
    );
};

export default About;