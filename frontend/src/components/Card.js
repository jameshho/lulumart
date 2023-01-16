import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ obj }) => {
    const { img, username, productname, score, id, price } = obj

    const navigate = useNavigate()
    // navigate(`/productpage/${productId}`)

    return (
        <div className='card' onClick={() => navigate(`/productpage/${id}`)}>
            <img className='card-photo' src={`../images/products-img/${img}`} />
            <div className='card--bottom'>
                <img className='card--bottom--icon' src='../images/pig-tab-icon.png' />
                <div className='card--bottom--text'>
                    <h5>{productname}</h5>
                    <p>⭐ {score} (20)</p>
                    <p>{username}</p>
                    <p>$ {price}</p>
                    {/* <div className='card--addtocart'>Add to Cart</div> */}
                    <div className='card--addtocart' onClick={(e) => e.stopPropagation()}>
                        <img src='../images/shopping-cart.png' className='card--icon'
                        /></div>

                </div>
            </div>
        </div>
    )
}

export default Card