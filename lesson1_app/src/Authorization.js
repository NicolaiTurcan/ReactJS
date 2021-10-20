import React, { useState } from "react";
import './App.css';
import { login, signUp } from './services/firebase.js';

function Authorization() {
    const [loginchange, setLoginChange] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginChange = (event) => {
        setLoginChange(event.target.value);
    };
    const handlePassChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        try {
            await login(loginchange, password);
        } catch (erorr) {
            console.log(erorr);
        }
    };

    const handleSignUp = async () => {
        try {
            await signUp(loginchange, password);
        } catch (erorr) {
            console.log(erorr);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setPassword('');
        setLoginChange('');
    };

    return (
        <div className="container">
            <form className="login_form" onSubmit={handleSubmit}>
                <input type="text" value={loginchange} placeholder="Your Email" onChange={handleLoginChange}></input>
                <input type="password" value={password} placeholder="Your Password" onChange={handlePassChange}></input>
                <div>
                    <button type="submit" onClick={handleLogin}>Login</button>
                    <button type="submit" onClick={handleSignUp}>SignUp</button>
                </div>
            </form>
        </div>
    )
}

export default Authorization;