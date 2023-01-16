import React from 'react'
import { useProductsContext } from '../hooks/useProductsContext'
import { useState } from 'react'
import CartBasket from '../components/CartBasket'

const Cart = () => {

  const { products } = useProductsContext()
  const { img, productname, score, username, price } = products[0]
  const [quantity, setQuantity] = useState(0)

  return (
    <div className="cart--grid">
      <div></div>
      <div className='cart'>
        <div className='shopping--header'>
          <h1>Shopping Cart</h1>
          <p>Price</p>
        </div>
        <CartBasket />
        <CartBasket />
        <div>
          <p className='cart--subtotal'>
            {'Subtotal (1 item):$352'}
          </p>
          <p className='cart--checkout'>Proceed to Checkout</p>
        </div>
      </div>
    </div>

  )
}

export default Cart