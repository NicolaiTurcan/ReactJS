import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Chats from './Chats.js';
import Home from './Home.js';
import Profile from './Profile.js';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/chats/:chatsId?">
                    <Chats />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route>
                    <h3>404</h3>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;