import React from 'react';
import { AppBar,Toolbar} from '@material-ui/core';
import './navbar.css'
import { NavLink } from 'react-router-dom';
import { signOut } from '../../../auth/authHelper/authHelper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const Navbar = ({user,dispatch}) => {

    return ( 
        <AppBar className="appbar" position="fixed" elevation="0">
          <Toolbar className="toolbar" >
            <div className="logo-brand">
              <img src="images/tree.svg" className="logo" alt="organikart"/>
              <div className="brand">OrganiKart</div>
            </div>
            <div className="appbar-nav">
              <div className="nav-link">
                <NavLink to="/home" activeClassName="active" className="link">
                  Home
                </NavLink>
              </div>
              <div className="nav-link">
                <NavLink to="/shop" activeClassName="active" className="link"> 
                  Shop
                </NavLink>
              </div>
              {
                  user ? 
                  (
                    <>
                      <div className="nav-link">
                        <NavLink to="/shop/cart" activeClassName="active" className="link"> 
                          Cart
                        </NavLink>
                      </div>
                      <div className="nav-link">
                        <NavLink to="/home" activeClassName="active" className="link"> 
                          <AccountCircleIcon fontSize="large" />
                        </NavLink>
                      </div>
                      <div className="nav-link">
                        <NavLink to="#" onClick={()=>
                          {signOut()
                          dispatch({
                            type:'user',user:null
                          })
                          }} 
                          className="link"> 
                          Logout
                        </NavLink>
                      </div> 
                    </>
                  ) : (
                    <div className="nav-link" >
                      <NavLink to="/auth" className="link"> 
                        Register / Login
                      </NavLink>
                  </div> 
                  )
              }
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
