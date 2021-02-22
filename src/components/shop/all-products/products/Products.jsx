import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Search from '../../search/Search'
import ProductCard from '../productCard/ProductCard'
import './products.css'


const Products = ({products}) => {
const [filter, setFilter] = useState(null)
console.log("filter ",filter);

const [prods,setProds] = useState(products)


useEffect(() => {
        products = filter != null ? products.filter(prod=>{
            for(var key in filter){
                if(prod[key]===undefined ||  prod[key] != filter[key]) {
                    return false;
                }  
            }       
            return true;
        }
        ) : products 

    setProds(products)
}, [filter])

    return (
        <>  
            <div className="search-comp">
                <Search setFilter={setFilter} filter={filter}/>
            </div>
            <div className="products">
                {
                    prods && prods.map((product,index)=>(
                        <ProductCard key={index} product={product}/>
                    ))
                }
            </div>
        </>
       
    )
}

export default withRouter(Products) 
