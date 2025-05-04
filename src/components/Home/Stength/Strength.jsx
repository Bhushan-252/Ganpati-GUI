import React, { Component } from 'react'

export class Strength extends Component {
  render() {
    return (
      <>
      
        <div className='px-4 md:m-4 grid grid-cols-1 md:grid-cols-2 bg-[rgb(250,249,255)]'>
          <div className='text-wrap w-2/3 px-2 my-4 text-xl'>
            <p>Our Key</p>
            <p className='font-extrabold text-wefront text-5xl py-2 mb-2 '>STRENGTH</p>
            <p className='text-[1rem] '>Enjoy better shoping expreince with our Trusted services</p>
          </div>
          <div className='grid text-wrap text-center grid-cols-2 gap-3'>
            <p className='px-2 py-4 border-1 border-wefront rounded-xl  '>100% secure payment</p>
            <p className='px-2 py-4 border-1 border-wefront rounded-xl  '>best product offerd</p>
            <p className='px-2 py-4 border-1 border-wefront rounded-xl  '>buy anytime - accessible 24/7</p>
            <p className='px-2 py-4 border-1 border-wefront rounded-xl  '>self pickup from shop</p>
            <p className='px-2 py-4 border-1 border-wefront rounded-xl  '>Easy to use and handle</p>
            <p className='px-2 py-4 border-1 border-wefront rounded-xl  '>Doorstep Delivery</p>
          </div>
        </div>
      </>
    )
  }
}

export default Strength
