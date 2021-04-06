import { Button, Container, Grid, Paper, TextField } from '@material-ui/core'
import React from 'react'
import CssTextField from '../../../Reusable Components/CssTextField'
import './order.css'
import { displayRazorPay } from '../payment/paymentHelper'
function Order() {
     return (
          <div className="order">
               <Paper className="place-order">
                    <h3 className="brand-header">Organikart</h3>
                    <Grid  className="personal" spacing={2}>
                         <CssTextField
                              disabled
                              autoFocus
                              required
                              margin="normal"
                              id="name"
                              value=""
                              label="Name"
                              type="Name"
                              onChange={()=>{}}
                              className="name"
                         />
                         <CssTextField
                              disabled
                              autoFocus
                              required
                              margin="normal"
                              id="name"
                              value=""
                              label="Email"
                              type="Name"
                           
                              onChange={()=>{}}
                              className="email"
                         />
                         <CssTextField
                              disabled
                              autoFocus
                              required
                              margin="normal"
                              id="name"
                              value=""
                              label="mobile no."
                              type="Name"
                              
                              onChange={()=>{}}
                              className="phone"
                         />
                         <CssTextField
                              disabled
                              autoFocus
                              required
                              margin="normal"
                              id="name"
                              value=""
                              label="Payment Type"
                              type="Name"
                              
                              onChange={()=>{}}
                              className="payment"
                         />
                         
                    </Grid>
                    <Grid className="address">
                         <CssTextField
                              disabled
                              autoFocus
                              required
                              margin="normal"
                              id="name"
                              value=""
                              label="House No"
                              type="Name"
                              onChange={()=>{}}
                              className="house-no"
                         />
                         <CssTextField
                              disabled
                              autoFocus
                              required
                              margin="normal"
                              id="name"
                              value=""
                              label="Street"
                              type="Name"
                              onChange={()=>{}}
                              className="street"
                         />
                         <CssTextField
                              disabled
                              autoFocus
                              required
                              margin="normal"
                              id="name"
                              value=""
                              label="Landmark"
                              type="Name"
                           
                              
                              onChange={()=>{}}
                              className="landmark"
                         />
                         <CssTextField
                              disabled
                              autoFocus
                              required
                              margin="normal"
                              id="name"
                              value=""
                              label="City"
                              type="Name"
                              onChange={()=>{}}
                              className="city"
                         />
                         <CssTextField
                              disabled
                              autoFocus
                              required
                              margin="normal"
                              id="name"
                              value=""
                              label="State"
                              type="Name"
                              onChange={()=>{}}
                              className="state"
                         />
                         <CssTextField
                              disabled
                              autoFocus
                              required
                              margin="normal"
                              id="name"
                              value=""
                              label="pincode"
                              type="Name"
                              onChange={()=>{}}
                              className="pincode"
                         />
                    </Grid>

                    <Button variant="contained"        className="confirm-order"
                    onClick={displayRazorPay}
                    >
                         Confirm  &   Proceed
                    </Button>
               </Paper>
          </div>
     )
}

export default Order
