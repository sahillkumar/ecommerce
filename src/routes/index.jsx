/* eslint-disable import/no-unresolved */
import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
// import Wishlist from 'src/components/shop/all-order/wishlist/Wishlist';
import Shop from 'src/modules/Shop/components';

// import PrivateRoute from 'src/privateRoute';
import Home from 'src/modules/Home/components';

function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/home"

      >
        <Home />

      </Route>
      <Route
        exact
        path="/shop"

      >
        <Shop />

      </Route>

      {/* <PrivateRoute exact path="/cart" component={Cart} />
      <PrivateRoute exact path="/account" component={UserProfile} />

      <PrivateRoute exact path="/wishlist">
        <Wishlist wishlist={productsInWishlist} />
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
      <Route exact path="/shop/:id" component={SpecificItem} /> */}
      {/* <Route exact path="/shop/:categoryName" component={SelectedCategory}/> */}
      {/* <Route path="/shop/:id" component={SelectedItem}/>

      <Route path="/contact" component={Contact} /> */}
      <Redirect to="/home" />
    </Switch>
  );
}

export default Routes;
