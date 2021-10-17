import { Button, Grid, Paper } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import "./wishlist.css";
import { DataContext } from "../../../../context";
import { allProductsInWishlist } from "../cartHelper/cartHelper";
import WishlistCard from "./card/wishlistCard";

const Wishlist = ({wishlist}) => {
  const [reload, setReload] = useState(false);
  const { user, dispatch } = useContext(DataContext);

  useEffect(() => {
    setWishlistProducts(wishlist)
 
  }, [wishlist])

  useEffect(() => {
    if (user && user.userId) {
      itemsInWishlist(user.userId);
    }
  }, [user, reload]);

  const [wishlistProducts, setWishlistProducts] = useState([]);

  const itemsInWishlist = async (userId) => {
    const products = await allProductsInWishlist(userId);
    setWishlistProducts(products);
  };

  return (
    <Grid container className="wishlist">
      {wishlistProducts && wishlistProducts.length === 0 ? (
        <div className="emp-con">
          <img
            className="empty-img"
            src="/images/empty-cart.svg"
            alt="Cart Empty"
          />
          <span className="empty-cart">No Products Here</span>
        </div>
      ) : (
        <Grid item className="wishlist-container">
          {wishlistProducts &&
            wishlistProducts.map((prod, index) => (
              <WishlistCard
                prod={prod}
                key={index}
                reload={reload}
                setReload={setReload}
              />
            ))}
        </Grid>
      )}
    </Grid>
  );
};

export default Wishlist;
