import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>This is a meal DB</h1>
                <nav className="nav">
                    <a href="Search Meal">Search-Meal</a>
                    <a href="Order Meal">order Meal</a>
                    <a href="Manege Order">Maneg order</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;