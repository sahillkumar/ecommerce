import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Search from '../../search/Search'
import ProductCard from '../productCard/ProductCard'
import './products.css'


const Products = ({products,category}) => {
    console.log(products);
    return (
        <>  
            <div className="search-comp">
                <Search/>
            </div>
            <div className="products">
                {
                    products && products.map((product,index)=>(
                        <ProductCard key={index} product={product}/>
                    ))
                }
            </div>
        </>
       
    )
}

export default withRouter(Products) 
