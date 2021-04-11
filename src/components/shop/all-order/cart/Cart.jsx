import { Button, Grid, Paper } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../../../context'
import { allProductsInCart } from '../cardhelper/cartHelper'
import CartCard from '../cartCard/CartCard'
import './cart.css'


const Cart = () => {
    const {user} = useContext(DataContext)

    const [cartProducts, setcartProducts] = useState([])
    console.log(cartProducts);
    const itemsInCart = async () =>{
        const products = await allProductsInCart(user.uid)
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
            cartProducts.length === 0 ?  <div><h3>Your cart is empty!</h3><img style ={{
                width: '50%',
                position:'absolute',
                left:'20%',
                
            }}src="https://www.apnashopping.in/assets/img/payment/Empty-Cart.jpg" alt="Cart Empty"/></div> :
                <>
                    <Grid item xs={8} className="cart-items">
                        { 
                        cartProducts && cartProducts.map((prod,index)=><CartCard prod={prod} key={index} reload={reload} setReload={setReload}/>
                        )
                        }
                    </Grid>
                    <Grid item xs={4} className="amout-details">
                        <Paper className="cart-price">
                            <div className="price-text">
                            <p className="amount-heading">Amount Details</p>
                                <p>No. of Items</p>
                                <p>Total Mrp</p>
                                <p>Discount on Mrp</p>
                                <p>Total Amount</p>
                            </div>
                            <Button variant="outlined" className="placeorder">
                                Place Order
                            </Button>
                        </Paper>
                    </Grid>
                </>
            
        }
        </Grid>
    )
}

export default Cart
