import React from 'react'
import Filters from '../filters/Filters'
import './search.css'

const Search = ({setFilter,filter}) => {

    return (
        <div className="search">
            <div >
                <input 
                    type="text" 
                    className="search-bar"
                    placeholder="Search For Products..."
                />
            </div>
            <Filters setFilter ={setFilter} filter={filter}/>
        </div>
    )
}




export default Search
