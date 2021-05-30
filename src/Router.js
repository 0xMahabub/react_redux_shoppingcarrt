import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from './components/Header/Header';
import Index from './pages/Index';

const AppRouter = () => {
    return (
        <Router>
           <Header/>
        <Switch>
            <Route exact path="/">
                <Index/>
            </Route>
            <Route path="/cart">
                <h1>cart.....</h1>
            </Route>
            <Route path="/checkout">
                <h1>checkout.........</h1>
            </Route>
            <Route path="/*">
               <h1>Not found</h1> 
            </Route>
        </Switch>
        </Router>
    );
};

export default AppRouter;