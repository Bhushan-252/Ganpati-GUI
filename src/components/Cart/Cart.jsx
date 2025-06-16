import { faCartPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CartItem from './CartItem/CartItem'
import Checkout from './Checkout/Checkout'

function Cart () {
  return (
    <>
      <div className='text-white m-2 bg-[#ffffff]'>
        <div className='bg-wefront text-xl flex justify-center items-center py-3 '>
          <FontAwesomeIcon icon={faCartShopping} className='text-2xl px-1' />
          <h3 className='px-2'>MY CART</h3>
        </div>
        <CartItem />
        <CartItem />
        <div className='flex justify-end py-2 my-2'>
          <div className='bg-[#E4E6EA] flex flex-row font-semibold text-sm py-2 text-black'>
            <div className='flex flex-col items-end p-2 my-2'>
              <p>SUBTOTAL (3 ITEMS) :</p>
              <p>TOTAL :</p>
            </div>
            <div className='justify-around flex flex-col p-2 my-2'>
              <p>₹ 3000.00</p>
              <p>₹ 3000.00</p>
            </div>
          </div>
        </div>

        <Checkout/>
      </div>
    </>
  )
}

export default Cart
