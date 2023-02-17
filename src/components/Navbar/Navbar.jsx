import React from 'react';
import './Navbar.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <ul className="nav-menu">
                <li className="nav-menu__item">
                    <NavLink to='/profile'>Profile</NavLink>
                </li>
                <li className="nav-menu__item">
                    <NavLink to='/dialogs'>Messages</NavLink>
                </li>
                <li className="nav-menu__item">
                    <a>News</a>
                </li>
                <li className="nav-menu__item">
                    <a>Music</a>
                </li>
                <li className="nav-menu__item">
                    <a>Settings</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;