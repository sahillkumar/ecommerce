import React,{useEffect,useState} from 'react';
import { AppBar,Button,Toolbar,Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import SignIn from './signinModal';

const headerDiv = {
  marginLeft:"63%"
}

const style={
    backgroundColor:"#eceff1",
    borderRadius:"30px",
    marginRight:"5px",
    padding: "10px 15px",
    textAlign: "center",
    textDecoration: "none",
    display:" inline-block",
    cursor:'pointer',
    color:'black',
    fontSize:'12px',
    fontWeight:"600"

}

const toolbarStyle = {
    backgroundColor:"#3FDEC9",
    color:'white',
    borderRadius:"30px",
    padding: "5px 10px",
    width:"10%",
    fontWeight:'500',
    fontFamily: "Arrows"

}

const Header = () => {

    return ( 
      <> 
       
        <AppBar color="transparent" elevation="-1">
        <Toolbar >
          <Typography variant="h6" style={toolbarStyle}>
            Organikart 
          </Typography>
            <div style={headerDiv}>
            <Link to="/"><div style={style}>HOME</div></Link>
            <Link to="/about"><div style={style}>ABOUT</div></Link>
            <Link to="/shop"><div style={style}>SHOP</div></Link>
            <Link to="/contact"><div style={style}>CONTACT</div></Link>
            </div>
            <SignIn style={style}/>
          </Toolbar>
        </AppBar>
      </>
     );
}
 
export default Header;