import React from 'react'
import {categories} from '../../../../shared/store.json'
import CategoryCard from '../categoryCard/CategoryCard'
import './categories.css'

const ShopView = () => {
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
