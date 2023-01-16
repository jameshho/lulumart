import React, { useState } from 'react'
import { useProductsContext } from '../hooks/useProductsContext'
import TinyCard from '../components/TinyCard'
import AddForm from '../components/AddForm'

const Profile = () => {

  const { products } = useProductsContext()

  const tinyCards = products.reduce((prev, i) => {
    if (i.username == 'LuluMania') {
      prev.push(<TinyCard obj={i} key={i.id} />)

    }
    return prev
  }
    , [])


  return (
    <div className='profile--main'>
      <div className='profile--sidebar'>
        <img src='../images/profile-picture.jpg' className='profile--picture' />
        <h1>LuluMania</h1>
        <h4>Huge Lulu Fans</h4>
        <p>Member since 2020</p>
        <p>Avg. Rating: 5.0 (20)</p>
      </div>

      <div className='profile--main--right'>

        <h2 className='profile--main--right--top'>Your Products:</h2>
        <div className='tinycard-container'>
          {tinyCards}

        </div>
    
        <AddForm />


      </div>
    </div >
  )
}

export default Profile