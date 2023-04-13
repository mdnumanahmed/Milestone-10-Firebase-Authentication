import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='text-center mb-5'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/phones'>Phones</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/register-rbs'>Register RBS</NavLink>
        </nav>
    );
};

export default Header;