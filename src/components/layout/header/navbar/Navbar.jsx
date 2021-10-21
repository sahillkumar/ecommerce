import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { signOut } from "../../../auth/authHelper/authHelper";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Navbar = ({ user, dispatch }) => {
  return (
    <AppBar className="appbar" position="fixed" elevation="0">
      <Toolbar className="toolbar">
        <div className="logo-brand">
          <img src="images/main.png" className="logo" alt="Organikart" />
          <div className="brand">OrganiKart</div>
        </div>
        <div className="appbar-nav">
          <div className="nav-link">
            <NavLink to="/home" activeClassName="active" className="link">
              <span>Home</span>
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/shop" activeClassName="active" className="link">
              <span>Shop</span>
            </NavLink>
          </div>
          {user ? (
            <>
              <div className="nav-link">
                <NavLink
                  exact
                  to="/account"
                  activeClassName="active"
                  className="link"
                >
                  <span>Profile</span>
                </NavLink>
              </div>
              
              <div className="nav-link">
                <NavLink
                  exact
                  to="/wishlist"
                  activeClassName="active"
                  className="link"
                >
                  <span>Wishlist</span>
                </NavLink>
              </div>
              <div className="nav-link">
                <NavLink
                  exact
                  to="/cart"
                  activeClassName="active"
                  className="link"
                >
                  <span>Cart</span>
                </NavLink>
              </div>
              
              <div className="nav-link">
                <NavLink
                  to="/home"
                  onClick={() => {
                    signOut();
                    dispatch({
                      type: "user",
                      user: null,
                    });
                  }}
                  activeClassName="active"
                  className="link"
                >
                  <span>Logout</span>
                </NavLink>
              </div>
            </>
          ) : (
            <div className="nav-link">
              <NavLink to="/auth" className="link" activeClassName="active">
                Register / Login
              </NavLink>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

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
