import React from 'react'
import Carsoul from './Carsoul/Carsoul'
import Category from './Category/Category'
import TermCondi from './TermCon/TermCondi'
import Info from './Info/Info'
import Strength from './Stength/Strength'
import Gallary from './Gallary/Gallary'

function Home () {
  return (
    <>
      <div className='mt-2'>
        <Carsoul />
      </div>

      <div className='lg:px-[8%] md:px-[5%] sm:px-[3%] px-[2%] mt-2'>
        <Category />
        
      </div>
      {/* <Info /> */}
      <div className='lg:px-[8%] md:px-[5%] sm:px-[3%] px-[2%]'>
        <Strength />
        <Gallary />
        <TermCondi />
      </div>
    </>
  )
}

export default Home
