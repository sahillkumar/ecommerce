import React from 'react'
import '../auth/authComp/auth.css'

const EmailSent = ({children}) =>{
     return (
         <div >
             <p className="emailsent">
                { children }
             </p>
         </div>
     )
}

export default EmailSent