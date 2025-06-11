import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons/faHeartCirclePlus'
import WhisListCard from './Card/WhisListCard'
function Whislist () {
  const temp = [1, 2, 3, 4, 5]
  return (
    <>
      <div className='text-white m-2 bg-[#edebeb]'>
        <div className='bg-wefront text-xl flex justify-center items-center py-3 '>
          <FontAwesomeIcon icon={faHeartCirclePlus} className='text-2xl px-1' />
          <h3 className='px-2'>MY WISH-LIST</h3>
        </div>
        <div className='h-fit p-[1%]'>
          {temp.map((temp, index) => <WhisListCard key={index} />)}
        </div>
      </div>
    </>
  )
}

export default Whislist
