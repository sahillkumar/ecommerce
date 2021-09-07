import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import CssTextField from '../../Reusable Components/CssTextField'
import EmailSent from '../../Reusable Components/EmailSent'
import ErrorMessage from '../../Reusable Components/ErrorMessage'
import { forgotPass } from '../authHelper/authHelper'
import DoneAllIcon from '@material-ui/icons/DoneAll';

const ForgotPass = () => {

     const [email, setEmail] = useState('')
     const [error, setError] = useState(false)
     const [emailSent, setEmailSent] = useState(false)

     const handleSubmit = email => (e) =>{
          e.preventDefault()
          forgotPass(email,setEmail,setEmailSent,setError)
     }

     const handleChange = ({target:{value}}) =>{
          setEmail(value)
          setError('')
     }

     return (
     <div className="auth-container">
          <img src="/images/ss.jpg" className="flut"/>
          <div className="paper-fp">
               <h3 className="label">OrganiKart</h3>
               <form onSubmit={handleSubmit(email)}>
               <ErrorMessage error={error}/>
               {
               emailSent ? 
                    <EmailSent>
                        <span className="box">Password reset link sent  
                              <DoneAllIcon fontSize="large" className="senticon"/>
                         </span>
                    </EmailSent>
               : <> 
                    <CssTextField
                         margin="normal"
                         id="email"
                         label="Email"
                         type="email"
                         value={email}
                         fullWidth
                         variant="outlined"
                         required
                         onChange={handleChange}
                         autoFocus
                         />
                    <Button    
                         type="submit" 
                         margin="normal"
                         variant="contained"
                         color="primary"
                         className="btn-auth"
                         style={{marginBottom:'10px'}}
                    >
                    Send Password Reset Link
                  </Button>
               </>
               }
               </form>
               </div>
          </div>
     )
}

export default ForgotPass
