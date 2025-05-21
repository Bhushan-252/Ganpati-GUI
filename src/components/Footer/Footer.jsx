import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot, faEnvelope,faPhoneVolume} from '@fortawesome/free-solid-svg-icons' 

export default function Footer() {
  return (
    <>
      <div>
        <div className='flex bg-weback text-white p-2 '> 
          <div className='flex-1/3 max-sm:flex-1/2 ml-1 '>
            <h3 className='text-xl font-bold'>Products</h3>
            <ul className='list-disc px-1 mx-4'>
              <li className='p-1'>Paper Clay</li>
              <li className='p-1'>Shadu Soil Clay</li>
              <li className='p-1'>Red Soil Clay</li>
            </ul>
          </div>
          <div className='flex-2/3 ml-3 max-sm:ml-1'>
            <h3 className='text-xl font-bold'>
              Contact Us
            </h3>
            <ul className=' px-1 mx-3'>
              <li className='p-1'><FontAwesomeIcon className='text-wefront mr-2' icon={faLocationDot} /><span className='ml-2'>alibag</span></li>
              <li className='p-1'><FontAwesomeIcon className='text-wefront mr-2' icon={faEnvelope} /> <span>helpdesk@mazamoraya.in</span></li>
              <li className='p-1'><FontAwesomeIcon className='text-wefront mr-2' icon={faPhoneVolume} /><span>+91 9923609309</span></li>
            </ul>
          </div>
        </div>
        <div className='bg-[rgb(56,65,102)] text-[rgb(180,183,198)] text-center '>
          <p className='p-3'>Copyright © 2025 MazaMoraya</p>
        </div>
      </div>
    </>
  )
}
