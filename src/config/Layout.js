import React from 'react';
import Navbar from '../component/Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div>
                {children}
            </div>
        </div>
    );
};

export default Layout;
