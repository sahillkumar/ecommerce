import React,{useEffect,useState} from 'react';
import { AppBar,Button,Toolbar,Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import SignIn from './signinModal';

const style={
    padding: "20px 30px",
    textAlign: "center",
    textDecoration: "none",
    display:" inline-block",
    cursor:'pointer',
    color:'black'
}

const Header = () => {

    return ( 
      <>
        <AppBar color="transparent" position="static">
          <Toolbar style={{height:'100%'}} >
            <Typography variant="h6" style={{ flex:1}}>
              social media icons
            </Typography>
          </Toolbar>
        </AppBar>
        <AppBar color="transparent" position="sticky">
        <Toolbar >
          <Typography variant="h6" style={{ flex:1}}>
            Our Luvly Organ!Kraft 
          </Typography>
            <Link to="/"><div style={style}>HOME</div></Link>
            <Link to="/about"><div style={style}>ABOUT</div></Link>
            <Link to="/shop"><div style={style}>SHOP</div></Link>
            <Link to="/contact"><div style={style}>CONTACT</div></Link>
            <SignIn style={style}/>
          </Toolbar>
        </AppBar>
      </>
     );
}
 
export default Header;