import React, { Component } from 'react'
import gallar from '../../../assets/1 (2).jpeg'
import gallar1 from '../../../assets/1 (3).jpeg'
import gallar2 from '../../../assets/1 (4).jpeg'
import gallar3 from '../../../assets/1 (5).jpeg'
import gallar4 from '../../../assets/1 (6).jpeg'
import gallar5 from '../../../assets/1 (7).jpeg'
export class Gallary extends Component {
    render() {
        return (
            <>
                <div className='w-full text-2xl mt-4 text-center font-bold flex justify-center'>
                <span className='flex-grow h-1 w-[1px] ml-10 self-center rounded-2xl bg-weback'>
                </span>
                    <p className='p-3'>Check our <span className='text-wefront'>Gallery</span></p>
                    <span className='flex-grow h-1 w-[1px] mr-10 self-center rounded-2xl bg-weback'>
                    </span>
                </div>
                <div className='grid-cols-3 gap-3 grid-rows-2 grid mx-3 p-2 rounded-xl '>
                    <div className='overflow-clip col-start-1 '>
                        <img src={gallar} className='rounded-[5px] h-full w-full active:scale-125 transition-transform object-cover' alt="" />
                    </div>
                    <div className='col-span-1 overflow-clip'>
                        <img src={gallar1} className='rounded-[5px]  w-full  active:scale-125 transition-transform object-cover' alt="" />
                    </div>
                    <div className='col-span-1 row-span-1 overflow-clip'>
                        <img src={gallar2} className='rounded-[5px] h-full w-full  active:scale-125 transition-transform object-cover' alt="" />
                    </div>

                    <div className='row-span-1 overflow-clip'>
                        <img src={gallar3} className='rounded-[5px] h-full w-full  active:scale-125 transition-transform object-cover' alt="" />
                    </div>
                    <div className='col-span-1 overflow-clip'>
                        <img src={gallar4} className='rounded-[5px] h-full w-full  active:scale-125 transition-transform object-cover' alt="" />
                    </div>
                     <div className='col-span-1 overflow-clip'>
                        <img src={gallar5} className='rounded-[5px] h-full w-full  active:scale-125 transition-transform object-cover' alt="" />
                    </div>
                </div>
            </>
        )
    }
}

export default Gallary
