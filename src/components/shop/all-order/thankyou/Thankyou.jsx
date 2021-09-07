import { Card, CardContent } from '@material-ui/core'
import React from 'react'
import './thankyou.css'

function Thankyou() {
     return (
          <div className="t-container">
               <Card className="thankyou">
                    <CardContent className="t-content">
                         <p className="t-brand">OrganiKart</p>
                         <p>  Order Successful<br/>
                              Thank you for shopping with us.</p>
                          <span className="cont">
                              <a href="/shop">Continue Shopping</a>
                         </span>
                    </CardContent>
               </Card>
          </div>
          
     )
}

export default Thankyou
