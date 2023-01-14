import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
           <h1 className='home--title'>Welcome to the World of Lulu!</h1>
            <img src='../images/main-page-lulu.webp' className='home--img'/>
            <h2 className='home--text'>Check out our lastest merch</h2>
            <NavLink to="/productpage" className="home--button">Shop Now!</NavLink>
       
        </div>
    )
}

export default Home