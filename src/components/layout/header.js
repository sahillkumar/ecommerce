import React,{useEffect,useState} from 'react';
import { AppBar,Button,Link,Toolbar,Typography} from '@material-ui/core';
import SignIn from './signinModal';


const Header = () => {

    return ( 
      <>
        <AppBar color="transparent" position="static">
          <Toolbar >
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
            <Link href="https://material-ui.com/components/links/#third-party-routing-library" >
            <Button> Link </Button></Link>
            <Link href="#" >
            <Button> here </Button></Link>
            <Link href="#" >
            <Button> there </Button></Link>
            <SignIn/>
          </Toolbar>
        </AppBar>
      </>
     );
}
 
export default Header;