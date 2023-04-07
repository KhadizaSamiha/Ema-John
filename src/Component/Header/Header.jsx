import React from 'react';
import "./Header.css"
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='header-a'>
              <Link to="/shop">Shop</Link>
              <Link to="/orders">Order</Link>
              <Link to="/login">Login</Link>
              <Link to="/inventory">Inventory</Link>
            </div>
        </nav>
    );
};

export default Header;