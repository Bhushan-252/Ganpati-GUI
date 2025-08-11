import React, {lazy, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFilter} from '@fortawesome/free-solid-svg-icons/faFilter'
import {faClose, faSliders, faSort} from '@fortawesome/free-solid-svg-icons'
import ResultCard from '../ResultCard/ResultCard'
import {faFileAlt} from '@fortawesome/free-regular-svg-icons'

const FilterCheckbox = lazy(() => import('./FilterCheckbox/FilterCheckbox.jsx'));
import {useGetProductWithFilterQuery} from '../../../services/products/products'
import Paging from "../Paging/Paging.jsx";
import {useSearchParams} from "react-router";


function ResultContainer() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filterStore, setFilterStore] = useState({inches: [], categories: []});
    const Inches = [8, 10, 12, 18, 24]
    const categories = ["Shadu Soil Idol", "Paper Clay Idol"]
    const [filterOn, setFilterOn] = useState(false)
    const classname = `${filterOn ? 'max-sm:translate-x-[-30%]' : 'max-sm:translate-x-[-100%]'}`
    const page = searchParams.get("page") || 0;
    const sort = searchParams.get("sort") || "0";
    const {data, isLoading, error} = useGetProductWithFilterQuery({
        inches: filterStore?.inches,
        categories: (filterStore?.categories > 1) ? categories : categories[filterStore?.categories],
        page: page,
        sort: sort
    });

    console.log(filterStore?.categories)

    function handleChange(e) {
        setSearchParams({sort: e.target.value})
    }

    function setPage(page) {
        setSearchParams({page: page, sort: sort})
    }

    return (
        <>
            <div className='max-md:relative lg:flex my-0.5 bg-[#fff] z-10 dark:bg-black '>
                <div
                    className={
                        'flex justify-between flex-col items-center lg:items-start overflow-hidden transition-transform max-md:h-[100dvh] max-md:w-full lg:w-fit bg-white border-r-1 border-gray-300 max-md:fixed top-0 z-10 lg:pr-[5%] lg:pl-2 ' +
                        classname
                    }
                >
                    <div
                        className='self-end m-1 absolute lg:hidden'
                        onClick={() => setFilterOn(!filterOn)}
                    >
                        <FontAwesomeIcon
                            icon={faClose}
                            className='text-4xl px-2 py-1 rounded-xl m-2 active:scale-75'
                        />
                    </div>
                    <div className='max-md:self-center max-md:ml-[19%] p-2 '>
                        <h3 className='text-xl font-semibold border-b-2 pb-1 w-[50%]'>
                            Category
                        </h3>
                        <FilterCheckbox value={0} title='Shadu Soil Idol' filterStore={filterStore}
                                        setFilterStore={setFilterStore}/>
                        <FilterCheckbox value={1} title='Paper Clay Idol' filterStore={filterStore}
                                        setFilterStore={setFilterStore}/>
                        <h3 className='text-xl font-semibold border-b-2 w-[50%]'>Sizes</h3>
                        {Inches.map((values, index) => (
                            <FilterCheckbox title={values} value={values} mes='Inch' key={index}
                                            filterStore={filterStore} setFilterStore={setFilterStore}/>
                        ))}

                    </div>
                    <button
                        name='apply'
                        onClick={() => setFilterOn(false)}
                        // onSubmit={(event) => handleTemp(event)}
                        className={
                            'cursor-pointer active:scale-95 outline-0 max-md:ml-20 max-md:w-1/2 relative self-center inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  '
                        }
                    >
                        <span
                            className="relative px-5 py-2.5 transition-all w-full  ease-in duration-75 bg-white rounded-md group-hover:bg-transparent">
Apply
</span>
                    </button>
                </div>

                <div className='flex justify-center lg:hidden'>
                    <span className='flex-grow h-1 w-full ml-10 self-center rounded-2xl bg-weback'></span>
                    <h3 className=' text-weback text-center self-center text-2xl font-semibold p-3'>
                        PRODUCT <span className='text-wefront '>LIST</span>
                    </h3>
                    <span className='flex-grow h-1 w-full mr-10 self-center rounded-2xl bg-weback'></span>
                </div>


                <div className="lg:flex lg:flex-col lg:w-full p-4" onClick={() => filterOn && setFilterOn(false)}>
                    <div
                        className='flex lg:flex-row-reverse text-weback align-middle items-center justify-between border-b-2 border-wefront '>
                        <div
                            className='flex items-center font-semibold  outline-0 lg:hidden bg-gray-50 border border-gray-300 text-gray-900 mb-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5'
                            onClick={() => setFilterOn(true)}
                        >
                            <FontAwesomeIcon icon={faSliders} className='mx-2'/>
                            <p>Filter</p>
                        </div>
                        <select
                            id="default"
                            name=""
                            value={sort}
                            onChange={(e) => handleChange(e)}
                            className=" max-sm:w-32 md:w-40 lg:w-56 font-semibold m-2 outline-0 self-end bg-gray-50 border flex border-gray-300 text-gray-900 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5  "
                        >
                            <option value="price,asc ">Low to High</option>
                            <option value="2">Relevance</option>
                            <option value="price,desc">High to Low</option>
                        </select>
                    </div>
                    {(isLoading || error) ? (<div className="grid gap-2 max-sm:grid-cols-2 lg:grid-cols-4 p-2">
                        <div role="status"
                             className="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 overflow-hidden ">
                            <div className="flex items-center justify-center h-[20dvh] lg:h-[35dvh]  mb-4 bg-gray-300 rounded-sm ">
                                <svg className="w-10 h-10 text-gray-200 " aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path
                                        d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                                </svg>
                            </div>
                            <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full "></div>

                            <span className="sr-only">Loading...</span>
                        </div>
                        <div role="status"
                             className="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 overflow-hidden ">
                            <div className="flex items-center justify-center h-[20dvh] lg:h-[35dvh] mb-4 bg-gray-300 rounded-sm ">
                                <svg className="w-10 h-10 text-gray-200 " aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path
                                        d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                                </svg>
                            </div>
                            <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full "></div>

                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>) : (<div className='grid gap-2 max-sm:grid-cols-2 lg:grid-cols-4'>
                        {data?.content?.map((product) => (
                            <ResultCard key={product.id} data={product}/>
                        ))}
                    </div>)}
                </div>

            </div>

            {(!isLoading && !error) &&
                <Paging first={data?.first} last={data?.last} pageNum={data?.number} setPage={setPage}/>}
        </>
    )
}

export default ResultContainer
