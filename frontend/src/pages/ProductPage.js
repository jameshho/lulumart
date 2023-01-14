import React from 'react'
import Card from '../components/Card'
import ProductSideBar from '../components/ProductSideBar'
import { useProductsContext } from '../hooks/useProductsContext'

const ProductPage = () => {

    const {productsData} = useProductsContext()

    return (
        <div className='main'>
            <div className='sidebar'>
                <ProductSideBar />


            </div>



            <div className='card-container'>
                {productsData.map((obj,index) => {
                    return <Card key={index} obj ={obj} />
                })}
            </div>

        </div>
    )

}

export default ProductPage