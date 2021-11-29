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
    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows());
        }
    };
    if (isMobile.any()) {
        document.body.classList.add('_touch');
    } else {
        document.body.classList.add('_pc');
    };
    const [active, setActive] = useState(false);
    const [authed, setAuthed] = useState(false);

    const hanleActive = () =>{
        if (active) {
            setActive(false);
            document.body.classList.toggle('_lock');
        } else {
            setActive(true);
            document.body.classList.toggle('_lock');
        }
    };

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
                <div className="header__container">
                    <nav className={(active ? "menu__body _active" : "menu__body")}>
                        <ul className="menu__list">
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
                    </nav>
                    <div className={(active ? "menu__icon _active" : "menu__icon")} onClick={hanleActive}>
                        <span></span>
                    </div>
                </div>
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