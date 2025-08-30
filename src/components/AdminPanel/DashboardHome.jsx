import React from 'react';
import Card from './Card';
import Tables from './Tables';
import { useGetProductWithFilterQuery } from '../../services/products/products';

function DashboardHome() {
     const { data, isLoading, error } = useGetProductWithFilterQuery({
            // inches: filterStore?.inches,
            // categories:
            //     filterStore?.categories > 1
            //         ? categories
            //         : categories[filterStore?.categories],
            // page,
            // sort,
        });
    
    return (
        <>
        <div className="flex items-center    ">
            <form className="max-w-md mx-auto lg:flex-1/2 ">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Products..." required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            <form className="max-w-sm mx-auto m-4 lg:flex-1/2  ">
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue>Sort By</option>
                    <option value="LH">Low to High</option>
                    <option value="HL">High to low</option>
                    <option value="NM">Name</option>
                    <option value="DT">Date</option>
                </select>
            </form>
        </div>
        <div>
            {/* <Card/> */}
            {!isLoading ? <Tables data={data?.content}/>:""}
        </div>
        
        </>

    );
}

export default DashboardHome;
