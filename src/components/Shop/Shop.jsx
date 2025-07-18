import React, { useState } from 'react'
import Carsoul from '../Home/Carsoul/Carsoul'
import Paging from './Paging/Paging'
import ResultContainer from './ResultContainer/ResultContainer'
import ScrollToTop from '../utility/ScrollToTop'
export default function Shop () {


  return (
    <>
    <ScrollToTop/>
      {
        <div className=' mt-2'>
          <div className=''>
            <Carsoul />
          </div>
          <ResultContainer />
        </div> 
      }

    </>
  )
}
