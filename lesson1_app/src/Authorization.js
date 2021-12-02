import React, { useState } from "react";
import './App.css';
import { login, signUp } from './services/firebase.js';

function Authorization() {
    const [loginchange, setLoginChange] = useState('');
    const [loginchange2, setLoginChange2] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [check_password, setCheck_password] = useState('');

    const handleLoginChange = (event) => {
        setLoginChange(event.target.value);
    };
    const handleLoginChange2 = (event) => {
        setLoginChange2(event.target.value);
    };
    const handlePassChange = (event) => {
        setPassword(event.target.value);
    };
    const handlePassChange2 = (event) => {
        setPassword2(event.target.value);
    };
    const handleCheckPassChange = (event) => {
        setCheck_password(event.target.value);
    };

    const handleLogin = async () => {
        try {
            await login(loginchange, password);
        } catch (erorr) {
            alert(erorr);
        }
    };

    const handleSignUp = async () => {
        if (password2 === check_password){
            try {
                await signUp(loginchange2, password2);
            } catch (erorr) {
                alert(erorr);
            } 
        } else { 
            alert("Your check password is diferent")
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setPassword('');
        setLoginChange('');
    };

    return (
        <div className="container">
            <div className="form__wraper">
                <form className="login_form" onSubmit={handleSubmit}>
                    <h3>If you have an account just Login or you can use this one: mail@mail.com password"123456q"</h3>
                    <input type="text" value={loginchange} placeholder="Your Email" onChange={handleLoginChange}></input>
                    <input type="password" value={password} placeholder="Your Password" onChange={handlePassChange}></input>
                    <div>
                        <button type="submit" onClick={handleLogin}>Login</button>
                    </div>
                </form>
                <form className="login_form" onSubmit={handleSubmit}>
                    <h3>You can register heare, just put any fake email (mail@mail.com) as login and a password with more than 6 characters (put numbers and letters)</h3>
                    <input type="text" value={loginchange2} placeholder="Your Email" onChange={handleLoginChange2}></input>
                    <input type="password" value={password2} placeholder="Your Password" onChange={handlePassChange2}></input>
                    <input type="password" value={check_password} placeholder="Repeat your Password" onChange={handleCheckPassChange}></input>
                    <div>
                        <button type="submit" onClick={handleSignUp}>SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Authorization;