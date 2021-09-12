import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h3>Home Page</h3>
            <ul>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/chats">Chats</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </div>

    );
}

export default Home;