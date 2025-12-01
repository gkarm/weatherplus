

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext.jsx";
import "./Navbar.css";

const Navbar = () => {
    const { user, logout } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-brand">
                    <Link to="/">WeatherApp</Link>
                </div>

                <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
                    <li>
                        <Link to="/" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/weekForecast" onClick={() => setIsOpen(false)}>
                            7 Days Forecast
                        </Link>
                    </li>
                    <li>
                        <Link to="/hourly" onClick={() => setIsOpen(false)}>
                            Hourly Forecast
                        </Link>
                    </li>
                    <li>
                        <Link to="/map" onClick={() => setIsOpen(false)}>
                            Map
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" onClick={() => setIsOpen(false)}>
                            Blog
                        </Link>
                    </li>

                    {user ? (
                        <>
                            <li>
                                <span>Welcome, {user.name}</span>
                            </li>
                            <li>
                                <button onClick={logout}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link to="/login" onClick={() => setIsOpen(false)}>
                                Register/Sign In
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;


// import {Router, Route, Link,} from "react-router-dom";
// // import  { useContext } from 'react';
// // import {Link, Route, Routes} from 'react-router-dom';
// // import { AppContext } from '../../context/AppContext';
// import {AppContext} from '../../Context/AppContext.jsx';
// import WeeklyWeather from "../../pages/WeekForecast.jsx";
// import HourlyForecast from "../../pages/WeatherPlusApp/HourlyForecast.jsx";
// import MapPage from "../../pages/MapPage.jsx";
// import './Navbar.css';
// import LoginForm from "../../pages/LoginForm.jsx";
// import {useContext} from "react";
//
//
// const Navbar = () => {
//     const { user, logout } = useContext(AppContext);
//
//     return (
//         <div className='navbar'>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="weekForecast">7 Days Forecast</Link></li>
//                 <li><Link to="/hourly">Hourly Forecast</Link></li>
//                 <li><Link to="/map">Map</Link></li>
//                 {user ? (
//                     <>
//                         <li><span>Welcome, {user.name}</span></li>
//                         <li><button onClick={logout}>Logout</button></li>
//                     </>
//                 ) : (
//                     <li><Link to="/login">Register/Sign In</Link></li>
//                 )}
//             </ul>
//
//         </div>
//     );
// };
//
// export default Navbar;