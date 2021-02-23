import React, { useEffect, useState } from 'react';
import {Redirect, Route,Switch} from 'react-router-dom';
import UserDashboard from './components/dashboards/userdashboard/UserDashboard';
import Footer from './components/layout/footer/footer';
import Navbar from './components/layout/header/navbar/Navbar';
import Categories from './components/shop/all-categories/categories/Categories';
import './App.css';
import useFirestore from './firebase/useFirestore';
import Products from './components/shop/all-products/products/Products';

 const App = () => {
  const products = useFirestore('PRODUCTS')

  
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


  return ( 
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={UserDashboard}/>
          <Route exact path="/shop" component={()=><Products products={products} />} />
          {/* <Route exact path="/shop/:categoryName" component={SelectedCategory}/> */}
          {/* <Route path="/shop/:id" component={SelectedItem}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact} /> */} 
          <Redirect to="/"/>
        </Switch>
      <Footer/>
    </div>
   );
  
}

export default App
 