import {Button, Tabs,Tab } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import './auth.css'
import { logIn, signUp } from '../authHelper/authHelper';
import TabPanel from '../../Reusable Components/TabPanel';
import CssTextField from '../../Reusable Components/CssTextField';
import { Link, useHistory } from 'react-router-dom';
import EmailSent from '../../Reusable Components/EmailSent';
import ErrorMessage from '../../Reusable Components/ErrorMessage';
import { DataContext } from '../../../context';


const Auth = () => {

  const [error, setError] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [value, setValue] = useState(0)
  const {dispatch,user} = useContext(DataContext)
  let history = useHistory()
  
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
   //console.log(value)
   setForm({
     ...form,
     [name]:value
   })
  }

 //handleSubmit
  const signUpSubmit = (email,password,name) => (e) =>{
   e.preventDefault()
   signUp(email,password,name,setEmailSent,setError,setForm)
  }

  const logInSubmit = (email,password) => (e) =>{
    e.preventDefault()
    logIn(email,password,setError,setForm,dispatch)
    document.title = 'Shop';
   
   }

   useEffect(() => {
    if(user){
      history.push('/shop')
    }
   }, [user])


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
    <>
    
    <div className="auth-container">
    <img src="/images/ss.jpg" className="flut"/>
      <div className="paper">
        <Tabs 
          value={value} 
          onChange={handleTabChange} 
          className="auth-tabs" 
          indicatorColor="primary"
          textColor="primary"
          centered 
          TabIndicatorProps={{
            style:{
              height:0.7
            }
        }}>
          <Tab label="Register" className="auth-tab"/>
          <Tab label="Login" className="auth-tab"/>
        </Tabs>
        <TabPanel index={0} value={value}>
          <form onSubmit={signUpSubmit(email,password,name)}>
            <ErrorMessage error={error}/>
            {
              emailSent ? 
                <EmailSent>
                    <span className="box">Verification email sent  
                      <DoneAllIcon fontSize="large" className="senticon"/>
                    </span>
                </EmailSent>
              : <> 
                  <CssTextField 
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
                  /> 
                  <CssTextField
                    margin="normal"
                    id="email"
                    label="Email"
                    type="email"
                    value={email}
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleChange('email')}
                  />
                  <CssTextField
                    margin="normal"
                    id="password"
                    label="Password"
                    type="password"
                    value={password}
                    fullWidth
                    required
                    variant="outlined"
                    onChange={handleChange('password')}
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
            <ErrorMessage error={error}/>
              <CssTextField
               margin="normal"
               id="email"
               label="Email"
               type="email"
               value={email}
               fullWidth
               variant="outlined"
               required
               onChange={handleChange('email')}
               autoFocus
            />
            <CssTextField
               margin="normal"
               id="password"
               label="Password"
               type="password"
               value={password}
               variant="outlined"
               fullWidth
               required
               onChange={handleChange('password')}
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
            <Link to="/auth/forgotpassword">Forgot Password ? </Link>
          </span>
        </TabPanel>
      </div>
    </div>
  </>
  )
}

export default Auth

