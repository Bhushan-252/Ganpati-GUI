import React from 'react'
import {faLocationDot, faEnvelope,faPhoneVolume} from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <>
      <footer className=' bottom-0 m-0 p-0'>
        <div className='flex text-[1rem] bg-weback text-white p-2 '> 
          <div className='flex-1/3'>
            <h3 className='text-xl font-bold'>Products</h3>
            <ul className='list-disc mx-4'>
              <li className='py-1'>Paper Clay</li>
              <li className='py-1'>Shadu Soil Clay</li>
            </ul>
          </div>
          <div className=''>
            <h3 className='text-xl font-bold'>
              Contact Us
            </h3>
            <ul className='  mx-3'>
              <li className='py-1'><FontAwesomeIcon className='text-wefront mr-2' icon={faLocationDot} /><span className='ml-2'>alibag</span></li>
              <li className='py-1'><FontAwesomeIcon className='text-wefront mr-2' icon={faEnvelope} /> <span>support@mazamoraya.in</span></li>
              <li className='py-1'><FontAwesomeIcon className='text-wefront mr-2' icon={faPhoneVolume} /><span>+91 1234567890</span></li>
            </ul>
          </div>
        </div>
        <div className='bg-[rgb(56,65,102)] text-[rgb(180,183,198)] text-center m-0 p-0 '>
          <p className='p-3'>Copyright © 2025 MazaMoraya</p>
        </div>
      </footer>
    </>
  )
}
