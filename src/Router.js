import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from './components/Header/Header';
import Index from './pages/Index';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Notfound from './pages/404';


const AppRouter = () => {
    return (
        <Router>
            <Header/>
        <Switch>
            <Route exact path="/">
                <Index/>
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
            <Route path="/checkout">
                <Checkout />
            </Route>
            <Route path="/*">
                <Notfound />
            </Route>
        </Switch>
        </Router>
    );
};

export default AppRouter;