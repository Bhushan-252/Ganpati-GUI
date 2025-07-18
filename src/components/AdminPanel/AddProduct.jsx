import React, {useState} from 'react';

import {useAddPostMutation} from "../../services/products/products.js";
import {useDispatch} from "react-redux";
import {useLogoutMutation} from "../../services/login/login.js";
import {setLogin} from "../../features/Login/loginSlice.js";

const AddProduct = () => {
    const [temp, setTemp] = useState([]);
    const [addPost, { isLoading }] = useAddPostMutation()
    const [logout] = useLogoutMutation()
    const dispatch = useDispatch();

    async function handleForm(fromData) {
        let obj = {};
        const formDataTemp = new FormData();
        fromData.forEach((value, key) => {
            if (key !== "images")
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
        const previewImages = [];
        const file = data.target.files;
        for (const f of file) {
            previewImages.push(window.URL.createObjectURL(f))
        }
        setTemp(previewImages);
    }
    function handleLogout(e) {
        e.preventDefault()
        dispatch(setLogin(false))
        logout();
    }

    return (
        <>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md animate-fadeSlide">
                <h2 className="text-2xl font-semibold mb-6 text-center animate-popIn">
                    Add New Product
                </h2>

                <form action={handleForm} className="space-y-6">
                    {/* Title */}
                    <div className="transition-transform duration-300 hover:scale-[1.01]">
                        <label className="block text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-400 transition-all"
                        />
                    </div>

                    {/* Price */}
                    <div className="transition-transform duration-300 hover:scale-[1.01]">
                        <label className="block text-gray-700 mb-1">Price</label>
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
                        <label className="block text-gray-700 mb-1">Upload Images</label>
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
                        <label className="block text-gray-700 mb-1">Size (in inches)</label>
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
                        <label className="block text-gray-700 mb-1">Quantity</label>
                        <input
                            type="number"
                            name="maxQuantity"
                            min="1"
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-400 transition-all"
                        />
                    </div>

                    {/* Description */}
                    <div className="transition-transform duration-300 hover:scale-[1.01]">
                        <label className="block text-gray-700 mb-1">Description</label>
                        <textarea
                            name="description"
                            rows="4"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-400 transition-all"
                        ></textarea>
                    </div>

                    {/* Category */}
                    <div className="transition-transform duration-300 hover:scale-[1.01]">
                        <label className="block text-gray-700 mb-1">Category</label>
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
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 py-2 rounded shadow transition-transform transform hover:scale-105 duration-300"
                        >
                            {isLoading ? 'Submitting...' : 'Add Product'}
                        </button>
                        <button onClick={(e) => handleLogout(e)}>Logout</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default AddProduct;