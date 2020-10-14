import React,{useEffect,useState} from 'react';
import { AppBar,Button,Toolbar,Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import SignIn from './signinModal';

const headerDiv = {
  marginLeft:"68%"
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

const Header = () => {

    return ( 
      <>
        
        <AppBar color="transparent" position="sticky">
        <Toolbar >
          <Typography variant="h6" style={{ flex:0}}>
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