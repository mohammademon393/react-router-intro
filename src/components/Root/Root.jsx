import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <header>
                <h1>Root page fixed</h1>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;