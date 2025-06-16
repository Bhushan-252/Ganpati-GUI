import React from 'react'
import temp from "../../../assets/Carsol_Logo.jpg"
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function WhisListCard() {
    return (
        <>
            <div className='bg-[#f9f2f2] my-2'>
                <div className='flex flex-row'>
                    <img src={temp} className='w-1/3 my-3 mx-2 object-cover' alt="" />
                    <div className='my-3 flex flex-col text-black'>
                        <h3 className=' text-xl'>12 Inch, vighanraj Eco-friendly Ganesha Idol in padmasana Pose</h3>
                        <p className='text-sm'>Paper Clay</p>
                        <div className='mt-4'>
                            <p className='font-bold text-xl ml-2'> ₹ 129999 /-</p>
                            <div className='flex items-center text-xl justify-between'>
                                <p className='border-1 border-wefront text-wefront rounded-2xl w-fit px-4 py-1 text-center my-2 max-sm:active:bg-wefront max-sm:active:text-white transition'>Move To Cart</p>
                                <FontAwesomeIcon icon={faTrashAlt} className='text-3xl text-red-600 m-4 max-sm:active:scale-75' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default WhisListCard