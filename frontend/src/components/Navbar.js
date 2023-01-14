import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='nav'>

            <NavLink to="/"><img src='../images/website-logo.png' className='website-logo' /></NavLink>
            <input type="text" placeholder='Search' className='search' />
            <NavLink to="/signin" className='nav--item'>Sign in </NavLink>
            <NavLink to="/profile" className="nav--item">Profile</NavLink>
            <NavLink to="/productpage" className="nav--item">Product</NavLink>
            <NavLink to="/cart" className="nav--item">Cart</NavLink>
            <NavLink to="/productdetail" className="nav--item">Product Detail</NavLink>
        </nav>
    )
}

export default Navbar