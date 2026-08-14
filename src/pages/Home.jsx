import React, { useRef } from 'react';
import Button from './../component/ui/Button';
import experience from './../data/experience';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import DishCard from './../component/ui/DishCard';
import 'swiper/css';


const Home = () => {
    const swiperRef = useRef(null);
    const mainProducts = useSelector((state) =>
        state.product.allProducts.filter((p) => p.category === "main")
    );
    return (
        <div>
            {/* hero section start */}
            <div className='bg-[url(/images/herobg.png)] bg-cover bg-center aspect-2/1 py-15 '>
                <div className='container px-4 md:px-0 py-30'>
                    <h1 className='text-white text-5xl md:text-6xl'>The Heart of <br /> Bangladeshi Heritage</h1>
                    <p className='text-white text-sm md:text-base mt-5 font-family'>Experience the authentic taste of tradition in every bite.</p>
                    <div className='mt-10 flex items-center gap-8'>
                        <Button text="Reserve a Table" className='px-5 py-3 bg-(--primary-color-dark) hover:bg-(--primary-color) transition duration-300 text-white rounded-md' />
                        <Button text="View Menu" className='text-white border-2 border-white px-8 py-2.5 hover:border-(--bg-dark) hover:bg-(--bg-dark) transition duration-300  rounded-md' />
                    </div>
                </div>

            </div>

            {/* experience section start */}
            <div className='bg-(--bg-light) py-10 md:py-25 px-3 md:px-0'>
                <div className='container md:py-10 flex flex-col md:flex-row items-center md:gap-25 '>
                    <div className='md:w-[50%]'>
                        <h2 className='md:text-5xl text-3xl text-(--text-two)'>The Heritage Experience</h2>
                        <p className='text-(--text-3) text-sm md:text-xl mt-5 mb-10 font-family'>We believe in preserving the culinary artistry of Bengal, <br className='md:block hidden' />
                            bringing generations of tradition to the modern table.</p>
                        <div className='mt-10'>
                            {experience.map((exp, index) => (
                                <div key={index} className='flex items-center gap-5 mb-10'>
                                    <div className='w-20 h-20 md:size-23 shrink-0 overflow-hidden'>
                                        <img src={exp.image} alt={exp.title} className='w-full h-full object-cover rounded-md ' />
                                    </div>
                                    <div>
                                        <h4 className='text-(--text-two) md:text-2xl text:xl font-semibold mb-2'>{exp.title}</h4>
                                        <p dangerouslySetInnerHTML={{ __html: exp.description }} className='text-(--text-3) md:text-md text-sm font-family' />
                                    </div>

                                </div>
                            ))
                            }

                        </div>


                    </div>
                    <div className='relative'>
                        <div>
                            <img src={experience[1].image} alt={experience[1].title} className='object-cover' />
                        </div>
                        <div className='absolute -bottom-8 -left-18 w-32 h-32 md:w-52 md:h-52 border-4 border-white rounded-xl'>
                            <img src={experience[0].image} alt={experience[0].title} className='object-cover w-full h-full rounded-xl' />
                        </div>
                        <div className='absolute -top-8 -right-18 w-32 h-32 md:w-52 md:h-52 border-4 border-white rounded-xl'>
                            <img src={experience[2].image} alt={experience[2].title} className='object-cover w-full h-full rounded-xl' />
                        </div>
                    </div>
                </div>
            </div>
            {/* product section start */}
            <div className='bg-(--bg-light) '>
                <div className='container py-12 md:py-20 px-3 md:px-0'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h2>Signature Dishes</h2>
                            <p>Curated selections from our master chefs.</p>
                        </div>
                        <div>
                            <div className='flex items-center gap-4'>
                                <button onClick={() => swiperRef.current?.slidePrev()} className='w-11 h-11 border-2 border-(--primary-color-dark) text-(--primary-color-dark) rounded-full transition hover:bg-(--primary-color-dark) hover:text-white'>&#8592;</button>
                                <button onClick={() => swiperRef.current?.slideNext()} className='w-11 h-11 border-2 border-(--primary-color-dark) text-(--primary-color-dark) rounded-full transition hover:bg-(--primary-color-dark) hover:text-white'>&#8594;</button>
                            </div>
                        </div>
                        
                    </div>
                    {/* product items start */}
                    <div className='mt-10'>
                        <Swiper
                            ref={swiperRef}
                            onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
                            slidesPerView={3}
                            spaceBetween={20}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                        >
                            {mainProducts.map((p) => (
                                <SwiperSlide key={p.id}>
                                    <DishCard {...p} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Home;