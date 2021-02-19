import React from 'react';
import { AppBar,Toolbar} from '@material-ui/core';
import './navbar.css'
import { NavLink } from 'react-router-dom';



const Navbar = () => {

    return ( 
        <AppBar className="appbar" position="fixed">
          <Toolbar className="toolbar">
            <div className="logo-brand">
              <img src="images/tree.svg" className="logo" alt="organikart"/>
              <div className="brand">OrganiKart</div>
            </div>
            <div className="appbar-nav">
              <NavLink to="/">
                <div className="nav-link">Home</div>
              </NavLink>
              <NavLink to="/shop">
                <div className="nav-link">Shop</div>
              </NavLink>
              <NavLink to="/about">
                <div className="nav-link">About</div>
              </NavLink>
              <NavLink to="/contact">
                <div className="nav-link">Contact</div>
              </NavLink>
              <button>
                Signup or Logout
              </button>
            </div>
          </Toolbar>
        </AppBar>
    
     );
}
 
export default Navbar;


// const classes= app();
  // const [appbarDesign, setappbarDesign] = useState('appbarBefore')

  // const appbarRef= React.useRef();
  // appbarRef.current=appbarDesign

  // useEffect(() => {

  //   const handleScoll=()=>{
  //     const height = window.scrollY>310;
  //     if(height){
  //       setappbarDesign('appbarAfter')
  //     }
  //     else{
  //       setappbarDesign('appbarBefore')
  //     }
  //   }

  //   document.addEventListener('scroll',handleScoll)

  // })

  
// const toolbarStyle = {
//     display:"absolute",
//     color:'white',
//     padding: "5px 10px",
//     width:"10%",
//    
//    
//     fontSize:'1em'
// }

// const app = makeStyles(theme=>({
//   appbarBefore:{
//     backdropFilter:'blur(0px)',
//     height:75,
//   },
//   appbarAfter:{
//    backdropFilter:'blur(10px)',
//    height:75,
//   }
// }))
