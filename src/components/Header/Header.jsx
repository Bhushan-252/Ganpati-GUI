import React, { useState } from "react";
import simg from "../../assets/logo.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, useNavigate } from "react-router";
import { useSelector } from "react-redux";

function Header() {
  const [cartItems, setCartItems] = useState(1);
  const [WishList, setWishList] = useState(1);
  const cart = useSelector(state => state.cart)
  const navigate  = useNavigate();

  function loadWishList() {
    navigate("/wishlist")
  }

  function loadCartList(){
    navigate("/Cart")
  }
  return (
    <>
      <header className="h-fit sticky top-0 bg-white z-5 mt-0 m-0">
        <div className=" w-full flex justify-between">
          <img src={simg} className="max-sm:h-12 m-0" />
          {/* <img src={trolly} className="self-center max-sm:h-8 h-12 mx-2 p-1" /> */}
          <div className="flex justify-end w-50 mx-2">
            <div className="flex flex-row-reverse m-1 " onClick={()=>loadWishList()}>
              <p className="self-start text-white px-2 mx-1 text-[1rem] rounded-2xl bg-wefront sm:text-xl md:text-2xl">{WishList > 0 ? WishList : ''}</p>
              <FontAwesomeIcon className="self-center text-2xl md:text-3xl text-wefront" icon={faHeart}  />
            </div>

            <div className="flex flex-row-reverse m-1" onClick={()=>loadCartList()}>
              <p className="self-start text-white text-[1rem] mx-1 bg-wefront rounded-2xl px-2 sm:text-sm md:text-2xl">{cart.totalQuantity > 0 ? cart.totalQuantity : ''}</p>
              <FontAwesomeIcon className="self-center text-2xl md:text-3xl text-wefront" icon={faCartShopping} />
            </div>

          </div>
        </div>
        <div className="bg-weback w-full mt-2 py-2 h-1/2 ">
          <nav className="flex content-evenly justify-center ">
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
