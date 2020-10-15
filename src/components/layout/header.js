import React,{useEffect,useState} from 'react';
import { AppBar,Button,makeStyles,Toolbar,Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import SignIn from './signinModal';

const headerDiv = {
  marginLeft:"63%"
}

const style={
    marginRight:"5px",
    padding: "10px 15px",
    textAlign: "center",
    textDecoration: "none",
    display:" inline-block",
    cursor:'pointer',
    color:'white',
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

const app = makeStyles(theme=>({
  appbarBefore:{
    backdropFilter:'blur(0px)',
    height:200,
    backgroundColor:'yellow'
  },
  appbarAfter:{
   backdropFilter:'blur(10px)',
   height:100,
   background:'teal'
  }
}))
const Header = () => {
  const classes= app();
  const [appbarDesign, setappbarDesign] = useState('appbarBefore')

  const appbarRef= React.useRef();
  appbarRef.current=appbarDesign

  useEffect(() => {

    const handleScoll=()=>{
      const height = window.scrollY>320;
      if(height){
        setappbarDesign('appbarAfter')
      }
      else{
        setappbarDesign('appbarBefore')
      }
    }

    document.addEventListener('scroll',handleScoll)

  })

    return ( 
      <> 
        <AppBar color="transparent" elevation="0" className={classes[appbarRef.current]}>
        <Toolbar>
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