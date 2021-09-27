import React, {useState} from 'react';
import { Button, Grid, Paper } from "@material-ui/core";
import './userProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingBag ,faUser, faShoppingCart, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import PersonalDetails from './personalDetails/personalDetails';
import UserOrders from './userOrders/userOrders';
import UserAddress from './userAddress/userAddress';


const UserProfile = () =>{

    const [viewItem, setViewItem] = useState({
        1:true,
        2:false,
        3:false
    });

    return(
       <Grid  container className = 'userProfileContainer'>
           <Grid item xs = {3} className = 'leftPaneUserProfile'  >
            <div className = {`userLeftPane-item activeItem-${viewItem[1]}`}
                onClick = {() =>{
                    setViewItem({
                        1:true,
                        2:false,
                        3:false
                    })
                }}
            >
                <FontAwesomeIcon style = {{marginRight:'10px'}} icon = {faUser}/>
                Personal Details
            </div>
           <div className = {`userLeftPane-item activeItem-${viewItem[2]}`}
                onClick = {() =>{
                    setViewItem({
                        1:false,
                        2:true,
                        3:false
                    })
                }}
            >
                <FontAwesomeIcon  style = {{marginRight:'10px'}}icon = {faShoppingBag}/>
                Orders
            </div>
           <div className = {`userLeftPane-item activeItem-${viewItem[3]}`}
                onClick = {() =>{
                    setViewItem({
                        1:false,
                        2:false,
                        3:true
                    })
                }}
            >
                <FontAwesomeIcon style = {{marginRight:'10px'}} icon = {faAddressCard}/>
                Address
            </div>
           </Grid>

           <Grid className = 'rightPane-item' item xs = {8}>
            {viewItem[1] && <PersonalDetails />}
            {viewItem[2] && <UserOrders/>}
            {viewItem[3] && <UserAddress />}
           </Grid>


       </Grid>
    )
}
export default UserProfile;