import React, { useEffect, useState } from 'react';
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

 const App = () => {

  const products = useFirestore('PRODUCTS')
  const [user,setUser] = useState(null)
  console.log(user);

  return ( 
    <div className="App">
      <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route exact path="/home" component={UserDashboard}/>
          <Route exact path="/shop" component={()=><ShopView products={products} />} />
          <Route exact path="/shop/cart" component={Cart}/>
          <Route exact path="/auth" component={()=><Auth setUser = {setUser}/>} />
          <Route exact path="/auth/forgotpassword" component={ForgotPass} />
          
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

  // const SelectedCategory=({match})=>{
  //   console.log('select category render ');
  
  //   const products = useFirestore('products')
  //   console.log('select category render ',products);
  //   const category = match.params.categoryName
  //   return(
  //     <>
  //     {
  //       category === 'All Products'?
  //         <Products products={products}/>
  //           : <Products products={products.filter(prod=>prod.category === category)}/>
  //     }
  //     </>
  //   )}

 