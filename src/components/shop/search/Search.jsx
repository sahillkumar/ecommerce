import React from 'react'
import Filters from '../filters/Filters'
import './search.css'

const Search = ({setProds,allproducts,currentProds}) => {

    return (
        <div className="search">
            <div >
                <input 
                    type="text" 
                    className="search-bar"
                    placeholder="Search For Products..."
                />
            </div>
            <Filters setProds={setProds} allproducts={allproducts} currentProds={currentProds}/>
        </div>
    )
}




export default Search
