import React from 'react'
import temp from "../../../assets/Carsol_Logo.jpg"
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { addCart } from '../../../features/Cart/cartSlice'

function WhisListCard({data,deleteItem}) {
    const dispatch = useDispatch();
    // const data = {
    //   id: 3,
    //   name: 'Mazza Bappa Morya',
    //   price: 1400,
    //   type: 'Shadu Soil clay',
    //   quantity: 1,
    //   maxQuantity: 4
    // };

    function moveToCart(data){
        dispatch(addCart(data));
        deleteItem(data.id)
    }
    return (
        <>
            <div className='bg-[#E4E6EA] my-2'>
                <div className='flex flex-row'>
                    <img src={temp} className='w-1/3 my-3 mx-2 object-cover' alt="" />
                    <div className='my-3 flex flex-col text-black w-full'>
                        <h3 className='text-xl'>{data.name}</h3>
                        <p className='text-sm'>{data.type}</p>
                        <div className='mt-4 '>
                            <p className='font-bold text-xl ml-2'> ₹ {data.price} /-</p>
                            <div className='flex items-center justify-between'>
                                <p className='border-1 border-wefront text-wefront rounded-2xl w-fit px-4 py-1 text-center my-2 max-sm:active:bg-wefront max-sm:active:text-white transition'
                                onClick={()=>moveToCart(data)}
                                >Move To Cart</p>
                                <FontAwesomeIcon icon={faTrashAlt} className='text-2xl text-red-600 m-4 max-sm:active:scale-75' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default WhisListCard