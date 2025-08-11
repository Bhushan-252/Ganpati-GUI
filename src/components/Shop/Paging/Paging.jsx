import React from 'react'

function Paging ({first = true, last = true, pageNum, setPage}) {


  function handleNext() {
    setPage(pageNum+1)
  }

  function handlePrev() {
    if (pageNum-1 >= 0)
      setPage(pageNum-1)
  }

  return (
      <>
        <div className="flex justify-between p-4 m-2">
          <button

             onClick={handlePrev} disabled={first}
             className="flex items-center disabled:cursor-not-allowed  justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700  ">
            <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M13 5H1m0 0 4 4M1 5l4-4"/>
            </svg>
            Previous
          </button>
          <p className="  px-4 py-2 text-center font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 "> {pageNum ? (pageNum + 1) : 1}</p>
          <button onClick={handleNext} disabled={last}
             className="flex disabled:cursor-not-allowed  items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ">
            Next
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
        </div>

      </>
  )
}

export default Paging
