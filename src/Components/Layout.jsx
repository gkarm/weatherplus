import React from 'react';
import Navbar from "./Navbar/Navbar.jsx";
// new change from scratch
const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
