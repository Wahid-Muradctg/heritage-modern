import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { LuHandPlatter } from "react-icons/lu";
import Button from "../ui/Button";
import { FaHamburger } from "react-icons/fa";
import CartDrawer from "../ui/CartDrawer";
import CartFly from "../ui/CartFly";
import { clearFly } from "../../redux/cartSlice";

const Header = () => {
    const [open, setOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const dispatch = useDispatch();
    const cartCount = useSelector((state) => state.cart.item.length);
    const flyProduct = useSelector((state) => state.cart.flyProduct);
    const cartTargetRef = useRef(null);

    useEffect(() => {
        if (!flyProduct) return;
        const t = setTimeout(() => dispatch(clearFly()), 850);
        return () => clearTimeout(t);
    }, [flyProduct]);

    const toggleMenu = () => {
        setOpen(!open)
    }
    const toggleCart = () => {
        setCartOpen(!cartOpen)
    }
    return (

        <div className=" bg-(--bg-dark) shadow-[0_4px_12px_rgba(255,255,255,0.3)]  py-4">
            <nav className="flex items-center justify-between container   px-4 md:px-0">
                {/* desktop menu */}
                <Link to="/" className="flex items-center gap-2">
                    <img className="size-10 md:size-15" src="/images/screen.png" alt="logo" />
                    <h3 className="text-(--primary-color-dark) font-(family-name:--third-family) text-xl md:text-3xl font-bold">Heritage Modern</h3>
                </Link>

                <div>
                    <ul className="md:flex items-center gap-8 ml-auto   hidden ">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-(--primary-color-dark) text-xl border-b-2 border-(--primary-color-dark) pb-1" : "text-white hover:text-(--primary-color-dark) text-xl transition"}>Home</NavLink></li>
                        <li><NavLink to="/menu" className={({ isActive }) => isActive ? "text-(--primary-color-dark) text-xl border-b-2 border-(--primary-color-dark) pb-1" : "text-white hover:text-(--primary-color-dark) text-xl transition"}>Menu</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-(--primary-color-dark) text-xl border-b-2 border-(--primary-color-dark) pb-1" : "text-white hover:text-(--primary-color-dark) text-xl transition"}>About</NavLink></li>
                        <li><NavLink to="/contract" className={({ isActive }) => isActive ? "text-(--primary-color-dark) text-xl border-b-2 border-(--primary-color-dark) pb-1" : "text-white hover:text-(--primary-color-dark) text-xl transition"}>Contract</NavLink></li>

                    </ul>
                </div>
                <div className="flex items-center gap-4 md:gap-5">
                    <div className="relative">
                        <Button
                            onClick={() => toggleCart('desktop')}
                            rIcon={LuHandPlatter} className="text-2xl md:text-4xl text-(--primary-color)" />
                        <p className="absolute bg-white md:size-5 size-4 rounded-full -top-0.5 -right-1 md:-right-2 text-sm md:text-md text-(--primary-color) flex items-center justify-center">{cartCount}</p>

                    </div>
                    <Button onClick={toggleMenu} rIcon={FaHamburger} className="text-(--primary-color) text-2xl md:hidden mb-1.5 " />
                    <Link className="text-white bg-(--primary-color-dark) px-6 py-3 rounded-md hover:bg-(--primary-color) transition font-(family-name:--second-family)  hidden md:block ">Reserve a Table</Link>

                </div>
            </nav>
            {/* mobile menu*/}
            <div onClick={toggleMenu} className={`md:hidden fixed z-50 top-0 left-0 w-full h-full bg-[rgb(0,0,0)]/40  transition-all duration-300 ${open ? " translate-x-0" : " -translate-x-full"}`}>
                <div className="w-[80%] h-full bg-(--bg-dark)  " onClick={(e) => { e.stopPropagation() }}>
                    <Link to="/" className="flex items-center justify-center gap-2 py-5 shadow-[0_5px_15px_rgba(255,255,255,0.15)]">
                        <img className="size-10 md:size-15" src="/images/screen.png" alt="logo" />
                        <h3 className="text-(--primary-color-dark) font-(family-name:--third-family) text-xl md:text-3xl font-bold">Heritage Modern</h3>
                    </Link>
                    <ul className="mt-10 flex flex-col gap-12 text-center">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-(--primary-color-dark) text-xl border-b-2 border-(--primary-color-dark) pb-1" : "text-white hover:text-(--primary-color-dark) text-xl transition"}>Home</NavLink></li>
                        <li><NavLink to="/menu" className={({ isActive }) => isActive ? "text-(--primary-color-dark) text-xl border-b-2 border-(--primary-color-dark) pb-1" : "text-white hover:text-(--primary-color-dark) text-xl transition"}>Menu</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-(--primary-color-dark) text-xl border-b-2 border-(--primary-color-dark) pb-1" : "text-white hover:text-(--primary-color-dark) text-xl transition"}>About</NavLink></li>
                        <li><NavLink to="/contract" className={({ isActive }) => isActive ? "text-(--primary-color-dark) text-xl border-b-2 border-(--primary-color-dark) pb-1" : "text-white hover:text-(--primary-color-dark) text-xl transition"}>Contract</NavLink></li>
                    </ul>
                    <div className="px-8">
                        <Link className="text-white bg-(--primary-color-dark) px-6 py-3 rounded-md hover:bg-(--primary-color) transition font-(family-name:--second-family) block mt-25 text-center text-2xl">Reserve a Table</Link>
                    </div>

                </div>

            </div>
            <div ref={cartTargetRef} className="fixed bottom-20 right-0  flex flex-col  gap-1 items-center justify-center z-50">
                <Link className=" p-3 bg-(--bg-dark) text-2xl md:text-3xl rounded-tl-md rounded-bl-md text-(--primary-color) border-l-6 border-(--primary-color)"><LuHandPlatter /></Link>
                <p className=" w-full flex items-center justify-center p-3 rounded-tl-md rounded-bl-md bg-(--bg-dark) text-xl md:text-2xl text-(--primary-color) border-l-6 border-(--primary-color)">{cartCount}</p>
            </div>
            <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
            {flyProduct && (
                <CartFly key={flyProduct.flyId} from={flyProduct.from}
                    targetRef={cartTargetRef} product={flyProduct.product} />
            )}

        </div>

    );
};

export default Header;