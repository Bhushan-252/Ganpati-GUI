import React from 'react'
import temp from '../../../assets/Carsol_Logo.jpg'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { decreaseItemQuantity, removeCart,increaseItemQuantity } from '../../../features/Cart/cartSlice';
import { useDispatch } from 'react-redux'
import {Link} from "react-router";
function CartItem ({item}) {
  const dispatch = useDispatch();
  const url = `http://localhost:8080${item?.productImages[0]}`
  return (
    <>

      <div  className='bg-[#E4E6EA] my-2 mx-1 lg:flex lg:justify-center'>
        <div className='flex flex-row lg:flex-col  lg:w-full '>
          <img
            src={url ?? temp}
            className='flex-shrink-0 w-1/3 max-w-full p-2 object-center object-cover lg:w-full lg:h-[450px]'
            alt='This image is not rendering'
            loading='lazy'
          />
          <div className='my-3 flex flex-col text-black font-semibold w-full mx-2 px-2'>
            <Link to={`/shop/product/${item.id}`} className="cursor-pointer">
              <h3 className=' text-xl'>
                {item?.name ?? item?.title}
              </h3>
              <p className='text-sm'>{item.type ?? item?.category}</p>
            </Link>

            <div className='mt-4 w-full '>
              <div className='flex items-center justify-between w-full '>
                <p className='font-bold md:text-xl text-lg ml-2'> ₹ {item.price} /-</p>

              </div>
              <div className="flex items-center justify-between">
                <div className='flex cursor-pointer items-center'>
                  <div className='mx-2 lg:text-xl rounded-4xl bg-wefront text-center px-3 py-1' onClick={()=>dispatch(decreaseItemQuantity(item.id))}>
                    -
                  </div>
                  <div className='mx-2 lg:text-xl'>{item.quantity}</div>
                  <div className='mx-2 lg:text-xl rounded-4xl bg-wefront px-3 py-1' onClick={()=>dispatch(increaseItemQuantity(item.id))}>
                    +
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className='text-2xl text-red-600 m-4 max-sm:active:scale-75'
                  onClick={()=>dispatch(removeCart(item.id))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem
