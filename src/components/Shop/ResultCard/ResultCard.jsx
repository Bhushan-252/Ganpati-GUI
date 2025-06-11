import React, { useState } from 'react'
import temp from '../../../assets/Carsol_Logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router'
import { faHeart as fa } from '@fortawesome/free-solid-svg-icons'
function ResultCard (props) {
  const [temps, setTemps] = useState(true)
  const navigate = useNavigate()
  function ProductPage () {
    navigate(`/shop/Product?id=${props.id}`)
  }
  return (
    <>
      <div className='bg-white border-1 border-wefront p-2 mx-[2%] my-2 '>
        <div className='h-[20vh] relative px-1'>
          <img src={temp} className='h-[100%] w-full object-cover' alt='' />
          {temps ? (
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => setTemps(!temps)}
              className='top-0 right-2 active:scale-90  text-2xl absolute text-white'
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
            <p className='text-xs text-[#777] '> 12 Inch</p>
            <p className='text-xl font-semibold'>DagduSheth </p>
          </div>
          <div className='px-1 flex text-center justify-center items-center '>
            <p className='font-semibold text-xl m-2 p-2 text-wefront'>
              ₹ 1290.00
            </p>
            <p className='text-wrap text-[#999] text-xs'>+ Delivery Charges</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResultCard
