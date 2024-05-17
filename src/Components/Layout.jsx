// src/Components/Layout/Layout.jsx
import React from 'react';
// import Navbar from '../Navbar/Navbar.jsx';
import Navbar from "./Navbar/Navbar.jsx";
// import Navbar from "./Navbar/Navbar.jsx";
const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
