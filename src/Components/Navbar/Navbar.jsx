import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { AppContext } from '../../context/AppContext';
import {AppContext} from '../../Context/AppContext.jsx';
import './Navbar.css';

const Navbar = () => {
    const { user, logout } = useContext(AppContext);

    return (
        <div className='navbar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="weekForecast">7 Days Forecast</Link></li>
                <li><Link to="/hourly">Hourly Forecast</Link></li>
                <li><Link to="/map">Map</Link></li>
                {user ? (
                    <>
                        <li><span>Welcome, {user.name}</span></li>
                        <li><button onClick={logout}>Logout</button></li>
                    </>
                ) : (
                    <li><Link to="/login">Register/Sign In</Link></li>
                )}
            </ul>
        </div>
    );
};

export default Navbar;