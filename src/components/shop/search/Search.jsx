import React from 'react'
import Filters from '../filters/Filters'
import './search.css'

const Search = () => {

    return (
        <div className="search">
            <div >
                <input 
                    type="text" 
                    className="search-bar"
                    placeholder="Search For Products..."
                />
            </div>
            <Filters/>
        </div>
    )
}




export default Search
