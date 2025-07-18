import React, {useEffect, useState} from 'react'
// import img from '../../assets/image_2.jpeg'
import Title from './Title'
import Purchase from './Purchase/Purchase'
import {useParams} from "react-router";
import {Link, Outlet} from 'react-router'
import {useGetProductQuery} from "../../services/products/products.js";
import {useDispatch} from "react-redux";
import {addCart} from "../../features/Cart/cartSlice.js";
import Description from "./Discription/Description.jsx";
import FAQ from "./FAQ/FAQ.jsx";

function Product() {
    const dispatch = useDispatch();
    const id = useParams()
    const [image, setImage] = useState(null);
    const[quantity, setQuantity] = useState(1);
    const {data, isLoading} = useGetProductQuery(id.productID)

    useEffect(() => {
        // const myInterval = setInterval(() => {
            const images = data?.productImages;
        //     images.forEach((image) => {
        //         // setImage(image)
        //     })
        // }, 1000)
        //
        // return () => {
        //     clearInterval(myInterval);
        // }
        if (images !== undefined)
            setImage(images[0]);
    }, [data?.productImages])

    function handlePurchase() {
        if (!isLoading){
            const CardData = {
                ...data,
                quantity:quantity
            }
            CardData["maxQuantity"] = CardData["maxQuantity"] - quantity;
            dispatch(addCart(CardData))
        }

    }

    function changeImage(image) {
        setImage(image);
    }

    return (
        <>
            <section className='flex justify-center '>
                <div className='flex items-center flex-col w-[90%] h-[60dvh]'>
                    <img
                        loading='lazy'
                        src={`http://localhost:8080${image}`}
                        alt=''
                        className='m-2 px-4 object-cover ease-in-out transition-all w-full h-2/3'
                    />

                    <div className='flex mx-4 p-2 justify-evenly w-full border-1 overflow-hidden border-red-200'>

                        {data?.productImages?.map((imagesSrc,index) => (
                            <div onClick={() => changeImage(imagesSrc)}
                                 key={index}
                                 className='w-fit active:shadow-md shadow-black border-red-100 border-1'>
                                <img loading='lazy' src={`http://localhost:8080${imagesSrc}`} alt='' className=' w-full h-full object-cover'/>
                            </div>
                        ))
                        }


                    </div>
                </div>
            </section>
            <Title data={data} setQuantity = {setQuantity} quantity={quantity}/>
            {data?.maxQuantity > 0 ? <Purchase handlePurchase={handlePurchase}/> : <div className='active:shadow-xl active:bg-wefront active:text-white border-2 w-fit p-2 m-1 text-xl text-wefront border-wefront rounded-[0.5rem] text-center'> Notify me
            </div> }

            <div className='flex-col flex bg-[#EBEDF0] p-4 justify-around'>
                <h1 className="text-2xl font-semibold mx-2 mt-2 pt-2">Description</h1>
                <Description disc={data?.description} />
                <h1 className="text-2xl font-semibold mx-2 mt-2 pt-2">FAQ</h1>
                <FAQ/>
            </div>

        </>
    )
}

export default Product
