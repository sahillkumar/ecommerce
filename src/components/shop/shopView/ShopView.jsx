import React from 'react'
import './shopview.css'
import {categories} from '../../../shared/store.json'
import Category from '../../SellByCategories/category/Category'

const ShopView = () => {
    return(
        <div className="shop-by-cat">
            {
                 categories && categories.map((category,index)=>
                    <Category key={index} category={category}/>
            )}
        </div>
    )      
}

export default ShopView
