import React from 'react';
import "./Header.css"
import logo from '../../src/images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <a href="/shop">Shop</a>
            <a href="/order">Order</a>
            <a href="/login">Login</a>
            <a href="/inventor">Inventor</a>
        </nav>
    );
};

export default Header;