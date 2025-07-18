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
    const [filterStore, setFilterStore] = useState({inches:[],categories:[]});
    const Inches = [8, 10, 12, 18, 24]
    const categories = ["Shadu Soil Idol","Paper Clay Idol"]
    const [filterOn, setFilterOn] = useState(false)
    const classname = `${filterOn ? 'translate-x-[-30%]' : 'translate-x-[-100%]'}`
    const page = searchParams.get("page") || 0;
    const sort = searchParams.get("sort") || "0";
    const {data, isLoading} = useGetProductWithFilterQuery({inches:filterStore?.inches , categories:categories[filterStore?.categories], page: page, sort: sort});
    if (isLoading) return <div> Loading...</div>;
    function handleChange(e) {
        setSearchParams({sort: e.target.value})
    }
    function setPage(page) {
        setSearchParams({page: page, sort: sort})
    }

    return (
        <>
            <div className='relative my-0.5 bg-[#f6f2f2]'>
                <div
                    className={
                        'flex justify-between flex-col items-center  overflow-hidden  transition-transform h-[100dvh] w-full bg-white fixed top-0 z-10 ' +
                        classname
                    }
                >
                    <div
                        className='self-end m-1 absolute'
                        onClick={() => setFilterOn(!filterOn)}
                    >
                        <FontAwesomeIcon
                            icon={faClose}
                            className='text-4xl px-2 py-1 rounded-xl m-2 active:scale-75'
                        />
                    </div>
                    <div className='self-center ml-[19%] p-2 '>
                        <h3 className='text-xl font-semibold border-b-2 pb-1 w-[50%]'>
                            Category
                        </h3>
                        <FilterCheckbox value={0} title='Shadu Soil Idol' filterStore={filterStore} setFilterStore={setFilterStore} />
                        <FilterCheckbox value={1} title='Paper Clay Idol' filterStore={filterStore} setFilterStore={setFilterStore} />
                        <h3 className='text-xl font-semibold border-b-2 w-[50%]'>Sizes</h3>
                        {Inches.map((values, index) => (
                            <FilterCheckbox title = {values} value={values} mes='Inch' key={index} filterStore={filterStore} setFilterStore={setFilterStore} />
                        ))}

                    </div>
                    <button
                        name='apply'
                        onClick={() => setFilterOn(false)}
                        onSubmit={(event) => handleTemp(event)}
                        className={
                            'p-2 border-2 self-end active:bg-wefront  active:text-white border-wefront translate-x-[-15%] m-2 text-xl rounded-xl  w-1/2'
                        }
                    >
                        Apply
                    </button>
                </div>

                <div className='flex justify-center '>
                    <span className='flex-grow h-1 w-full ml-10 self-center rounded-2xl bg-weback'></span>
                    <h3 className=' text-weback text-center self-center text-2xl font-semibold p-3'>
                        PRODUCT <span className='text-wefront '>LIST</span>
                    </h3>
                    <span className='flex-grow h-1 w-full mr-10 self-center rounded-2xl bg-weback'></span>
                </div>

                <div
                    className='flex text-weback align-middle items-center justify-between border-b-2 mx-2 border-wefront'>
                    <div
                        className='flex items-center  font-semibold active:scale-90 border-2 border-wefront px-2'
                        onClick={() => setFilterOn(true)}
                    >
                        <FontAwesomeIcon icon={faSliders} className='text-2xl m-2 '/>
                        <p>Filter</p>
                    </div>
                    <select
                        name=''
                        id=''
                        value={sort}
                        className='px-4 py-2 border-2 border-wefront font-semibold m-2 self-end outline-0'
                        onChange={(e) => handleChange(e)}
                    >
                        <option value='price,asc'>Low to High</option>
                        <option value='2'>Relevance</option>
                        <option value='price,desc'>High to Low</option>
                    </select>
                </div>
                <div className='grid gap-2 max-sm:grid-cols-2 lg:grid-cols-4'>
                    {data?.content?.map((product) => (
                        <ResultCard key={product.id} data={product}/>
                    ))}
                </div>
                {/* <div className='w-[100%] text-white flex justify-around text-3xl py-3 sticky bg-weback bottom-0'>
          <FontAwesomeIcon icon={faFilter}  className='active:scale-95'/>
          <FontAwesomeIcon icon={faSort} />
        </div> */}
            </div>

            <Paging first={data?.first} last={data?.last} pageNum={data?.number} setPage={setPage}/>
        </>
    )
}

export default ResultContainer
