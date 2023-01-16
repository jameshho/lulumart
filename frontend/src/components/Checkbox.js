import React from 'react'

const Checkbox = ({func,label,value}) => {
    return (

        <div className='productsidebar--star--container'>
            <input
                type="checkbox"
                value={value}
                onChange={func}
            />
            <div>{label}</div>
        </div>
    )
}

export default Checkbox