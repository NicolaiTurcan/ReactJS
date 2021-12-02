/* eslint-disable jsx-a11y/anchor-has-content */
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
    // Checking device touch or pc.mouce
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

    const handleActive = () =>{
        if (active) {
            setActive(false);
        } else {
            setActive(true);
        }
    };
    const menuLinks = document.querySelectorAll('.menu__link');
        if (active){
            menuLinks.forEach(menuLink => {
                menuLink.addEventListener("click", handleActive);
            });
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
                            <li className="menu__link">
                                <Link to="/">Home</Link>
                            </li>
                            <li className={(authed ? 'active_class menu__link' : 'inactive_class menu__link')}>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li className={(authed ? 'active_class menu__link' : 'inactive_class menu__link')}>
                                <Link to="/chats">Chats</Link>
                            </li>
                            <li className="menu__link">
                                <Link to="/newspage">News Page</Link>
                            </li>
                            <li className={(authed ? 'inactive_class menu__link' : 'active_class menu__link')}>
                                <Link to="/authorization">Login/SignUp</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={(active ? "menu__icon _active" : "menu__icon")} onClick={handleActive}>
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
            <footer  className="main__footer">
                <div className="footer__container">
                    <div className="footer__container_text">
                        <p>Designed & Built by Nicolai Turcan</p>
                    </div>
                    <nav className="content__nav">
                        <a target="_blank" href="https://github.com/NicolaiTurcan" rel='noreferrer'className="icon-git"></a>
                        <a href="https://www.facebook.com/nicolai.turcan.77" target="_blank" rel='noreferrer' className="icon-facebook"></a>
                        <a href="https://t.me/joinchat/oqOhtw7D5gI3MGYy" target="_blank" rel='noreferrer' className="icon-telegram"></a>
                        <a href="https://www.linkedin.com/in/nicolai-turcan-a261a0217/" rel='noreferrer' target="_blank"
                            className="icon-linkedin"></a>
                    </nav>
                </div>
            </footer>
        </BrowserRouter>
    )
}

export default Routes;