import React,{useEffect,useState} from 'react';
import { AppBar,Button,makeStyles,Toolbar,Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import SignIn from './signinModal';

const headerDiv = {
  marginLeft:"59%"
}

const style={
    padding:"8px 10px ",
    marginLeft:"4px",
    display:" inline-block",
    cursor:'pointer',
    fontSize:'12px',
    fontWeight:"600",
    backgroundColor:"whitesmoke",
    color:"black",
    borderRadius: "20px"
}

const toolbarStyle = {
    display:"absolute",
    color:'white',
    padding: "5px 10px",
    width:"10%",
    fontWeight:'500',
    fontFamily: "Arrows",
    transform:"translate(-70%,84%)",
    fontSize:'1em'
}

const app = makeStyles(theme=>({
  appbarBefore:{
    backdropFilter:'blur(0px)',
    height:75,
  },
  appbarAfter:{
   backdropFilter:'blur(10px)',
   height:75,
  }
}))
const Header = () => {
  const classes= app();
  const [appbarDesign, setappbarDesign] = useState('appbarBefore')

  const appbarRef= React.useRef();
  appbarRef.current=appbarDesign

  useEffect(() => {

    const handleScoll=()=>{
      const height = window.scrollY>310;
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
          <img src="images/tree.svg" width="120"/>
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