import React, {useEffect, useState} from 'react'
// import img from '../../assets/image_2.jpeg'
import Title from './Title'
import Purchase from './Purchase/Purchase'
import {useParams} from "react-router";
import {Link, Outlet} from 'react-router'
import {useGetProductQuery} from "../../services/products/products.js";
import {useDispatch} from "react-redux";
import {addCart} from "../../features/Cart/cartSlice.js";
import Description from "./Description/Description.jsx";
import FAQ from "./FAQ/FAQ.jsx";

function Product() {
    const dispatch = useDispatch();
    const id = useParams()
    const [image, setImage] = useState(null);
    const[quantity, setQuantity] = useState(1);
    const {data, isLoading} = useGetProductQuery(id.productID)

    useEffect(() => {
            const images = data?.productImages;
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
            <section className='flex max-sm:flex-col justify-center lg:justify-around lg:w-[90%] lg:ml-auto lg:mr-auto'>
                <div className='flex max-sm:flex-col flex-col items-center lg:w-fit '>
                    <img
                        loading='lazy'
                        src={`http://localhost:8080${image}`}
                        alt='image'
                        className='m-2 h-[250px] w-[400px] lg:h-[550px] lg:w-[550px] object-contain border border-gray-400 p-2'
                    />

                    <div className='flex p-2 justify-evenly  '>
                        {data?.productImages?.map((imagesSrc,index) => (
                            <div onClick={() => changeImage(imagesSrc)}
                                 key={index}
                                 className='w-fit active:shadow-md shadow-black m-1'>
                                <img loading='lazy' src={`http://localhost:8080${imagesSrc}`} alt='' className='w-[100px] h-[100px] object-cover'/>
                            </div>
                        ))
                        }

                    </div>
                </div>
                <div className=" lg:w-1/2 ">
                    <Title data={data} setQuantity = {setQuantity} quantity={quantity}/>
                    <div className=" p-3 text-xl m-1 max-md:hidden  ">
                        <h2>
                            lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet loremlorem ipsum dolor sit amet loremlorem ipsum dolor sit amet loremlorem ipsum dolor sit amet lorem
                            lorem ipsum dolor sit amet loremlorem ipsum dolor sit amet loremlorem ipsum dolor sit amet lorem
                        </h2>
                    </div>
                    {data?.maxQuantity > 0 ? <Purchase handlePurchase={handlePurchase}/> : <div className='active:shadow-xl active:bg-wefront active:text-white border-2 w-fit p-2 m-1 text-xl text-wefront border-wefront rounded-[0.5rem] text-center'> Notify me
                    </div> }

                    <div className='flex-col flex bg-[#EBEDF0] p-4 justify-around'>
                        <h1 className="text-2xl font-semibold mx-2 mt-2 pt-2">Description</h1>
                        <Description disc={data?.description} />
                        <h1 className="text-2xl font-semibold mx-2 mt-2 pt-2">FAQ</h1>
                        <FAQ/>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Product
