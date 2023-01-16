import React from 'react'
import Card from '../components/Card'
import ProductSideBar from '../components/ProductSideBar'
import { useProductsContext } from '../hooks/useProductsContext'

function getCategory(n) {
    if (n < 10) {
        return "Under $10";
    } else if (n < 25) {
        return "$10 to $25";
    } else if (n < 50) {
        return "$25 to $50";
    } else if (n < 100) {
        return "$50 to $100";
    } else {
        return "$100 & Above";
    }
}

const ProductPage = () => {

    const { products } = useProductsContext()
    const [departmentSelector, setDepartmentSelector] = React.useState([])
    const [starSelector, setStarSelector] = React.useState([])
    const [priceSelector, setPriceSelector] = React.useState([])

    if (priceSelector.length = 0) {
        const productsWithinPrice = products.map((i) => {
            return { ...i, priceCat: getCategory(i.price) }
        })
    } else {
        const productsWithinPrice = products
    }
    return (
        <div className='main'>
            <div className='sidebar'>
                <ProductSideBar
                    departmentSelector={departmentSelector}
                    setDepartmentSelector={setDepartmentSelector}
                    starSelector={starSelector}
                    setStarSelector={setStarSelector}
                    priceSelector={priceSelector}
                    setPriceSelector={setPriceSelector}

                />
            </div>

            <div className='card-container'>

                {starSelector.length === 0 ? products.map((i, index) => <Card key={index} obj={i} />) : products.reduce((prev, i, index) => {
                    // if (priceSelector.length===0){
                    //     const priceSelector = []
                    // }
                    starSelector.includes(i.score.toFixed(0)) &&
                        prev.push(<Card key={index} obj={i} />)
                    return prev
                }, [])}

            </div>

        </div>
    )

}

export default ProductPage