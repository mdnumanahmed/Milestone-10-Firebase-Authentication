import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import '../../App.css'

const MainLayout = () => {
    return (
        <div className='app'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;