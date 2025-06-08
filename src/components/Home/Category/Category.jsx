import React from 'react'
import car from "../../../assets/Carsol_Logo.jpg"
export default function Category() {
    return (
        <>
            <div>

                <div className='flex justify-center '>
                    <span className='flex-grow h-1 w-full ml-10 self-center rounded-2xl bg-weback'>
                    </span>
                    <h3 className=' text-weback text-center self-center text-2xl font-semibold p-3'>
                        FEATURED <span className='text-wefront '>CATEGORIES</span>
                    </h3>
                    <span className='flex-grow h-1 w-full mr-10 self-center rounded-2xl bg-weback'>
                    </span>
                </div>

                <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 overflow-clip'>
                    <div className='mb-3 max-sm:active:scale-105 active:shadow-2xl lg:hover:scale-105 transition-transform max-sm:mx-[5%] '>
                        <img src={car} className='object-cover' alt="" />
                        <div className='text-2xl border-[1px] border-wefront text-wefront text-center p-2'>Paper Clay</div>
                    </div>
                    <div className='mb-3 max-sm:active:scale-105 active:shadow-2xl lg:hover:scale-105 transition-transform max-sm:mx-[5%] '>
                        <img src={car} className='object-cover' alt="" />
                        <div className='text-2xl border-[1px] border-wefront text-wefront text-center p-2'>Shadu Soil Clay</div>
                    </div>
                </div>


            </div>
        </>
    )
}
