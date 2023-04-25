import React from 'react';
import DragonNavbar from '../pages/Shared/DragonNavbar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <DragonNavbar></DragonNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;