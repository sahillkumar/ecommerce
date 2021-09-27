import React, {useState} from 'react';
import { Button, Grid, Paper } from "@material-ui/core";
import './userProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingBag ,faUser, faShoppingCart, faAddressCard, faCaretRight} from '@fortawesome/free-solid-svg-icons'
import PersonalDetails from './personalDetails/personalDetails';
import UserOrders from './userOrders/userOrders';


const UserProfile = () =>{

    const [viewItem, setViewItem] = useState({
        1:true,
        2:false,
    });

    return(
       <Grid container className = 'userProfileContainer fade-in'>
           <Grid item xs = {3} className = 'leftPaneUserProfile'  >
            <div className = {`userLeftPane-item activeItem-${viewItem[1]}`}
                onClick = {() =>{
                    setViewItem({
                        1:true,
                        2:false,
                    })
                }}
            >
                <FontAwesomeIcon style = {{marginRight:'10px'}} icon = {faUser}/>
                Personal Details 
                {viewItem[1] && <FontAwesomeIcon style = {{marginLeft:'0.7em', marginTop:'0.2em'}} icon = {faCaretRight}/>}
                
            </div>
           <div className = {`userLeftPane-item activeItem-${viewItem[2]}`}
                onClick = {() =>{
                    setViewItem({
                        1:false,
                        2:true,
                    })
                }}
            >
                <FontAwesomeIcon  style = {{marginRight:'10px'}}icon = {faShoppingBag}/>
                Orders
                {viewItem[2] && <FontAwesomeIcon style = {{marginLeft:'0.7em', marginTop:'0.2em'}} icon = {faCaretRight}/>}
            </div>
           </Grid>

           <Grid className = 'rightPane-item' item >
            {viewItem[1] && <PersonalDetails />}
            {viewItem[2] && <UserOrders/>}
           </Grid>


       </Grid>
    )
}
export default UserProfile;