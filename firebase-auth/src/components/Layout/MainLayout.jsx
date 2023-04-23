import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import '../../App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <div className='w-100 border'>
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;