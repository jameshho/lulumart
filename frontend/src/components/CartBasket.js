import React from 'react'
import { useState } from 'react'
import { useProductsContext } from '../hooks/useProductsContext'



const CartBasket = () => {
    const { products } = useProductsContext()
    const { img, productname, score, username, price } = products[0]
    const [quantity, setQuantity] = useState(1)

    const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (

        <div className='cart--container'>
            <img src='../images/products-img/Fitness_Lulu.jpg' className='cart--img' />
            <div className='cart--container--right'>
                <h1>{productname}</h1>
                <p>⭐{score}</p>
                <p>{username}</p>
                <p className='cart--container--price'>$ {price}</p>
                <label>
                    <p>Qty:</p>
                    <select
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                        className=''
                    >
                        {items.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                </label>

            </div>
            <div>

            </div>
        </div>
    )
}

export default CartBasket