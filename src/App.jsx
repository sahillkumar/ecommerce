import React, { useContext, useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";
import Footer from "./components/layout/footer/footer";
import Navbar from "./components/layout/header/navbar/Navbar";
import useFirestore from "./firebase/useFirestore";
import { DataContext } from "./context";

import {
  allProductsInCart,
  allProductsInWishlist,
} from "./components/shop/all-order/cartHelper/cartHelper";
import { fetchUserDetails } from "./components/shop/all-order/userProfile/personalDetails/personalDetails-helper";
import Routes from "./routes";

function App() {
  const [wishList, setWishList] = useState();
  const [cartProducts, setCartProducts] = useState();
  const [userInfo, setUserInfo] = useState({});
  const products = useFirestore("PRODUCTS");
  const categories = useFirestore("CATEGORIES");

  const { user, dispatch, productsInWishlist } = useContext(DataContext);

  const itemsInWishlist = async (userId) => {
    const products = await allProductsInWishlist(userId);
    setWishList(products);
  };

  const itemsInCart = async (userId) => {
    const products = await allProductsInCart(userId);
    setCartProducts(products);
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch({
        type: "user",
        user: foundUser,
      });
    }
  }, []);

  useEffect(() => {
    if (user && user.userId) {
      itemsInWishlist(user.userId);
      itemsInCart(user.userId);
      fetchUserDetails(user.userId).then(
        (data) =>
          data &&
          data.user &&
          localStorage.setItem("userInfo", JSON.stringify(data))
      );
    }
  }, [user]);

  useEffect(() => {
    if (wishList) {
      const ar = wishList.map((prod) => prod.id);
      localStorage.setItem("wishlist", JSON.stringify(ar));
      dispatch({
        type: "productsInWishlist",
        productsInWishlist: wishList,
      });
    }
  }, [wishList]);

  useEffect(() => {
    if (cartProducts) {
      const ar = cartProducts.map((prod) => prod.id);
      localStorage.setItem("cart", JSON.stringify(ar));
      dispatch({
        type: "productsincart",
        productsincart: cartProducts,
      });
    }
  }, [cartProducts]);

  return (
    <div className="App">
      <Navbar user={user} dispatch={dispatch} />
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={1360}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
