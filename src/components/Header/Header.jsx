import React, {useState} from "react";
import sig from "../../assets/logo.jpeg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {Link, NavLink, useNavigate} from "react-router";
import {useSelector} from "react-redux";

function Header() {
    const [WishList, setWishList] = useState(1);
    const cart = useSelector(state => state.cart)
    const navigate = useNavigate();

    function loadWishList() {
        navigate("/wishlist")
    }

    function loadCartList() {
        navigate("/Cart")
    }

    return (
        <>
            <header className="h-fit sticky top-0 bg-white dark:bg-black z-5  m-0 shadow-md">
                <div className=" w-full flex justify-between">
                    <img src={sig} className="max-sm:h-12 m-0"/>

                    <div className=" dark:text-black font-semibold  w-full mt-2 py-2 h-1/2 max-sm:hidden">
                        <nav className="flex content-evenly justify-center text-[1.2rem] max-sm:text-sm ">
                            <NavLink to="/" className="p-2 mx-2 hover:text-wefront  ">HOME</NavLink>
                            <NavLink to="/shop" className="p-2 mx-2 hover:text-wefront ">SHOP</NavLink>
                            <NavLink to="/about" className="p-2 mx-2 hover:text-wefront ">ABOUT</NavLink>
                            <NavLink to="/contact" className="p-2 mx-2 hover:text-wefront  ">CONTACT
                                US</NavLink>
                        </nav>
                    </div>


                    <div className="flex justify-end w-50 mx-2">
                        <div className="flex flex-row-reverse m-1 " onClick={() => loadWishList()}>
                            <p className="self-start text-white px-2 mx-1 text-[1rem] rounded-2xl bg-wefront sm:text-xl md:text-2xl">{WishList > 0 ? WishList : ''}</p>
                            <FontAwesomeIcon className="self-center text-2xl md:text-3xl  text-weback cursor-pointer"
                                             icon={faHeart}/>
                        </div>

                        <div className="flex flex-row-reverse m-1" onClick={() => loadCartList()}>
                            <p className="self-start text-white text-[1rem] mx-1 bg-wefront rounded-2xl px-2 sm:text-sm md:text-2xl">{cart.totalQuantity > 0 ? cart.totalQuantity : ''}</p>
                            <FontAwesomeIcon className="self-center text-2xl md:text-3xl text-weback cursor-pointer"
                                             icon={faCartShopping}/>
                        </div>

                    </div>
                </div>
                <div className="bg-weback w-full mt-2 py-2 h-1/2 md:hidden">
                    <nav className="flex content-evenly justify-center lg:text-md max-sm:text-sm ">
                        <NavLink to="/" className="p-2 mx-2 hover:text-wefront text-white">HOME</NavLink>
                        <NavLink to="/shop" className="p-2 mx-2 hover:text-wefront text-white">SHOP</NavLink>
                        <NavLink to="/about" className="p-2 mx-2 hover:text-wefront text-white">ABOUT</NavLink>
                        <NavLink to="/contact" className="p-2 mx-2 hover:text-wefront text-white">CONTACT US</NavLink>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
