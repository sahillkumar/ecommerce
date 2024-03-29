import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Search from '../../search/Search'
import ProductCard from '../productCard/ProductCard'
import './products.css'


const Products = ({prods,user}) => {

 

    return (
        <>  
            <div className="products">
                {
                    prods ? prods.map((product,index)=>(
                        <ProductCard key={index} product={product} user={user} />
                    )) : <h1>loading....</h1>
                    
                }
            </div>
        </>
       
    )
}

export default withRouter(Products) 
