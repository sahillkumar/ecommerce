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
import SpecificItem from './components/shop/all-products/productCard/SpecificItem';
import { DataContext } from './context';
import Order from './components/shop/all-order/order/Order';
import PrivateRoute from './privateRoute';
import Thankyou from './components/shop/all-order/thankyou/Thankyou';


 const App = () => {

  const products = useFirestore('PRODUCTS')
  const categories = useFirestore('CATEGORIES')
  const {user,dispatch} = useContext(DataContext)
  
  return ( 
    <div className="App">
      <Navbar user={user} dispatch={dispatch}/>
        <Switch>
          <Route exact path="/home" component={()=><UserDashboard categories={categories} />}/>
          <PrivateRoute exact path="/cart" component={Cart} />
          <Route exact path="/shop" component={()=><ShopView products={products} />} />
          <Route exact path="/auth" component={()=><Auth />} />
          <Route exact path="/auth/forgotpassword" component={ForgotPass} />
          <PrivateRoute exact path="/shop/success" component={Thankyou} />
          <PrivateRoute exact path="/shop/order" component={Order} />
          <Route exact path ="/shop/:id" component = {SpecificItem}/>
          {/* <Route exact path="/shop/:categoryName" component={SelectedCategory}/> */}
          {/* <Route path="/shop/:id" component={SelectedItem}/>
          
          <Route path="/contact" component={Contact} /> */} 
          <Redirect to="/home"/>
        </Switch>
      <Footer/>
    </div>
   );
  
}

export default App

 