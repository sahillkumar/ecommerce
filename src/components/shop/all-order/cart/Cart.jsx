 import { Button, Grid, Paper } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../../../context'
import { allProductsInCart } from '../cardhelper/cartHelper'
import CartCard from '../cartCard/CartCard'
import './cart.css'

const Cart = () => {
    const {user} = useContext(DataContext)

    const [cartProducts, setcartProducts] = useState([])
    console.log(cartProducts.length);
    
    let totalNoOfItem = cartProducts.length

    const [totalMrp,setTotalMrp] = useState(0);
    
    
    
    const itemsInCart = async () =>{
        const products = await allProductsInCart(user.userId)
        setcartProducts(products)
    }

    const [reload, setReload] = useState(false) 

    useEffect(() => {
        if(user){
           itemsInCart()
        }
        
    }, [reload])

    return (
        <Grid container className="cart">
        {
            cartProducts.length === 0 ?  <div>Empty Cart</div> :
                <>
                    <Grid item xs={8} className="cart-items">
                        { 
                        cartProducts && cartProducts.map((prod,index)=><CartCard prod={prod} key={index} reload={reload} setReload={setReload} setTotalMrp={setTotalMrp}/>
                        )
                        }
                    </Grid>
                    <Grid item xs={4} className="amout-details">
                        <Paper className="cart-price">
                            <div className="price-text">
                            <p className="amount-heading">Billing Details</p>
                                <p>No. of distinct products <span className="data" >{totalNoOfItem}</span></p>
                                <p>Total Mrp <span className="data" >{totalMrp}</span></p>
                                <p>Delivery Cost<span className="data" >{}</span></p>
                                <p>GST <span className="data" >{}</span></p>
                                <p>Total Amount<span className="data" >{}</span></p>
                            </div>
                            <Link to="/order">
                                <Button variant="outlined" className="placeorder" onClick={()=>{}}>
                                    Place Order
                                </Button>
                            </Link>
                        </Paper>
                    </Grid>
                </>
            
        }
        </Grid>
    )
}

export default Cart
