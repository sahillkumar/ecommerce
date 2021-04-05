import React from 'react'

const ErrorMessage = ({error}) =>{
     return(
       error &&
         <div className="errorMessage">
           <p>{error}</p>
         </div>
     )
}

export default ErrorMessage