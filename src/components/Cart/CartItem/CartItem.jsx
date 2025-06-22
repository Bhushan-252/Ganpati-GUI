import React from 'react'
import temp from '../../../assets/Carsol_Logo.jpg'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { decreaseItemQuantity, removeCart,increaseItemQuantity } from '../../../features/Cart/cartSlice';
import { useDispatch } from 'react-redux'
function CartItem ({item}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className='bg-[#E4E6EA] my-2'>
        <div className='flex flex-row'>
          <img
            src={temp}
            className='w-1/3 my-3 mx-2 object-cover'
            alt=''
            loading='lazy'
          />
          <div className='my-3 flex flex-col text-black  w-full'>
            <h3 className=' text-xl'>
              {item.name}
              {/* {console.log(item.price)} */}
            </h3>
            <p className='text-sm'>{item.type}</p>
            <div className='mt-4 w-full'>
              <div className='flex items-center justify-between w-full '>
                <p className='font-bold text-xl ml-2'> ₹ {item.price} /-</p>
                <div className='flex'>
                  <div className='m-2 text-xl rounded-4xl bg-wefront text-center px-3' onClick={()=>dispatch(decreaseItemQuantity(item.id))}>
                    -
                  </div>
                  <div className='m-2 text-xl'>{item.quantity}</div>
                  <div className='m-2 text-xl rounded-4xl bg-wefront px-2' onClick={()=>dispatch(increaseItemQuantity(item.id))}>
                    +
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <p className='border-1 border-wefront text-wefront rounded-2xl w-fit px-4 py-1 text-center my-2 max-sm:active:bg-wefront max-sm:active:text-white transition'>
                  Move To Whislist
                </p>
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
