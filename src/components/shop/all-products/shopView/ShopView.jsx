import React, { useContext, useEffect, useState } from 'react'
import { byNumber, byValue } from 'sort-es'
import { DataContext } from '../../../../context'
import useFirestore from '../../../../firebase/useFirestore'
import Search from '../../search/Search'
import { getAllSortedProducts, getProductsByCategory } from '../../shopHelper/shopHelper'
import Products from '../products/Products'

const ShopView = ({products}) => {
   
    const [prods,setProds] = useState(products)
    
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
