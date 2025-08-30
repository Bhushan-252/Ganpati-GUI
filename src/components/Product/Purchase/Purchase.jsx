import React from 'react'
import {useDispatch} from "react-redux";
function Purchase({handlePurchase}) {


    function handleAddToCart() {
        handlePurchase();
    }
  return (
    <>
     <section className='flex  mx-2 flex-col items-center'>

        <div className='m-2 flex-col items-center text-xl w-full flex justify-center lg:flex-row'>
            <button className='active:shadow-xl border-2 w-4/5 p-4 m-2 text-wefront  cursor-pointer border-wefront rounded-[0.5rem]' onClick={handleAddToCart}>Add to Cart</button>
            <button className='active:shadow-xl w-4/5 p-4 m-2 bg-wefront text-white  cursor-pointer rounded-[0.5rem]'>Buy Now</button>
        </div>
     </section>
    
    </>
  )
}

export default Purchase