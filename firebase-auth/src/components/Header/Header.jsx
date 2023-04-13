import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/phones'>Phones</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
        </nav>
    );
};

export default Header;