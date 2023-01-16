import React from 'react'
import Checkbox from './Checkbox';

const ProductSideBar = ({ departmentSelector, setDepartmentSelector, starSelector, setStarSelector, priceSelector, setPriceSelector }) => {

    // const handleDepartmentChange = (e) => {
    //     const { value } = e.target;

    //     (departmentSelector.includes(value)) ? setDepartmentSelector(departmentSelector.filter((f) => f !== value)) : setDepartmentSelector([...departmentSelector, value])
    // }

    const handleStarChange = (e) => {
        const { value } = e.target;

        (starSelector.includes(value)) ? setStarSelector(starSelector.filter((f) => f !== value)) : setStarSelector([...starSelector, value])
        console.log(e.target)
    }

    const handlePriceChange = (e) => {
        // const { value } = e.target;
        // setPriceSelector([1,2,3])
        // (priceSelector.includes(value)) ? setPriceSelector(priceSelector.filter((f) => f !== value)) : setPriceSelector([...priceSelector, value])
        // console.log(e.target.value)
        // console.log(priceSelector)
        // console.log(e.target)
        setPriceSelector([1,2,3])
        console.log(priceSelector)

    }
   

    return (
        <div className='productsidebar' >
            {/* <h3>Department</h3>
            <Checkbox func={handleDepartmentChange} label={"Stuffed Animals & Plush Toys"} value={'stuffed'} />
            <Checkbox func={handleDepartmentChange} label={"Blind Boxes"} value={'box'} />
            <Checkbox func={handleDepartmentChange} label={"Accessories"} value={'accessories'} />
            <Checkbox func={handleDepartmentChange} label={"Limited Edition"} value={'limited'} />
            <Checkbox func={handleDepartmentChange} label={"On Sale"} value={'sale'} /> */}


            <h3>Customer Review</h3>

            <Checkbox func={handleStarChange} label={"⭐⭐⭐⭐⭐"} value={5} />
            <Checkbox func={handleStarChange} label={"⭐⭐⭐⭐"} value={4} />
            <Checkbox func={handleStarChange} label={"⭐⭐⭐"} value={3} />
            <Checkbox func={handleStarChange} label={"⭐⭐"} value={2} />
            <Checkbox func={handleStarChange} label={"⭐"} value={1} />


            <h3>Price Range</h3>
            <Checkbox func={handlePriceChange} label={"Under $10"} value={"Under $10"} />
            <Checkbox func={handlePriceChange} label={"$10 to $25"} value={"Under $25"} />
            <Checkbox func={handlePriceChange} label={"$25 to $50"} value={"$25 to $50"} />
            <Checkbox func={handlePriceChange} label={"$50 to $100"} value={"$50 to $100"} />
            <Checkbox func={handlePriceChange} label={"$100 & Above"} value={"$100 & Above"} />


        </div>
    )
}

export default ProductSideBar