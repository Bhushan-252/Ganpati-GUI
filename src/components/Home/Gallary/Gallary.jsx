import React, { Component } from 'react'
import gallar from '../../../assets/image_1.jpeg'
import gallar1 from '../../../assets/image_2.jpeg'
import gallar2 from '../../../assets/image_3.jpeg'
import gallar3 from '../../../assets/image_4.jpeg'
import gallar4 from '../../../assets/image_5.jpeg'
import gallar5 from '../../../assets/image_6.jpeg'
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
                <div className="grid grid-cols-2 max-sm:grid-cols-1 md:grid-cols-3 gap-2 m-2">
                    <div className="grid max-sm:grid-cols-2 gap-4 ">
                        <div>
                            <img className="h-full max-w-full rounded-lg"
                                 src={gallar} alt=""/>
                        </div>
                        <div>
                            <img className="h-full max-w-full rounded-lg"
                                 src={gallar1} alt=""/>
                        </div>

                    </div>
                    <div className="grid max-sm:grid-cols-2 gap-4">
                        <div>
                            <img className="h-full max-w-full rounded-lg"
                                 src={gallar2} alt=""/>
                        </div>
                        <div>
                            <img className="h-full max-w-full rounded-lg"
                                 src={gallar3} alt=""/>
                        </div>

                    </div>
                    <div className="grid max-sm:grid-cols-2 gap-4">
                        <div>
                            <img className="h-full max-w-full rounded-lg"
                                 src={gallar4} alt=""/>
                        </div>
                        <div>
                            <img className="h-full max-w-full rounded-lg"
                                 src={gallar5} alt=""/>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default Gallary
