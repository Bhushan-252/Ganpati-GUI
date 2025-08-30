 import { faEdit } from '@fortawesome/free-regular-svg-icons/faEdit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDeleteProductMutation } from '../../services/products/products'
import { useState } from 'react';

function Tables({ data }) {
    const [deleteProduct,{error,isLoading,isSuccess}] = useDeleteProductMutation();
    const [isdeleted, setIsDeleted] = useState(false);
   function Editdata(id){
    console.log(id)
   }

   function deleteData(id){
        deleteProduct(id);
        setIsDeleted(true)
   }
    return (
        <div className='w-full relative'>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                {isSuccess && <>The product is deleted</>}
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Size
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Edit
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((d,index) => (
                            <tr key={d.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 font-semibold">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {d.title}
                                </th>
                                <td className="px-6 py-4">
                                    {d.maxQuantity}
                                </td>
                                <td className="px-6 py-4">
                                    {d.category}
                                </td>
                                <td className="px-6 py-4 ">
                                    {d.size}
                                </td>
                                <td className="px-6 py-4">
                                    <img data-modal-target="default-modal" data-modal-toggle="default-modal" src={`http://localhost:8080${d.productImages[0]}`} alt="product Image" className='w-[100px] h-[180px] object-cover' />
                                </td>
                                <td className="px-6 py-4">
                                    ₹{d.price}
                                </td>
                                <td className="px-6 py-4">
                                    <FontAwesomeIcon className='text-2xl cursor-pointer hover:scale-105 active:scale-95 font-semibold text-blue-700' icon={faEdit} onClick={() => Editdata(d?.id)} />
                                </td>
                                <td className="px-6 py-4 ">
                                    <FontAwesomeIcon className='text-2xl cursor-pointer hover:scale-105 active:scale-95 font-semibold text-red-700' icon={faTrash} onClick={() => deleteData(d?.id)}/>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
                        
        </div>
    )
}

export default Tables
