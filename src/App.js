import React, { useContext, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import UserDashboard from "./components/dashboards/userdashboard/UserDashboard";
import Footer from "./components/layout/footer/footer";
import Navbar from "./components/layout/header/navbar/Navbar";
import "./App.css";
import useFirestore from "./firebase/useFirestore";
import ShopView from "../src/components/shop/all-products/shopView/ShopView";
import Cart from "./components/shop/all-order/cart/Cart";
import Auth from "./components/auth/authComp/Auth";
import ForgotPass from "./components/auth/ForgotPass/ForgotPass";
import SpecificItem from "./components/shop/all-products/productCard/SpecificItem";
import { DataContext } from "./context";
import Order from "./components/shop/all-order/order/Order";
import PrivateRoute from "./privateRoute";
import Thankyou from "./components/shop/all-order/thankyou/Thankyou";
import Wishlist from "./components/shop/all-order/wishlist/Wishlist";
import { allProductsInCart, allProductsInWishlist } from "./components/shop/all-order/cartHelper/cartHelper";

const App = () => {
  const [wishList, setWishList] = useState()
  const [cartProducts, setCartProducts] = useState()
  const products = useFirestore("PRODUCTS");
  const categories = useFirestore("CATEGORIES");
  const { user, dispatch,productsInWishlist } = useContext(DataContext);

  const itemsInWishlist = async (userId) => {
    const products = await allProductsInWishlist(userId);
    setWishList(products)
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
    if(user && user.userId){
      itemsInWishlist(user.userId)
      itemsInCart(user.userId)
    }
  }, [user])

  useEffect(() => {
    if(wishList){
      const ar = wishList.map(prod=> prod.id)
      localStorage.setItem('wishlist',JSON.stringify(ar))
      dispatch({
        type:"productsInWishlist",
        productsInWishlist : wishList
      })
    }
  }, [wishList])

  useEffect(() => {
    if(cartProducts){
      const ar = cartProducts.map(prod=> prod.id)
      localStorage.setItem('cart',JSON.stringify(ar))
      dispatch({
        type:"productsincart",
        productsincart : cartProducts
      })
    }
  }, [cartProducts])

  return (
    <div className="App">
      <Navbar user={user} dispatch={dispatch} />
      <Switch>
        <Route
          exact
          path="/home"
          component={() => <UserDashboard categories={categories} />}
        />
        <PrivateRoute exact path="/cart" component={Cart} />
        <PrivateRoute exact path="/wishlist"  >
          <Wishlist wishlist = {productsInWishlist} />
        </PrivateRoute>

        <Route
          exact
          path="/shop"
          component={() => <ShopView products={products} />}
        />
        <Route exact path="/auth" component={() => <Auth />} />
        <Route exact path="/auth/forgotpassword" component={ForgotPass} />
        <PrivateRoute exact path="/shop/success" component={Thankyou} />
        <PrivateRoute exact path="/shop/order" component={Order} />
        <Route exact path="/shop/:id" component={SpecificItem} />
        {/* <Route exact path="/shop/:categoryName" component={SelectedCategory}/> */}
        {/* <Route path="/shop/:id" component={SelectedItem}/>
          
          <Route path="/contact" component={Contact} /> */}
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
