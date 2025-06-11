import React from 'react'

function Purchase() {
  return (
    <>
     <section className='flex  mx-2 flex-col items-center'>
        {/* <div className='flex'>
            <div className='m-2 text-xl rounded-3xl bg-red-600 px-3'>-</div>
            <div className='m-2 text-xl'>1</div>
            <div className='m-2 text-xl rounded-3xl bg-red-600 px-2'>+</div>
        </div> */}
        <div className='m-2 flex-col items-center text-xl w-full flex justify-center'>
            <button className='active:shadow-xl border-2 w-4/5 p-4 m-2 text-wefront border-wefront rounded-[0.5rem]'>Add to Cart</button>
            <button className='active:shadow-xl w-4/5 p-4 m-2 bg-wefront text-white  rounded-[0.5rem]'>Buy Now</button>
        </div>
     </section>
    
    </>
  )
}

export default Purchase