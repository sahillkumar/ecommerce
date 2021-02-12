import React from 'react';
import {Redirect, Route,Switch,withRouter} from 'react-router-dom';
import UserDashboard from './components/dashboards/userdashboard/UserDashboard';
import Footer from './components/layout/footer/footer';
import Navbar from './components/layout/header/navbar/Navbar';
import Categories from './components/shop/all-categories/categories/Categories';
import Products from './components/shop/all-products/products/Products';
import {products} from './shared/store.json'
import './App.css';

 export default withRouter( class App extends React.Component {
   state={
     products:products
   }
  
  render() { 

     const SelectedCategory=({match})=>{
      const {products}=this.state
      const category = match.params.categoryName
      return(
        <>
        {
          category === 'All Products'?
            <Products products={products}/>
              : <Products products={products.filter(prod=>prod.category === category)}/>
        }
        </>
      )}

    return ( 
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/" component={UserDashboard}/>
            <Route exact path="/shop" component={Categories} />
            <Route exact path="/shop/:categoryName" component={SelectedCategory}/>
            {/* <Route path="/shop/:id" component={SelectedItem}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact} /> */} 
            <Redirect to="/"/>
          </Switch>
        <Footer/>
      </div>
     );
  }
})
 