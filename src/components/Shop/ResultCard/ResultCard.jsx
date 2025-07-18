import React, { useState } from 'react'
import temp from '../../../assets/Carsol_Logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router'
import { faHeart as fa } from '@fortawesome/free-solid-svg-icons'
function ResultCard ({data}) {
  const [temps, setTemps] = useState(true)
  const navigate = useNavigate()
  function ProductPage () {
    navigate(`/shop/Product/${data.id}`)
  }
  return (
    <>
      <div className='bg-white border-1 border-wefront p-2 mx-[2%] my-2 overflow-hidden '>
        <div className='h-[20dvh] lg:h-[50dvh] relative px-1'>
          <img src={`http://localhost:8080${data.productImages[0]}`} className='h-[100%] w-full object-cover' alt=''  onClick={() => ProductPage() }/>
          {temps ? (
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => setTemps(!temps)}
              className='top-0 right-2 active:scale-90 text-black text-2xl absolute '
            />
          ) : (
            <FontAwesomeIcon
              icon={fa}
              onClick={() => setTemps(!temps)}
              className='top-0 right-2 text-2xl active:scale-90 absolute text-red-700'
            />
          )}
        </div>
        <div
          className='px-1 max-sm:active:scale-95 transition '
          onClick={() => ProductPage()}
        >
          <div className='text-center'>
            <p className='text-xs lg:text-sm text-[#777] '> {data.size} Inch</p>
            <p className='text-xl lg:text-2xl font-semibold'>{data.title} </p>
          </div>
          <div className='px-1 flex text-center justify-center items-center  '>
            <p className='font-semibold text-xl m-2 p-2 text-wefront lg:text-weback lg:text-2xl text-nowrap'>
              ₹ {data.price}.00
            </p>
            <p className=' text-[#999] text-xs lg:text-xl font-light text-wrap'>+ Delivery Charges</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResultCard
