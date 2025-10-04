import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <header></header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;