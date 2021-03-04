import {Button, TextField, FormGroup, Tabs,Tab, Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import './auth.css'
import { logIn, signUp } from '../authHelper/authHelper';
import TabPanel from '../../Reusable Components/TabPanel';


const Auth = () => {

  const [error, setError] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [value, setValue] = useState(0)

  //setForm
  const [form, setForm] = useState({
     name:'',
     email:'',
     password:''
  })

  const { name,email,password} = form

  //handleTabChange
  const handleChange=name=>({target:{value}})=>{
   setError(false)
   setForm({
     ...form,
     [name]:value
   })
  }

 //handleSubmit
  const signUpSubmit = (email,password) => (e) =>{
   e.preventDefault()
   signUp(email,password,setEmailSent,setError,setForm)
  }

  const logInSubmit = (email,password) => (e) =>{
    e.preventDefault()
    logIn(email,password,setError,setForm)
   }

 //Comp EmailSent
  const EmailSent = () =>{
   return (
       <div className="emailsent" color="#4caf50">
         <p>
           Verification email sent <DoneAllIcon color="secondary"/><br/>
           Please verify your email before signing In..
         </p>
       </div>
   )
  }

 //Comp ErrorMess
  const ErrorMessage = () =>{
   return(
     error &&
       <div className="errorfromMail">
         <p>{error}</p>
       </div>
   )
  }

  //handleTabchage
  const handleTabChange = (e,val) =>{  
    setValue(val)
    setForm({
      name:'',
      email:'',
      password:''
    })
    setEmailSent(false)
  }

  return (
     <div className="auth-container">
          <div className="backdrop">
     <div className="paper">
      <Tabs value={value} onChange={handleTabChange} className="auth-tabs" centered indicatorColor="primary">
        <Tab label="Register" className="auth-tab"/>
        <Tab label="Login" className="auth-tab"/>
      </Tabs>
      <TabPanel index={0} value={value}>
        
        <form onSubmit={signUpSubmit(email,password)}>
          <ErrorMessage />
          {
            emailSent ? 
              <EmailSent/> 
            :  <> 
              <TextField 
                autoFocus
                required
                margin="normal"
                id="name"
                value={name}
                label="Name"
                type="Name"
                fullWidth
                variant="outlined"
                onChange={handleChange('name')}
                inputProps={{
                     className:'input'
                }}
                color="text.main"
              /> 
              <TextField
                margin="normal"
                id="email"
                label="Email"
                type="email"
                name={email}
                variant="outlined"
                fullWidth
                required
                onChange={handleChange('email')}
                inputProps={{
                    className:'input'
               }}
              />
              <TextField
                margin="normal"
                id="password"
                label="Password"
                type="password"
                value={password}
                fullWidth
                required
                variant="outlined"
                onChange={handleChange('password')}
                inputProps={{
                    className:'input'
               }}
              />
              <Button    
                type="submit" 
                margin="normal"
                variant="contained"
                color="primary"
                className="btn-auth"
              >
                Register
              </Button>
            </>
          }
        </form>
      </TabPanel>
      <TabPanel index={1} value={value}>
        <form onSubmit={logInSubmit(email,password)}>
          <ErrorMessage />
          <TextField
               margin="normal"
               id="email"
               label="Email"
               type="email"
               name={email}
               fullWidth
               variant="outlined"
               required
               inputProps={{
                    className:'input'
               }}
               onChange={handleChange('email')}
               autoFocus
          />
          <TextField
               margin="normal"
               id="password"
               label="Password"
               type="password"
               value={password}
               variant="outlined"
               fullWidth
               required
               onChange={handleChange('password')}
               inputProps={{
                    className:'input'
               }}
          />
          <Button    
                type="submit" 
                margin="normal"
                color="primary"
                variant="contained"
                className="btn-auth"
              >
                Login
              </Button>
        </form>
        <span className="forgotpass">
            <a href="/home">Forgot Password ? </a> 
        </span>
    
      </TabPanel>
      </div>
      </div>
      </div>
  )
}

export default Auth

