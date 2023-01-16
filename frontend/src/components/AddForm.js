import React from 'react'
import { useState } from 'react';
import { useProductsContext } from '../hooks/useProductsContext';

const AddForm = () => {

    const { dispatch } = useProductsContext()
    const itemss = useProductsContext()

    const handleSubmit = event => {
        event.preventDefault();
        // handle form submission here


        const newItem = {
            id: Math.random() * 200000,
            img: inputImg,
            productname: inputProductName,
            username: inputUsername,
            score: 4.9,
            price: inputPrice,
        }
        dispatch({ type: 'CREATE_PRODUCT', payload: newItem })

    };

    const items = ['Lulu_Student.webp', 'Fitness_Lulu.jpg', 'Wukong.webp', 'Flamingo_Floatie.jpg', 'Birthday_Cake.jpg', 'Can_of_3.jpg', 'Party_Lulu.jpg', 'Can_Of_6.jpg', 'Lulu_Sheep.jpg', 'Lulu_Lite.jpg', 'Sakura_Lulu.jpg', 'Clown_Lulu_Plush.webp', 'Delicious_Lulu_Plush.webp', 'Party_Lulu_Plush.webp', 'Sitting_Lulu_Plush.webp', 'Lulu_T_Shirt.webp', 'Lulu_Tote_Bag.webp', 'Lulu_Umbrella.webp', 'Lulu_Door_Curtain.webp', 'Lulu_Memo_Pack.webp', 'Lulu_Paper_Clips.webp', 'Lulu_3D_Magnet.webp', 'Lulu_Bee_3D_Magnet.webp']

    const [inputImg, setImg] = useState(items[+(Math.random() * items.length).toFixed()]);
    const [inputProductName, setProductName] = useState("Item Name");
    const [inputUsername, setUsername] = useState("LuluMania");
    const [inputPrice, setInputPrice] = useState(200);

    return (
        <div>
            <div className='profile--main--right--bottom'>
                <div>

                    <img src={`../images/products-img/${inputImg}`} className='product-preview' />
                </div>
                <div >
                    <h1>Add Your New Item Now</h1>

                    {/* Form */}
                    <form className="add-item-form">
                        <label>
                            <p>Product Image:</p>
                            <select
                                value={inputImg}
                                onChange={e => setImg(e.target.value)} className='add-item-input'>
                                {items.map((item, index) => <option key={index} value={item}>{item}</option>)}
                            </select>
                        </label>

                        <label>
                            <p>Item Name:</p>
                            <input
                                type="text"
                                value={inputProductName}
                                onChange={e => setProductName(e.target.value)}
                                className='add-item-input'

                            />
                        </label>
                        <label>
                            <p>Price:</p>
                            <input
                                type="number"
                                value={inputPrice}
                                onChange={e => setInputPrice(e.target.value)}
                                className='add-item-input'
                            />
                        </label>
                        <label>
                            <p>Username:</p>
                            <input
                                type="text"
                                value={inputUsername}
                                onChange={e => setUsername(e.target.value)}
                                className='add-item-input'
                            />
                        </label>


                    </form>
                    <button className="add-item-submit"
                        onClick={handleSubmit}>List Your Item</button>
                </div>
            </div >
        </div >
    )
}

export default AddForm