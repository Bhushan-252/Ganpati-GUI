import React from 'react'

function Paging () {
  return (
    <>
      <div className='flex p-3 m-3 justify-around '>
        <div className=' active:scale-75 px-[2%] py-2 border-1 border-white text-2xl bg-wefront text-white'>
          prev
        </div>
        <span className=' active:scale-75 px-[2%] py-2 border-1 border-white text-2xl bg-wefront text-white'>
          1
        </span>
        <span className=' active:scale-75 px-[2%] py-2 border-1 border-white text-2xl bg-wefront text-white'>
          2
        </span>
        <span className='  px-[2%] py-2 border-1 border-white text-2xl bg-wefront text-white'>
          ...
        </span>
        <span className=' active:scale-75 px-[2%] py-2 border-1 border-white text-2xl bg-wefront text-white'>
          last
        </span>
        <div className=' active:scale-75 px-[2%] py-2 border-1 border-white text-2xl bg-wefront text-white'>
          next{' '}
        </div>
      </div>
    </>
  )
}

export default Paging
