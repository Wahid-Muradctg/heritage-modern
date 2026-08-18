import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredProducts, setCategory, setPriceRange, setSearchTerm, setCurrentPage } from './../redux/productSlice';
import Title from './../component/layouts/Title';
import { IoMdSearch } from "react-icons/io";
import Button from './../component/ui/Button';
import DishCard from './../component/ui/DishCard';
import ResponsivePagination from 'react-responsive-pagination';


const categories = [
    { id: 1, name: "All", value: "all" },
    { id: 2, name: "Starters", value: "starter" },
    { id: 3, name: "Main", value: "main" },
    { id: 4, name: "Desserts", value: "dessert" },
    { id: 5, name: "Beverages", value: "beverage" },
];
const baneerContent = {
    all: {
        title: "Our Authentic Menu",
        description: "Discover the rich tapestry of Bengali culinary heritage, elevated for the modern epicurean."
    },
    starter: {
        title: "Savor the Beginnings",
        description: "Begin your culinary journey with our exquisite selection of traditional starters."
    },
    main: {
        title: "The Heart of Bengali Cuisine",
        description: "Experience the bold flavors and aromatic spices that define our signature main courses."
    },
    dessert: {
        title: "Sweet Endings",
        description: "Conclude your meal with our delectable array of traditional Bengali desserts."
    },
    beverage: {
        title: "Refreshments",
        description: "Quench your thirst with Traditional coolers and modern blends to accompany your meal."
    },
}

const Menu = () => {
    const dispatch = useDispatch();
    const { category, priceRange, searchTerm, currentPage } = useSelector((state) => state.product);
    const { items, totalPages } = useSelector(selectFilteredProducts);
    const [range, setRange] = useState(priceRange)
    const handleRangeChange = (e) => {
        const value = Number(e.target.value);
        setRange([priceRange[0], value]);
        dispatch(setPriceRange([priceRange[0], value]));
    }
    const active = baneerContent[category] || baneerContent.all;
    useEffect(() => {
        dispatch(setCategory("all"))
    }, [])
    return (
        <div>
            <Title title={`${active.title} | Heritage Modern`} description={active.description} />
            {/* banner start  */}
            <div className='bg-[url(/images/menubanner.png)] bg-cover bg-center md:py-20 py-10'>
                <div className='container px-3 md:px-0'>
                    <div className='max-w-2xl text-center mx-auto'>
                        <div key={active.title} className='animate-fade-up'>
                            <h2 className='text-2xl md:text-5xl font-semibold text-white'>{active.title}</h2>
                            <p className='text-white mt-4'>{active.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* filter section start  */}
            <div className='bg-(--bg-light) py-10 md:py-16'>
                <div className='container px-4 md:px-0 flex flex-col md:flex-row gap-8'>
                    <aside className='md:w-[30%] shrink-0'>
                        <div className='relative'>
                            <IoMdSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-(--text-3)' />
                            <input type="text" placeholder='Search Dish...' className='w-full bg-(--bg-light) border border-(--text-3)/30 rounded-md py-2.5 ps-11 pe-4 text-(--text-two) outline-none focus:border-(--primary-color-dark) transition'
                                value={searchTerm}
                                onChange={(e) => dispatch(setSearchTerm(e.target.value))} />

                        </div>
                        {/* category start */}
                        <div className=' border border-(--text-3)/30 shadow-[0px_12px_32px_0_rgba(30,26,23,0.15)] p-6 rounded-lg mt-4'>
                            <h3 className='text-xl md:text-3xl px-2.5 '>Categories</h3>
                            <div>
                                {categories.map((cat) => (
                                    <Button

                                        key={cat.id} className={` text-start w-full mt-3 capitalize rounded-md px-3 py-2.5 transition ${category === cat.value ? 'bg-(--primary-color-dark) text-white' : 'text-(text-two) hover:bg-(--hover)'}`} text={cat.name} onClick={() => dispatch(setCategory(cat.value))} />
                                ))}
                            </div>

                        </div>
                          {/* price range start */}
                        <div className='border border-(--text-3)/30 shadow-[0px_12px_32px_0_rgba(30,26,23,0.15)] p-6 rounded-lg mt-4'>
                            <h3 className='text-xl md:text-3xl mb-4'>Price Range</h3>
                            <input
                                type="range"
                                min={0}
                                max={1500}
                                step={20}
                                value={range[1]}
                                onChange={handleRangeChange}
                                className='w-full accent-(--primary-color-dark)'
                            />
                            <div className='flex items-center justify-between mt-2 text-(--text-3)'>
                                <span>৳{range[0]}</span>
                                <span>৳{range[1]}</span>
                            </div>
                        </div>
                    </aside>
                    {/* product items start */}
                    <div className='md:w-[70%]'>
                        {items.length===0?(
                            <div>
                                <p className='text-center'>No Dish Found. Try Different dish from Menu</p>
                            </div>
                        ):(
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {items.map((p)=>(<DishCard key={p.id} {...p}/>))}

                            </div>
                        )}
                        {/* pagination start */}
                        {totalPages > 1 && (
                            <div className='mt-10 flex justify-center'>
                                <ResponsivePagination
                                    current={currentPage}
                                    total={totalPages}
                                    onPageChange={(page) => dispatch(setCurrentPage(page))}
                                />
                            </div>
                        )}

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Menu;