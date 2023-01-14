import React from 'react'

const Card = ({ obj}) => {
    const {img,username,productname,score} = obj
    return (
        <div className='card'>
            <img className='card-photo' src={`../images/${img}`} />
            <div className='card--bottom'>
                <img className='card--bottom--icon' src='../images/pig-tab-icon.png' />
                <div className='card--bottom--text'>
                    <p>{productname}</p>
                    <p>⭐ {score} (20)</p>
                    <p>{username}</p>
                </div>
            </div>
        </div>
    )
}

export default Card