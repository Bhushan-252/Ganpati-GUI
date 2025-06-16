import React from 'react'
import gallar1 from '../../../assets/image_1.jpeg'
import gallar2 from '../../../assets/image_2.jpeg'
export default function Category() {
    return (
        <>
            <div className=''>

                <div className='flex justify-center '>
                    <span className='flex-grow h-1 w-full ml-10 self-center rounded-2xl bg-weback'>
                    </span>
                    <h3 className=' text-weback text-center self-center text-2xl font-semibold p-3'>
                        FEATURED <span className='text-wefront '>CATEGORIES</span>
                    </h3>
                    <span className='flex-grow h-1 w-full mr-10 self-center rounded-2xl bg-weback'>
                    </span>
                </div>

                <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 md:gap-3 lg:gap-5 lg:grid-cols-2 lg:grid-rows-1 overflow-clip  '>
                    <div className='mb-3 max-sm:active:scale-95 active:shadow-weshadow h-fit transition-transform max-sm:mx-[5%] border-2  border-black '>
                        <img src={gallar1} className='object-cover max-sm:h-[50vh] lg:h- lg:hover:scale-95 w-full' alt="" />
                        <div className='text-2xl border-[1px] border-wefront text-wefront text-center p-2'>Paper Clay Idol</div>
                    </div>
                    <div className='mb-3 max-sm:active:scale-95 active:shadow-weshadow h-fit transition-transform max-sm:mx-[5%] border-2 border-black '>
                        <img src={gallar2} className='object-cover max-sm:h-[50vh] lg:h-[10%] lg:hover:scale-95 w-full' alt="" />
                        <div className='text-2xl border-[1px]  border-wefront text-wefront text-center p-2'>Shadu Soil Idol</div>
                    </div>
                </div>


            </div>
        </>
    )
}
