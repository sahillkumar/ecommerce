import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props)
    }
    
    
    render(){
       const searchBar = ()=>{
           return(
               <div>
                   <input type = 'text' placeholder='Search items'/>
               </div>
           )
       }
       return(
           <div style={{height:'70px', width:'250px'}}>{searchBar}</div>
       )
    }
}

export default Search;
