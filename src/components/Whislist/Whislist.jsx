import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons/faHeartCirclePlus'
import WhisListCard from './Card/WhisListCard'
function Wishlist () {
  const [temp,setTemp] = useState([
      {
      id: 3,
      name: 'Mazza Bappa Morya',
      price: 2400,
      type: 'Shadu Soil clay',
      quantity: 1,
      maxQuantity: 5,
          productImages:   [
              "/images/of2Fcd9K-l/of2Fcd9K-l_1.jpeg",
          "/images/of2Fcd9K-l/of2Fcd9K-l_2.jpeg"
  ]
    }, {
      id: 4,
      name: 'Mazza Bappa Morya',
      price: 1400,
      type: 'Shadu Soil clay',
      quantity: 1,
      maxQuantity: 4,
          productImages:   [
              "/images/of2Fcd9K-l/of2Fcd9K-l_1.jpeg",
              "/images/of2Fcd9K-l/of2Fcd9K-l_2.jpeg"
          ]
    }, {
      id: 6,
      name: 'Mazza Bappa Morya',
      price: 3000,
      type: 'Shadu Soil clay',
      quantity: 1,
      maxQuantity: 3,
          productImages:   [
              "/images/of2Fcd9K-l/of2Fcd9K-l_1.jpeg",
              "/images/of2Fcd9K-l/of2Fcd9K-l_2.jpeg"
          ]
    }]);

  function handleDelete(id){
    setTemp(items => items.filter(item => item.id !== id));
  }
  
  return (
    <>
      <div className='text-white m-2 '>
        <div className='bg-wefront text-xl flex justify-center items-center py-3 '>
          <FontAwesomeIcon icon={faHeartCirclePlus} className='text-2xl px-1' />
          <h3 className='px-2'>MY WISH-LIST</h3>
        </div>
        <div className='h-fit p-[1%]'>
          {temp.map((temp, index) => <WhisListCard key={index} data = {temp} deleteItem = {handleDelete}/>)}
        </div>
      </div>
    </>
  )
}

export default Wishlist
