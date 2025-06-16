import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Title () {
  return (
    <>
      <section className='flex w-fit mx-2 flex-col '>
        <div className='p-2'>
          <h3 className='text-xl font-semibold '>
            Vighanaraj Eco-Friendly Ganesha Idol in Padmasana Pose
          </h3>
          <p>shadu soil idol</p>
        </div>
        <div className='px-2 flex flex-row justify-between items-center'>
          <div className='flex items-center'>
            <p className='font-semibold text-xl text-nowrap'>₹ 2999.00 /-</p>
            <p className='mx-2 font-light text-sm text-nowrap'>+ delivery Charges</p>
          </div>
          <p className='px-2 ml-9 bg-[#EBEDF0]'>In Stock</p>
        </div>
        <div className='text-2xl mt-2 ml-1.5 mb-4 flex justify-between items-center'>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faHeart} className='text-wefront' />
            <p className='text-[1.2rem] ml-2 '>Add To Whishlist</p>
          </div>

          <div className='flex'>
            <div className='m-2 text-xl rounded-4xl bg-wefront text-center px-3'>-</div>
            <div className='m-2 text-xl'>1</div>
            <div className='m-2 text-xl rounded-4xl bg-wefront px-2'>+</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Title
