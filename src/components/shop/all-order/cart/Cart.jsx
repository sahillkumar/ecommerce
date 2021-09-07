import { Button, Grid, Paper } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import { DataContext } from "../../../../context";
import { allProductsInCart } from "../cartHelper/cartHelper";
import CartCard from "../cartCard/CartCard";

const Cart = () => {
  const { user, dispatch } = useContext(DataContext);

  const [cartProducts, setcartProducts] = useState([]);
  let totalNoOfItem = cartProducts.length;
  const [totalMrp, setTotalMrp] = useState(0);

  let deliveryCost = totalMrp > 500 ? "Free Delivery" : 40;
  let gst = (8 * totalMrp) / 100;
  let grandTotal =
    deliveryCost === 40 ? totalMrp + gst + deliveryCost : totalMrp + gst;

  const itemsInCart = async () => {
    const products = await allProductsInCart(user.userId);
    setcartProducts(products);
  };

  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (user) {
      itemsInCart();
    }
  }, [reload, totalMrp]);

  const addProductsFromCart = () => {
    dispatch({
      type: "productsincart",
      productsincart: cartProducts,
    });
  };

  const sendAmount = (amount) => {
    dispatch({
      type: "amount",
      amount: amount,
    });
  };

  return (
    <Grid container className="cart">
      {
        //  HEAD
        // cartProducts.length === 0 ?  <div className="empty-cart">Empty Cart</div> :

        cartProducts.length === 0 ? (
          <div className="emp-con">
            <img
              className="empty-img"
              src="/images/empty-cart.svg"
              alt="Cart Empty"
            />
            <span className="empty-cart">Empty Cart</span>
          </div>
        ) : (
          //  origin/v2vt
          <>
            <Grid item xs={8} className="cart-items">
              {cartProducts &&
                cartProducts.map((prod, index) => (
                  <CartCard
                    prod={prod}
                    key={index}
                    reload={reload}
                    setReload={setReload}
                    setTotalMrp={setTotalMrp}
                  />
                ))}
            </Grid>
            <Grid item xs={4} className="amout-details">
              <Paper className="cart-price">
                <div className="price-text">
                  <p className="amount-heading">Billing Details</p>
                  <hr className="underline" />
                  <p>
                    No. of distinct products{" "}
                    <span className="data">{totalNoOfItem}</span>
                  </p>
                  <p>
                    Total Mrp{" "}
                    <span className="data">{totalMrp.toFixed(2)}</span>
                  </p>
                  <p>
                    Delivery Cost
                    <span className="data">
                      {deliveryCost === 40
                        ? deliveryCost.toFixed(2)
                        : deliveryCost}
                    </span>
                  </p>
                  <p>
                    GST <span className="data">{gst.toFixed(2)}</span>
                  </p>
                  <p>
                    Total Amount
                    <span className="data">{grandTotal.toFixed(2)}</span>
                  </p>
                </div>
                <Link to="/shop/order">
                  <Button
                    variant="outlined"
                    className="placeorder"
                    onClick={() => {
                      sendAmount(grandTotal);
                      addProductsFromCart();
                    }}
                  >
                    Place Order
                  </Button>
                </Link>
              </Paper>
            </Grid>
          </>
        )
      }
    </Grid>
  );
};

export default Cart;
