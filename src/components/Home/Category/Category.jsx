import React from 'react'
import gallar1 from '../../../assets/image_1.jpeg'
import gallar2 from '../../../assets/image_2.jpeg'

export default function Category() {
    return (
        <>

            <div className='flex justify-center '>
                    <span className='flex-grow h-1 w-full ml-10 self-center rounded-2xl bg-weback'>
                    </span>
                <h3 className=' text-weback text-center self-center text-2xl font-semibold p-3'>
                    FEATURED <span className='text-wefront '>CATEGORIES</span>
                </h3>
                <span className='flex-grow h-1 w-full mr-10 self-center rounded-2xl bg-weback'>
                    </span>
            </div>

            <div
                className='max-sm:flex max-sm:flex-col md:grid md:grid-cols-2 md:gap-3 lg:gap-5 lg:grid-cols-2 lg:grid-rows-1 font-sans max-sm:items-center '>
                <div className="m-2 lg:h-[50dvh] flex max-sm:flex-col shadow-lg shadow-gray-400 text-white max-sm:justify-center  max-sm:w-4/5 overflow-hidden rounded-xl ">
                    <img src={gallar1} className=" object-center object-cover h-full flex-1/2 " alt=""/>
                   <div className=" flex-1/2 bg-weback ">
                      <h1 className="text-3xl max-sm:text-xl text-center text-white lg:text-wefront font-semibold m-2 lg:underline-offset-4 lg:underline">Shadu Soil Idol</h1>
                       <p className="text-xl m-2 p-2 max-sm:hidden">
                           The idol is make using the shadu soil this soil is healthy for the environment.
                           <br/> This idol are made by hand or its human crafted
                       </p>
                   </div>

                </div>
                <div className="m-2 lg:h-[50dvh] flex max-sm:flex-col shadow-lg shadow-gray-400 text-white max-sm:justify-center  max-sm:w-4/5 overflow-hidden rounded-xl ">
                    <img src={gallar2} className=" object-center object-cover h-full flex-1/2 " alt=""/>
                    <div className=" flex-1/2 bg-weback ">
                        <h1 className="text-3xl max-sm:text-xl text-center text-white lg:text-wefront font-semibold m-2 lg:underline-offset-4 lg:underline">Paper Clay Idol</h1>
                        <p className="text-xl m-2 p-2 max-sm:hidden">
                            The idol is make using the shadu soil this soil is healthy for the environment.
                            <br/> This idol are made by hand or its human crafted
                        </p>
                    </div>

                </div>


            </div>


        </>
    )
}
