import React, { useState } from 'react'
import temp from '../../assets/1 (7).jpeg'
import img from '../../assets/1 (4).jpeg'
import gallar3 from '../../assets/1 (5).jpeg'
import gallar4 from '../../assets/1 (6).jpeg'
import Title from './Title'
import Purchase from './Purchase/Purchase'
import { Link, Outlet } from 'react-router'
function Product () {
  
  const [tem,setTem] = useState(temp);
  function changeImage(pastem){
    setTem(pastem);
  }
  let count = 0;
  const list = [temp,img,gallar3,gallar4];
  function cycleImages(){
    return setInterval(()=>{
      if(count < list.length ){
        setTem(list[count]);
        count++;
      }else{
        count = 0;
      }
    },2000)
    // clearInterval(ab);
  }

  return (
    <>
      <section className='mx-7'>
        <div className='flex align-middle items-center flex-col overflow-hidden h-[60vh] justify-evenly  m-1'>
          <img
            src={tem}
            alt=''
            className='m-2 px-4 h-[70%]  object-cover object-center ease-in-out transition-all w-full'
            onClick={()=>(cycleImages())}
          />
          <div className='flex justify-evenly w-full mx-4 p-2'>
            <div onClick={()=>changeImage(temp)} className=' h-[60%] w-full object-center  active:shadow-md shadow-black border-red-100 border-2'>
            
              <img src={temp} alt='' className='h-full w-full  object-cover ' />
            </div>
            <div onClick={()=>changeImage(img)} className=' h-[60%] w-full object-center  active:shadow-md shadow-black border-red-100 border-2'>
            
              <img src={img} alt='' className='h-full w-full object-cover ' />
            </div>
            <div className=' h-[60%] w-full object-center  active:shadow-md shadow-black border-red-100 border-2'>
            
              <img src={gallar3} alt='' className='h-full w-full object-cover ' />
            </div>
            <div className=' h-[60%] w-full object-center  active:shadow-md shadow-black border-red-100 border-2'>
            
              <img src={gallar4} alt='' className='h-full w-full object-cover ' />
            </div>
          </div>
        </div>
      </section>
      <Title/>
      <Purchase/>
      <div className='flex bg-[#EBEDF0] p-4 justify-around'>
        <Link to="discription">Discription</Link>
        <Link to="FAQ">FAQ</Link>
      </div>
      <Outlet/>
    </>
  )
}

export default Product
