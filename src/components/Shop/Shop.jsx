import React, { useState } from 'react'
import Carsoul from '../Home/Carsoul/Carsoul'
import Result from './ResultText/result'
import Paging from './Paging/Paging'
import ResultContainer from './ResultContainer/ResultContainer'
import { Outlet, useLocation } from 'react-router'
export default function Shop () {

  return (
    <>
      {
       
        <div className=' mt-2'>
          <div className=''>
            <Carsoul />
          </div>
          {/* {temp ? <Result /> : ''} */}
          <ResultContainer />
          <Paging />
        </div> 
   
      }

    </>
  )
}
