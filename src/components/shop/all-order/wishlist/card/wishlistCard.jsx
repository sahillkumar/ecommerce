import React, { useContext, useEffect, useState } from "react";
import {
  CardContent,
  CardMedia,
  Card,
  Grid,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import {
  buynow,
  removeItemFromWishlist,
} from "../../cartHelper/cartHelper";

import "./wishlistCard.css";
import { DataContext } from "../../../../../context";
import { Link } from "react-router-dom";

function WishlistCard({ prod, reload, setReload }) {
  const { user } = useContext(DataContext);

  const buyNow = () => {
    buynow(prod,user.userId);
    setReload(!reload);
  };

  const removeFromWishlist = () =>{
    removeItemFromWishlist(user.userId,prod.id)
    setReload(!reload)
  }

  return (
    <>
      <Card className="wishlist-card fade-in ">
        <CardMedia image={prod.picUrl} className="prod-cart-img" />
        <CardContent className="wishlistcard-content">
          <Grid item xs={8} className="details">
            <strong className="wishlistcard-prod-name">{prod.name}</strong>
            <div className="cost">
              <span className="prod-discount">&#8377;{prod.discountMrp}</span>
              <span className="prod-mrp">
                <del>&#8377;{prod.mrp}</del>
              </span>
            </div>
            <ButtonGroup variant="outlined" className="wishlist-btngroup">
              <Button
                className="wishlist-remove-btn"
                onClick={removeFromWishlist}
              >
                Remove
              </Button>
              <Link to="/cart" >
                <Button className="buy-now-btn" onClick={buyNow}>
                  Buy Now
                </Button>
              </Link>
            </ButtonGroup>
          </Grid>
          {/* <Grid item xs={4} className="price">
           
          </Grid> */}
        </CardContent>
      </Card>
    </>
  );
}

export default WishlistCard;
