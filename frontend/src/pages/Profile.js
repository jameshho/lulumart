import React, { useState } from 'react'
import Card from '../components/Card'
import { useProductsContext } from '../hooks/useProductsContext'
import TinyCard from '../components/TinyCard'

const Profile = () => {

  const { productsData } = useProductsContext()

  const tinyCards = productsData.map((i) => {
    return <TinyCard obj={i} />
  })




  const [inputImg, setImg] = useState("");
  const [inputProductName, setProductName] = useState("");
  const [inputUsername, setUsername] = useState("LuluMania");



  const handleSubmit = event => {
    event.preventDefault();
    // handle form submission here
  };


  return (
    <div className='profile--main'>
      <div className='profile--sidebar'>
        <img src='..\images\profile-picture.jpg' className='profile--picture' />
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
        <div className='profile--main--right--bottom'>
          <div>
            <p>
              Product Img Preview
            </p>
          </div>
          <div className="add-item-form">

            <h1>Add Your New Item Now</h1>

            <form  >
              <p>   Product Image:</p>
              <input

                type="text"
                value={inputImg}
                onChange={e => setImg(e.target.value)}
                className='add-item-input'
              />

              <p>   Product Name:</p>
              <input
                type="text"
                value={inputProductName}
                onChange={e => setProductName(e.target.value)}
                className='add-item-input'
              />
              <p>   Username:</p>
              <input
                type="text"
                value={inputUsername}
                onChange={e => setUsername(e.target.value)}
                className='add-item-input'
              />



            </form>
            <button className="add-item-submit"
              onClick={handleSubmit}>List Your Item</button>
          </div>

        </div>

      </div>
    </div >
  )
}

export default Profile