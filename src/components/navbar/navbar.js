import React from "react";
import './navbar.css';

export const NavBar = () => {
    return (
        <div className="navbar">
            <img src="https://my-first-shop.s3.eu-north-1.amazonaws.com/logo.png" />
            <div className="navlinks">
                <p>Home</p>
                <p>About</p>
                <p>Shop</p>
                <p>Contact</p>
            </div>
        </div>
    )
}