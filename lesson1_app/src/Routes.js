import { onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Authorization from './Authorization.js';
import Chats from './Chats.js';
import Home from './Home.js';
import NewsPage from './NewsPage.js';
import { PrivateRoute } from './PrivateRoute.js';
import Profile from './Profile.js';
import { PublicRoute } from './PublicRoute.js';
import { auth } from './services/firebase.js';

const Routes = () => {
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        });
        return unsubscribe;
    }, []);

    return (
        <BrowserRouter>
            <header className="main__header">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={(authed ? 'active_class' : 'inactive_class')}>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li className={(authed ? 'active_class' : 'inactive_class')}>
                        <Link to="/chats">Chats</Link>
                    </li>
                    <li>
                        <Link to="/newspage">News Page</Link>
                    </li>
                    <li className={(authed ? 'inactive_class' : 'active_class')}>
                        <Link to="/authorization">Login/SignUp</Link>
                    </li>
                </ul>
            </header>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <PrivateRoute path="/chats/:chatsId?" authed={authed}>
                    <Chats />
                </PrivateRoute>
                <PrivateRoute path="/profile" exact authed={authed}>
                    <Profile />
                </PrivateRoute>
                <PublicRoute path="/authorization" exact authed={authed}>
                    <Authorization />
                </PublicRoute>
                <Route path="/newspage">
                    <NewsPage />
                </Route>
                <Route>
                    <h3>404</h3>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;