import React from 'react';
import { Link } from 'react-router';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";






const Footer = () => {
    return (
        <div className='bg-(--bg-dark) py-15 px-4 md:px-0'>
            <div className='container flex flex-col md:flex-row items-start justify-between mb-10'>
                <div>
                    <Link to="/" className="flex items-center gap-2">
                        <img className="size-10 md:size-15" src="/images/screen.png" alt="logo" />
                        <h3 className="text-(--primary-color-dark) font-(family-name:--third-family) text-xl md:text-3xl font-bold">Heritage Modern</h3>
                    </Link>
                    <p className='text-white ms-2 mt-4'>Elevating Bengali traditions with <br/> modern culinary artistry in a sophisticated, <br/> high-contrast dining experience.</p>
                    <div className='ms-2 my-10'>
                        <p className='text-(--primary-color-dark) text-xl'>Follow Us</p>
                        <div className='flex items-center gap-5 text-white mt-4 text-2xl cursor-pointer'>
                            <FaFacebookSquare  />
                            <FaInstagramSquare/>
                            <IoLogoYoutube />
                        </div>
                    </div>
                </div>
                <div className='my-4'>
                    <p className='text-(--primary-color-dark) text-xl'>Explore</p>
                    <ul className='mt-4 flex gap-3 flex-col '>
                        <li><Link to="/menu" className="text-white hover:text-(--primary-color-dark) text-sm transition-all duration-300 inline-block hover:translate-x-1.5">Menu</Link></li>
                        <li><Link to="/book" className="text-white hover:text-(--primary-color-dark) text-sm transition-all duration-300 inline-block hover:translate-x-1.5">Reservations</Link></li>
                        <li><Link to="/about" className="text-white hover:text-(--primary-color-dark) text-sm transition-all duration-300 inline-block hover:translate-x-1.5">Our Story</Link></li>

                    </ul>
                </div>
                <div className='my-4'>
                    <p className='text-(--primary-color-dark) text-xl'>Company</p>
                    <ul className='mt-4 flex gap-3 flex-col '>
                        <li><Link to="/about" className="text-white hover:text-(--primary-color-dark) text-sm transition-all duration-300 inline-block hover:translate-x-1.5">Gallery</Link></li>
                        <li><Link to="/carrer" className="text-white hover:text-(--primary-color-dark) text-sm transition-all duration-300 inline-block hover:translate-x-1.5">Contact Us</Link></li>
                        <li><Link to="/contract" className="text-white hover:text-(--primary-color-dark) text-sm transition-all duration-300 inline-block hover:translate-x-1.5">Our Story</Link></li>

                    </ul>
                </div>
                <div className='my-4'>
                    <p className='text-(--primary-color-dark) text-xl'>Visit Us</p>
                    <p className='mt-4 text-white text-sm'>123 G.E.C Circle <br/> Chittagong 4012, Bangladesh</p>
                    <p className='mt-4 text-(--primary-color-dark)'>+880 1234 567 890</p>
                    <p className='text-(--primary-color-dark)'>info@heritagemodern.com</p>
                </div>
                
            </div>
            <hr className='border-(--primary-color-dark)'/>
            <p className='pt-12 text-white text-md text-center'>© 2026 Heritage Modern. All rights reserved.</p>

        </div>
    );
};

export default Footer;