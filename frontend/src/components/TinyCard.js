import React from 'react'

const TinyCard = ({obj}) => {
    const img = obj.img
    const score = obj.score
    const productname = obj.productname
    return (
        <div className='tinycard'>
            <img className='tinycard-photo' src={`../images/products-img/${img}`} />
            <div className='tinycard--star-container'>

                <img src='../images/star-png.png' className='tinycard--star' />
               <p> ({score})</p>
           
            </div>

            <p className='tinycard--text'>{productname}</p>
        </div>
    )
}

export default TinyCard