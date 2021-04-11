import React, { useContext } from 'react'
import { CardActionArea, CardContent, CardMedia, Card, Typography,FormControl, Tooltip, Select, InputLabel, FormControlLabel, Grid, ButtonGroup, Button} from '@material-ui/core'
import { Link } from 'react-router-dom'
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { addItemToCart, removeItemFromCart } from '../cardhelper/cartHelper';

import './cartcard.css'
import { DataContext } from '../../../../context';



function CartCard({prod,reload,setReload}) {

     const {user} = useContext(DataContext)

     const removeFromCart = () =>{
          removeItemFromCart(user.uid,prod.id)
          console.log("removed");
          setReload(!reload)
     }

     const addToWishlist = () =>{
          console.log("added to wishlist");
     }

     return (
          <>
          <Card className="cart-card fade-in ">
               <CardMedia
                    image={prod.picUrl}
                    className="prod-cart-img"
               />
               <CardContent className="cart-content">
                    <Grid item xs={8} className="details">
                         <strong className="cart-prod-name">
                              {prod.name}
                         </strong>
                         <strong className="short-description">
                              {prod.description}
                         </strong>
                         <strong className="short-description">
                              Quantity : {" "}
                              <input 
                                   type="number"
                                   max="10"
                                   min="1"
                              />
                         </strong>
                         <ButtonGroup variant="outlined" className="cart-btns">
                              <Button className="cart-btn" onClick={removeFromCart}>Remove</Button>
                              <Button className="cart-btn" onClick={addToWishlist}>Add to Wishlist</Button>
                              
                         </ButtonGroup>
                    </Grid>
                    <Grid item xs={4} className="price">
                        <span className="prod-discount">
                            &#8377;{prod.discountMrp}
                        </span>
                        <span className="prod-mrp">
                            <del>&#8377;{prod.mrp}</del>
                        </span>
                        <span className="discount-percent">
                            ({prod.discountPercentage}%)
                        </span>
                        <div className="delivery">+ &#8377;39 Delivery Charges</div>
                       
                    </Grid>
               </CardContent>
          </Card>
     </>
     )
}

export default CartCard

