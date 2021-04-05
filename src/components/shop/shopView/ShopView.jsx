import React from 'react'
import './shopview.css'
import { NavLink, BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import SpecificItem from '../../SpecificItem';

const ShopView = () => {
    return (
        <div className="shop-by-cat">
            <BrowserRouter>
                <Link target={"_blank"} to = {'/allProdcuts'}>
                    <div className="catergory">All Products</div>
                </Link>
                <Link to = {'/organicFood'}>
                    <div className="catergory">Organic Food</div>
                    </Link>
                <Link to = {'/beverages'}>
                    <div className="catergory">Beverages</div>
                </Link>
               
                <Link to = {'/handicrafts'}>
                    <div className="catergory">Handicrafts !!!!!!</div>
                </Link>
                <Link to = {'/coffeMugs'}>
                    <div className="catergory">Coffee Mugs</div>
                </Link>
                <Link to = {'/lorem'}>
                    <div className="catergory">lorem</div>
                </Link>
                <Link to = {'/ipsum'}>
                    <div className="catergory">ipsum</div>
                </Link>
                <Link to = {'/asdfasd'}>
                    <div className="catergory">asdfasd</div>
                </Link>
                <Link to = {'/asdfs'}>
                    <div className="catergory">asdfs</div>
                </Link>
                <Switch>
                    <Route path = '/allProducts' exact component = {SpecificItem}/>
                    <Route path = '/organicFood' exact component = {SpecificItem}/>
                    <Route path = '/beverages'   exact component = {SpecificItem}/>
                    <Route path = '/handicrafts' exact component = {SpecificItem}/>
                    <Route path = '/coffeeMugs'  exact component = {SpecificItem}/>
                    <Route path = '/lorem'       exact component = {SpecificItem}/>
                    <Route path = '/ipusm'       exact component = {SpecificItem}/>
                    <Route path = '/asdfasd'     exact component = {SpecificItem}/>
                    <Route path = '/asdfs'       exact component = {SpecificItem}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default ShopView
