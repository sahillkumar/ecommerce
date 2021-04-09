import React, { useContext, useEffect, useState } from 'react';
import {Redirect, Route,Switch} from 'react-router-dom';
import UserDashboard from './components/dashboards/userdashboard/UserDashboard';
import Footer from './components/layout/footer/footer';
import Navbar from './components/layout/header/navbar/Navbar';
import './App.css';
import useFirestore from './firebase/useFirestore';
import ShopView from '../src/components/shop/all-products/shopView/ShopView'
import Cart from './components/shop/all-order/cart/Cart';
import Auth from './components/auth/authComp/Auth';
import ForgotPass from './components/auth/ForgotPass/ForgotPass';
import { DataContext } from './context';
import Order from './components/shop/all-order/order/Order';
import PrivateRoute from './privateRoute';
import Thankyou from './components/shop/all-order/thankyou/Thankyou';


 const App = () => {

  const products = useFirestore('PRODUCTS')
  const {user,dispatch} = useContext(DataContext)
  
  return ( 
    <div className="App">
      <Navbar user={user} dispatch={dispatch}/>
        <Switch>
          <Route exact path="/home" component={UserDashboard}/>
          <PrivateRoute exact path="/shop/cart" component={Cart} />
          <Route exact path="/shop" component={()=><ShopView products={products} />} />
          <Route exact path="/auth" component={()=><Auth />} />
          <Route exact path="/auth/forgotpassword" component={ForgotPass} />
          <PrivateRoute exact path="/shop/success" component={Thankyou} />
          <PrivateRoute exact path="/shop/order" component={Order} />
          <Redirect to="/home"/>
        </Switch>
      <Footer/>
    </div>
   );
  
}

export default App

 