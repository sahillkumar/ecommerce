import React, { useContext, useEffect, useState } from "react";
import {
  CardContent,
  CardMedia,
  Card,
  Grid,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import { moveToWishlist, removeItemFromCart } from "../cartHelper/cartHelper";

import "./cartcard.css";
import { DataContext } from "../../../../context";

function CartCard({ prod, reload, setReload, setTotalMrp }) {
  const { user } = useContext(DataContext);
  const [action, setAction] = useState("add");

  const removeFromCart = () => {
    removeItemFromCart(user.userId, prod.id);
    setReload(!reload);
  };

  const moveWishlist = ()=>{
    moveToWishlist(prod,user.userId)
    setReload(!reload)
  }

  const addToWishlist = () => {
    alert("Added to Wishlist");
  };

  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(prod.discountMrp);

  const addTotal = (val) => () => {
    if (val > 5) {
      setQty(1);
      setAction("");
    } else {
      setQty((prev) => prev + 1);
      setAction("add");
    }
  };

  const subTotal = (val) => () => {
    if (val < 1) {
      setQty(1);
    } else {
      setQty((prev) => prev - 1);
      setAction("sub");
    }
  };

  useEffect(() => {
    setTotal(prod.discountMrp * qty);
    if (action === "add") {
      setTotalMrp((prev) => prev + prod.discountMrp);
    } else if (action === "sub") {
      setTotalMrp((prev) => prev - prod.discountMrp);
    } else if (action === "") {
      setTotalMrp((prev) => prev - prod.discountMrp * 4);
    } else if (action === "rem") {
      setTotalMrp((prev) => prev - prod.discountMrp * qty);
    }
  }, [qty, action, setTotalMrp, prod.discountMrp]);

  return (
    <>
      <Card className="cart-card fade-in ">
        <CardMedia image={prod.picUrl} className="prod-cart-img" />
        <CardContent className="cart-content">
          <Grid item xs={8} className="details">
            <strong className="cart-prod-name">{prod.name}</strong>
            <strong className="short-description">{prod.description}</strong>
            <strong className="short-description">
              Quantity : <input value={qty} className="qty" />
              <button
                className="qty-btn"
                onClick={subTotal(qty - 1)}
                disabled={qty === 1}
              >
                -1
              </button>
              <button className="qty-btn" onClick={addTotal(qty + 1)}>
                +1
              </button>
            </strong>
            <ButtonGroup variant="outlined" className="cart-btns">
              <Button className="cart-btn" onClick={removeFromCart}>
                Remove
              </Button>
              <Button className="cart-btn" onClick={moveWishlist}>
                Move to Wishlist
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={4} className="price">
            <span className="prod-discount">&#8377;{prod.discountMrp}</span>
            <span className="prod-mrp">
              <del>&#8377;{prod.mrp}</del>
            </span>
            <span className="discount-percent">
              ({prod.discountPercentage}%)
            </span>
          
            <div className="total">Total : <span>&#8377;{total}</span></div>

            <div className="delivery">+ &#8377;39 Delivery Charges</div>

          
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default CartCard;
