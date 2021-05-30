import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Index from './pages/Index';
import Cart from './pages/Cart';
import { AppContainer } from './Global';

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
            <Route path="/*">
                <AppContainer>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '80vh',
                        flexDirection: 'column'
                    }}>
                        <h1>Error 404!</h1>
                        <p>Sorry, page not found.</p>
                    </div>
                </AppContainer>
            </Route>
        </Switch>
        </Router>
    );
};

export default AppRouter;