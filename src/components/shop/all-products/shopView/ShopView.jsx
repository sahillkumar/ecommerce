import React, { useEffect, useState } from 'react'
import { byNumber, byValue } from 'sort-es'
import Search from '../../search/Search'
import { getAllSortedProducts, getProductsByCategory } from '../../shopHelper/shopHelper'
import Products from '../products/Products'

const ShopView = ({products}) => {

    const [prods,setProds] = useState(products)

    console.log('prods ',prods);
    return (
        <div>
            <div className="search-comp">
                <Search  setProds={setProds} allproducts={products} currentProds={prods}/>
            </div>
            <Products prods={prods}/>
        </div>
    )
}

export default ShopView
