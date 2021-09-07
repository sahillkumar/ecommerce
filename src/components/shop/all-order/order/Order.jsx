import { Button, Grid, Paper } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import CssTextField from '../../../Reusable Components/CssTextField'
import './order.css'
import { displayRazorPay } from '../payment/paymentHelper'
import { DataContext } from '../../../../context'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
function Order() {

     const { user,productsincart,amount } = useContext(DataContext)
     const [delDetails, setDelDetails] = useState({
          name:user.displayName,
          email:user.email,
          phone:'',
          house:'',
          city:'',
          state:'',
          landmark:'',
          street:'',
          pincode:'',
     })

     let history = useHistory()

     const [thankyou, setThankyou] = useState(false)

     const [err, setErr] = useState(false)

     const { phone, paymentType , house, state,city, street, landmark, pincode,name,email} = delDetails

     const handleChange=name=>({target:{value}})=>{
          setErr(false)
          setDelDetails({
            ...delDetails,
            [name]:value
          })
     }


     useEffect(() => {
          if(thankyou){
               history.push('/shop/success')
          }
          
     }, [thankyou])

     const handleSubmit = (e) =>{
          e.preventDefault();
          displayRazorPay(user,delDetails,productsincart,setDelDetails,setThankyou,amount)
     }

     return (
          <div className="order">
               <Paper className="place-order">
                    <h3 className="brand-header">Organikart</h3>
                    <form onSubmit={handleSubmit}>
                    <Grid  className="personal" spacing={2}>
                         <CssTextField
                              disabled
                              margin="normal"
                              variant="outlined"
                              id="name"
                              value={name}
                              label="Name"
                              type="String"
                              className="name"
                         />
                         <CssTextField
                              disabled
                              variant="outlined"
                              margin="normal"
                              id="email"
                              value={email}
                              label="Email"
                              type="email"
                              className="email"
                         />
                         <CssTextField
                              required
                              margin="normal"
                              id="phone"
                              variant="outlined"
                              value={phone}
                              label="Phone No."
                              type="tel"
                              onChange={handleChange('phone')}
                              className="phone"
                              inputProps={{
                                   pattern:"[6789][0-9]{9}"
                              }}
                             
                         />
                         <CssTextField
                              variant="outlined"
                              required
                              margin="normal"
                              id="paymentType"
                              value={paymentType}
                              label="Payment Type"
                              type="String"
                              onChange={handleChange('paymentType')}
                              className="payment"
                         />
                         
                    </Grid>
                    <Grid className="address">
                         <CssTextField
                              required
                              variant="outlined"
                              margin="normal"
                              id="house"
                              value={house}
                              label="House No."
                              type="String"
                              onChange={handleChange('house')}
                              className="house-no"
                         />
                         <CssTextField
                              required
                              margin="normal"
                              id="street"
                              value={street}
                              label="Street"
                              type="String"
                              variant="outlined"
                              onChange={handleChange('street')}
                              className="street"
                         />
                         <CssTextField
                              required
                              margin="normal"
                              id="landmark"
                              value={landmark}
                              variant="outlined"
                              label="Landmark"
                              type="String"
                              onChange={handleChange('landmark')}
                              className="landmark"
                         />
                         <CssTextField
                              required
                              margin="normal"
                              id="city"
                              variant="outlined"
                              value={city}
                              label="City"
                              type="String"
                              onChange={handleChange('city')}
                              className="city"
                         />
                         <CssTextField
                              required
                              margin="normal"
                              id="state"
                              value={state}
                              label="State"
                              variant="outlined"
                              type="String"
                              onChange={handleChange('state')}
                              className="state"
                         />
                         <CssTextField
                              required
                              margin="normal"
                              id="pincode"
                              value={pincode}
                              variant="outlined"
                              label="pincode"
                              type="String"
                              onChange={handleChange('pincode')}
                              className="pincode"
                         
                              inputProps={{
                                   pattern:"[0-9]{6}",
                                   maxLength:6
                              }}
                         />
                    </Grid>
                    <Button variant="contained"        
                         className="confirm-order"
                         type="submit"
                    >
                         Confirm  &   Proceed
                    </Button>
                    </form>
               </Paper>
          </div>
     )
}

export default Order
