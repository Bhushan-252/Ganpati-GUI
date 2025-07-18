import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Title ({data, setQuantity , quantity}) {

  function handleQuantityChange(sign) {
    if (sign === '+' && (data.maxQuantity - quantity) > 0)
      setQuantity(quantity+1)
    if (quantity > 1 && sign === '-')
      setQuantity(quantity-1)

  }
  return (
    <>
      <section className='flex mx-2 flex-col '>
        <div className='p-2'>
          <h3 className='text-xl font-semibold '>
            {data?.title}
          </h3>
          <p>{data?.category}</p>
        </div>
        <div className='px-2 flex flex-row justify-between items-center'>
          <div className='flex items-center'>
            <p className='font-semibold text-xl text-nowrap'>₹ {data?.price}.00 /-</p>
            <p className='mx-2 font-light text-sm text-nowrap'>+ delivery Charges</p>
          </div>
          <p className='px-2 ml-9 bg-[#EBEDF0]'>
          {
            data?.maxQuantity > 0 ? "In Stock" : "Out of Stock"
          }
          </p>
        </div>
        <div className='text-2xl mt-2 ml-1.5 mb-4 flex justify-between items-center'>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faHeart} className='text-wefront' />
            <p className='text-[1.2rem] ml-2 '>Add To Wishlist</p>
          </div>

          {
            data?.maxQuantity ? (<div className='flex'>
            <div className='m-2 text-xl rounded-4xl bg-wefront text-center px-3' onClick={()=>handleQuantityChange("-")}>-</div>
            <div className='m-2 text-xl'>{quantity}</div>
            <div className='m-2 text-xl rounded-4xl bg-wefront px-2' onClick={() => handleQuantityChange("+") }>+</div>
            </div>) : ""
          }

        </div>
      </section>
    </>
  )
}

export default Title
