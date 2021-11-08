import React, { Component } from 'react'
import { Link,NavLink } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                
                <NavLink className="navbar-brand" to="/home">Navbar</NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/card">Shoping Card</NavLink>
                    </li>
                </ul>
            </div>
                <span className="badge bg-primary">{props.proCount}</span>
            </div>


        </nav>
    );
}

export default Navbar;

