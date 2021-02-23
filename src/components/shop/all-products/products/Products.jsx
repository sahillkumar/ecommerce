import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Search from '../../search/Search'
import ProductCard from '../productCard/ProductCard'
import './products.css'


const Products = ({products}) => {
const [filter, setFilter] = useState(null)
const [prods,setProds] = useState(products)

useEffect(() => {
        products = filter != null || filter == {}? products.filter(prod=>{
            for(var key in filter){
                if(prod[key]===undefined || filter[key] === undefined ||  prod[key].title != filter[key]) {
                    return false;
                }  
            }       
            return true;
        }
        ) : products 
    setProds(products)
}, [filter])
// console.log(products);
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
