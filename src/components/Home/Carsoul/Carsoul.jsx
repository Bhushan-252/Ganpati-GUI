import React, { useState } from 'react'
import carso from '../../../assets/Carsol_Logo.jpg'

export default function Carsoul() {
    const [title,setTitle] = useState('Welcome to Maza Morya')
    const [discrip,setDiscrip] = useState('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda vel porro alias cum odio voluptas nisi voluptate est iusto numquam nam vitae eum, quod sed minima eveniet, qui ratione provident!')
    const [imgSrc,setImgSrc] = useState(carso)
    return (
        <>
            <div className='flex bg-[rgb(250,249,255)] max-sm:flex-col-reverse text-justify'>
                <div className='flex flex-col justify-around m-2'>
                    <div className='text-x md:text-2xl lg:text-4xl h-1/3 mx-2'>{title.slice(0,10)}<p className='text-5xl md:text-7xl lg:text-9xl text-weback font-bold'>
                        {title.substring(11,15  )} 
                        <span className='text-wefront'>
                            {title.substring(16)}
                        </span>
                    </p>
                    </div>
                    <div className='mx-2 md:text-2xl lg:mt-2 lg:overflow-y-scroll text-wrap lg:text-3xl '>{discrip}</div>
                    <div className='border-2 transition-transform border-wefront active:scale-110 active:drop-shadow-2xl shadow-green-600 md:text-xl lg:text-3xl rounded-[5px] text-wefront mx-2 p-2 w-fit h-fit'>SHOP NOW</div>
                </div>
                <div className='relative max-sm:pb-[60%] pb-[100%] overflow-hidden rounded-2xl lg:w-2/3 mx-2'>
                    <img src={imgSrc} className='absolute active:scale-125 transition-all duration-500 ease-in-out opacity-80 object-center object-cover max-sm:w-full h-full' alt="img" />
                </div>
            </div>


        </>
    )
}
