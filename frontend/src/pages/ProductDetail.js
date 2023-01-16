import React from 'react'
import { useState } from 'react'
import { useProductsContext } from '../hooks/useProductsContext'
import { useLocation } from "react-router-dom";



const ProductDetail = () => {
  const location = useLocation();

  const productId = location.pathname.split("/")[2];
  
  const [quantity, setQuantity] = useState(0)
  const { products } = useProductsContext()
  
  const {img, productname,score,username,price,id} = products.find(i=>i.id ==productId)
  return (
    <div className='detail--main'>
      <></>
      <img className='detail--img' src={`../images/products-img/${img}`} />
      <></>
      <div className="detail--main--right">
        <h1 className='datail--name'>{productname}</h1>
        <p className='detail--review--container'>Rating {score}⭐</p>
        <p className=''>{username}</p>
        <p className=''>$ {price}</p>
        <div className='detail--button--container'>

          <div onClick={() => setQuantity(p => p - 1)} className='detail--button--switch'>-</div>
          <div>{quantity}</div>
      
          <div onClick={() => setQuantity(p => p + 1)} className='detail--button--switch'>+</div>
        </div>
        <div className='detail--add--button' onClick={() => setQuantity(0)}>Add to Cart</div>
      </div>
    </div>


  )
}

export default ProductDetail