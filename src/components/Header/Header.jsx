import React, { useState } from "react";
import simg from "../../assets/logo.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, useNavigate } from "react-router";

function Header() {
  const [cartItems, setCartItems] = useState(0);
  const [WhisList, setWhisList] = useState(1);
  const navigate  = useNavigate();

  function loadWhishList() {
    navigate("/whislist")
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
            <div className="flex flex-row-reverse m-1 " onClick={()=>loadWhishList()}>
              <p className="self-start text-weback text-[1rem] sm:text-xl md:text-2xl">{WhisList > 0 ? WhisList : ''}</p>
              <FontAwesomeIcon className="self-center text-2xl md:text-3xl text-wefront" icon={faHeart}  />
            </div>

            <div className="flex flex-row-reverse m-1" onClick={()=>loadCartList()}>
              <p className="self-start text-weback text-[1rem] sm:text-xl md:text-2xl">{cartItems > 0 ? cartItems : ''}</p>
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
