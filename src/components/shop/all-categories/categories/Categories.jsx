import React, { useEffect } from 'react'
import useFirestore from '../../../../firebase/useFirestore'
import CategoryCard from '../categoryCard/CategoryCard'
import './categories.css'

const ShopView = ({categories,setProducts}) => {
    const products = useFirestore('products')
    if(products){
        console.log(products.map(prod=>prod.category))
    }

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
