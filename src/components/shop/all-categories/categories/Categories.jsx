import React from 'react'
import CategoryCard from '../categoryCard/CategoryCard'
import './categories.css'

const ShopView = ({categories}) => {
    return(
        <div className="shop-by-cat">
            {
                categories && categories.map((category,index)=>
                    <CategoryCard key={index} category={category}/>
            )}
        </div>
    )      
}

export default ShopView
