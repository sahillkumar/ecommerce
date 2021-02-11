import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Product from './Product'
import './products.css'


const Products = ({products,category}) => {
    console.log(products);
    return (
        <div className="shop-by-cat">
            {
                 products && products.map((product,index)=>(
                    <Product key={index} product={product}/>
                ))
            }
        </div>
       
    )
}

export default withRouter(Products) 
