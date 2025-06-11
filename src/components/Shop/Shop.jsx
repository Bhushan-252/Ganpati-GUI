import React from 'react'
import Carsoul from '../Home/Carsoul/Carsoul'
import Result from './ResultText/result'
import Paging from './Paging/Paging'
import ResultContainer from './ResultContainer/ResultContainer'
import { Outlet, useLocation } from 'react-router'
export default function Shop () {
  let temp = false
  const loc = window.location.href
  let temp_a = loc.split('/')
  temp_a = temp_a.pop()
  if("Product" === temp_a){
    temp = false
  }else{
    temp = true
  }
  return (
    <>
      {
        temp ? 
        <div className=' mt-2'>
          <div className=''>
            <Carsoul />
          </div>
          {/* {temp ? <Result /> : ''} */}
          <ResultContainer />
          <Paging />
        </div> : 
      <Outlet />
      }

    </>
  )
}
