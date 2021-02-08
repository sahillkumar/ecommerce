import React from 'react';
import './App.css';
import UserDashboard from './components/dashboards/userdashboard/UserDashboard';
import Footer from './components/layout/footer/footer';
import {Redirect, Route,Switch,withRouter} from 'react-router-dom';
import Shope from './components/shop/shop';
import Contact from './components/contact/contact';
import {dishes} from './shared/store.json'
import ItemDetails from './components/shop/detail';
import Navbar from './components/layout/header/navbar/Navbar';

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
        <Navbar />
          <Switch>
            <Route exact path="/" component={UserDashboard}/>
            {/* <Route exact path="/shop" component={()=><Shope items={dishes}/>} />
            <Route path="/shop/:id" component={SelectedItem}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact} /> */}
            <Redirect to="/"/>
          </Switch>
        <Footer/>
      </div>
     );
  }
})
 