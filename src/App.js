import React from 'react';
import './App.css';
import Home from './components/HomeComponent';
import Footer from './components/layout/footer';
import Header from './components/layout/header';
import {Route,Switch,withRouter} from 'react-router-dom';
import Shope from './components/shop/shop';
import Contact from './components/contact';
import About from './components/about';
import {dishes} from './store'

 export default withRouter( class App extends React.Component {
  state = { 
    dishes:dishes
   }
  render() { 
    return ( 
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/shop" component={()=><Shope items={dishes}/>} />
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
     );
  }
})
 