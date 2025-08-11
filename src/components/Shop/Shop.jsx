import React from 'react'
import ResultContainer from './ResultContainer/ResultContainer'
import ScrollToTop from '../utility/ScrollToTop'
export default function Shop () {


  return (
    <>
    <ScrollToTop/>
      {
        <div className=' mt-2' >
            {/*<Carousel />*/}
          <ResultContainer />
        </div> 
      }

    </>
  )
}
