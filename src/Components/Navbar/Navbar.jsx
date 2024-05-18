

// src/Components/Navbar/Navbar.jsx
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







//
// import React from 'react';
// import './Navbar.css'
//
//
//
//
// const Navbar = () => {
//     return (
//         <div className='navbar'>
//             <ul>
//                 <li>
//                    <a href="/home">Home</a>
//                 </li>
//                 <li>
//                    <a href="/login">Register/SignIn</a>
//                 </li>
//                 <li>
//                    <a href="/7days">7DaysForecast</a>
//                 </li>
//                 <li>
//                   <a href="/hourly">HourlyForecast</a>
//                 </li>
//                 <li>
//                   <a href="/map">Map</a>
//                 </li>
//             </ul>
//
//
//
//         </div>
//     );
// };
//
// export default Navbar;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // // Navbar.jsx
// //
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import './Navbar.css';
// //
// // const Navbar = () => {
// //     return (
// //         <div className="navbar">
// //             <Link to="/">Home</Link>
// //             <Link to="/signin">Sign In/Out</Link>
// //             <Link to="/extended">Extended Forecast</Link>
// //             <Link to="/hourly">Hourly Forecast</Link>
// //             <Link to="/weather">Weather</Link>
// //             <Link to="/settings">Settings</Link>
// //             <Link to="/googlemap">Google Map</Link>
// //         </div>
// //     );
// // };
// //
// // export default Navbar;
