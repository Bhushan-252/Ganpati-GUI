import React, { useState } from 'react'
import { useAddPostMutation } from '../../services/products/products';
import { useNavigate } from 'react-router';

function AddProduct() {
    const navigate  = useNavigate();
        const [temp, setTemp] = useState([]);
        const [addPost, { data, isLoading, isSuccess, error }] = useAddPostMutation()
    
        async function handleForm(fromData) {
            let obj = {};
            const formDataTemp = new FormData();
            fromData.forEach((value, key) => {
                if (key != "images")
                    obj[key] = value;
            });
            formDataTemp.append("product", new Blob([JSON.stringify(obj)], { type: 'application/json' }));
            let files = fromData.getAll("images");
            files.forEach(file => {
                formDataTemp.append("images", file);
            });
            await addPost(formDataTemp);
            temp.map((i) => window.URL.revokeObjectURL(i))
            setTemp([])
        }
        async function handleImages(data) {
            var temps = [];
            var file = data.target.files;
            for (var f of file) {
                temps.push(window.URL.createObjectURL(f))
            }
            setTemp(temps);
        }
   
return (
    <>
         <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md animate-fadeSlide">
                <h2 className="text-2xl font-semibold mb-6 text-center animate-popIn">
                    Add New Product
                </h2>
                    <hr className='w-[11rem] rounded-lg mb-4 ml-auto mr-auto' /> 
                <form action={handleForm} className="space-y-6">
                    {/* Title */}
                    <div className="transition-transform duration-300 hover:scale-[1.01]">
                        <label className="block text-gray-700 mb-1">Title<span className='text-red-700'>*</span></label>
                        <input
                            type="text"
                            name="title"
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-400 transition-all"
                        />
                    </div>

                    {/* Price */}
                    <div className="transition-transform duration-300 hover:scale-[1.01]">
                        <label className="block text-gray-700 mb-1">Price<span className='text-red-700'>*</span></label>
                        <input
                            type="number"
                            name="price"
                            step="0.01"
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-400 transition-all"
                        />
                    </div>

                    {/* Images Upload */}
                    <div className="transition-transform duration-300 hover:scale-[1.01]">
                        <label className="block text-gray-700 mb-1">Upload Images<span className='text-red-700'>*</span></label>
                        <input
                            type="file"
                            name="images"
                            multiple
                            accept="image/*"
                            className="w-full border border-gray-300 rounded px-4 py-2"
                            onChange={handleImages}
                        />

                        {temp ?
                            temp.map((t, i) => {
                                return (
                                    <img src={t} alt="" srcSet="" key={i} />
                                );
                            }) : null
                        }

                    </div>

                    {/* Size */}
                    <div className="transition-transform duration-300 hover:scale-[1.01]">
                        <label className="block text-gray-700 mb-1">Size (in inches)<span className='text-red-700'>*</span></label>
                        <select
                            name="size"
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-400 transition-all"
                        >
                            <option value="">Select size</option>
                            {[8,10,12,18,24].map((i) => {
                                
                                return (
                                    <option key={i} value={i}>
                                        {i}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    {/* Quantity */}
                    <div className="transition-transform duration-300 hover:scale-[1.01]">
                        <label className="block text-gray-700 mb-1">Quantity<span className='text-red-700'>*</span></label>
                        <input
                            type="number"
                            name="quantity"
                            min="1"
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-400 transition-all"
                        />
                    </div>

                    {/* Description */}
                    <div className="transition-transform duration-300 hover:scale-[1.01]">
                        <label className="block text-gray-700 mb-1">Description<span className='text-red-700'>*</span></label>
                        <textarea
                            name="description"
                            rows="4"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-400 transition-all"
                        ></textarea>
                    </div>

                    {/* Category */}
                    <div className="transition-transform duration-300 hover:scale-[1.01]">
                        <label className="block text-gray-700 mb-1">Category<span className='text-red-700'>*</span></label>
                        <select
                            name="category"
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-400 transition-all"
                        >
                            <option value="">Select category</option>
                            <option value="Shadu Soil Idol">Shadu Soil Idol</option>
                            <option value="Paper Clay Idol">Paper Clay Idol</option>
                        </select>
                    </div>

                    {/* Submit */}
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 py-2 rounded shadow transition-transform transform hover:scale-105 duration-300"
                        >
                            {isLoading ? 'Submitting...' : 'Add Product'}
                        </button>
                    </div>
                </form>
            </div>
    </>
 )
}
export default AddProduct;