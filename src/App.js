import React from 'react';
import './App.css';
import Home from './components/HomeComponent';
import Footer from './components/layout/footer';
import Header from './components/layout/header';
import {Route,Switch,withRouter} from 'react-router-dom';
import Shope from './components/shop/shop';
import Contact from './components/contact';
import About from './components/about';
import {dishes} from './shared/store.json'
import ItemDetails from './components/shop/detail';

 export default withRouter( class App extends React.Component {
  state = { 
    dishes:dishes
   }


  render() { 

    const SelectedItem=({match})=>{
      const {dishes}=this.state
      return(
        <ItemDetails selectedItem={dishes.find((dish)=>dish.id===parseInt(match.params.id,10))}/>
      )
  }

    return ( 
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/shop" component={()=><Shope items={dishes}/>} />
          <Route path="/shop/:id" component={SelectedItem}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact} />
          
        </Switch>
        <Footer />
      </div>
     );
  }
})
 