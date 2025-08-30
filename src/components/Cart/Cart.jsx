import React from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CartItem from './CartItem/CartItem'
import Checkout from './Checkout/Checkout'
import { useSelector } from 'react-redux'

function Cart () {
  const cart = useSelector(state => state.cart);
  return (
    <>
      <div className='text-white m-2 bg-[#ffffff]'>
        <div className='bg-wefront text-xl flex justify-center items-center py-3 '>
          <FontAwesomeIcon icon={faCartShopping} className='text-2xl px-1' />
          <h3 className='px-2'>MY CART</h3>
        </div>

        <div className=" lg:grid lg:grid-cols-4 lg:gap-3">
          {cart?.items && cart?.items.map((item)=> <CartItem key={item.id} item={item} />)}
        </div>

        <div className='flex justify-end py-2 my-2'>
          <div className='bg-[#E4E6EA] flex flex-row font-semibold text-sm py-2 text-black'>
            <div className='flex flex-col items-end p-2 my-2'>
              <p>SUBTOTAL ({cart.totalQuantity} ITEMS) :</p>
              <p>TOTAL :</p>
            </div>
            <div className='justify-around flex flex-col p-2 my-2'>
              <p>₹ {cart.totalPrice}</p>
              <p>₹ {cart.totalPrice}</p>
            </div>
          </div>
        </div>
        <Checkout />
      </div>
    </>
  )
}

export default Cart
