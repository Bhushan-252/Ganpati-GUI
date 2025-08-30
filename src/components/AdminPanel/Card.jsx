import React from 'react'
import placeHodler from '../../assets/image_1.jpeg'
import { faEdit } from '@fortawesome/free-regular-svg-icons/faEdit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Card() {
  return (
    <div className='flex my-2 p-2 justify-around font-semibold font-serif  rounded-2xl shadow-sm border-t border-sky-300 '>
      <h1>Title</h1>
      <h2>Quantity</h2>
      <h2>Size</h2>
      <h2>Price</h2>
      <img src={placeHodler} alt="product Image" className='w-[100px] '/>
      <div className='flex flex-col justify-around items-center '>
     <FontAwesomeIcon className='text-3xl cursor-pointer hover:scale-105 active:scale-95 font-semibold text-blue-700' icon={faEdit} />
      <FontAwesomeIcon className='text-3xl cursor-pointer hover:scale-105 active:scale-95 font-semibold text-red-700' icon={faTrash} />    
      </div>
    
    </div>
  )
}

export default Card
