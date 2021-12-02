import React from "react";
import './App.css';

function Home() {
    return (
        <div className="container">
            <div className="home__page">
                <h2>Home Page</h2>
                <p className="home__mesage">
                    Hello, welcome to my ReactJS project "small chat". Here I learned to use ReactJS with
                    React Router, Redux(Redux Persist, Redux-Thunk), Firebase and Material-UI.
                </p>
                <p className="home__mesage">
                    You can check news on news-page(I used the free Git API).
                    If you want to access my small chat - You just need to create an account(Sign UP), 
                    you need a fake email address and a password with more than 6 characters.
                </p>
            </div>
        </div>

    );
}

export default Home;