import React from 'react'

function Paging ({first, last, pageNum, setPage}) {


  function handleNext() {
    setPage(pageNum+1)
  }

  function handlePrev() {
    if (pageNum-1 >= 0)
      setPage(pageNum-1)
  }

  return (
    <>
      <div className='flex p-3 m-3 justify-around '>
        <button className=' active:scale-75 disabled:bg-gray-200 disabled:scale-100 px-3 py-1 border-1 border-white text-2xl bg-wefront text-white' disabled={first} onClick={handlePrev} >
          prev
        </button>
        <span className=' active:scale-75 px-3 py-1 border-1 border-white text-2xl bg-wefront text-white'>
          {pageNum ? pageNum+1 : 1}
        </span>
        <button className=' active:scale-75 disabled:bg-gray-200 disabled:scale-100 px-3 py-1 border-1 border-white text-2xl bg-wefront text-white' disabled={last} onClick={handleNext}  >
          next
        </button>
      </div>
    </>
  )
}

export default Paging
