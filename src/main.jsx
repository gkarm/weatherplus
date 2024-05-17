
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WeatherPlusApp from "./pages/WeatherPlusApp/WeatherPlusApp.jsx";
import './pages/WeatherPlusApp/WeatherPlusApp.css';
import './Components/style.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpForm from './pages/SignUpForm.jsx';
import LoginForm from "./pages/LoginForm.jsx";
import Layout from './Components/Layout.jsx';
// import Layout from './Components/Layout/Layout.jsx';
// import { AppProvider } from './context/AppContext';
import { AppProvider} from './Context/AppContext.jsx';
// Define the routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout><WeatherPlusApp /></Layout>,
    },
    {
        path: 'signup',
        element: <Layout><SignUpForm /></Layout>,
    },
    {
        path: 'weatherPlusApp',
        element: <Layout><WeatherPlusApp /></Layout>,
    },
    {
        path: 'login',
        element: <Layout><LoginForm /></Layout>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppProvider>
            <RouterProvider router={router} />
        </AppProvider>
    </React.StrictMode>,
);




//
//
// // src/index.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import WeatherPlusApp from "./pages/WeatherPlusApp/WeatherPlusApp.jsx";
// import './pages/WeatherPlusApp/WeatherPlusApp.css';
// import './Components/style.css';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import SignUpForm from './pages/SignUpForm.jsx';
// import LoginForm from "./pages/LoginForm.jsx";
// // import Layout from './Components/Layout/Layout.jsx';
// import Layout from './Components/Layout.jsx'
//
// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout><WeatherPlusApp /></Layout>,
//     },
//     {
//         path: 'signup',
//         element: <Layout><SignUpForm /></Layout>,
//     },
//     {
//         path: 'weatherPlusApp',
//         element: <Layout><WeatherPlusApp /></Layout>,
//     },
//     {
//         path: 'login',
//         element: <Layout><LoginForm /></Layout>,
//     },
// ]);
//
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <AppProvider>
//             <RouterProvider router={router} />
//         </AppProvider>
//     </React.StrictMode>,
// );
//
//








// 01 first one





// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import WeatherPlusApp from "./pages/WeatherPlusApp/WeatherPlusApp.jsx"
// import  './pages/WeatherPlusApp/WeatherPlusApp.css'
// import './Components/style.css'
// import {
//     createBrowserRouter,
//     RouterProvider,
// } from "react-router-dom";
// import SignUpForm from './pages/SignUpForm.jsx'
// import LoginForm from "./pages/LoginForm.jsx";
// import Navbar from "./Components/Navbar/Navbar.jsx";
//
//
//
//
//
// const router = createBrowserRouter([
//
//     {
//       path: '/',
//         element:<Navbar/>
//     },
//     {
//         path: '/',
//         element: <SignUpForm/>,
//     },
//     {
//         path: "weatherPlusApp",
//         element: <WeatherPlusApp/>,
//     },
//     {
//         path: '/login',
//         element: <LoginForm/>,
//     },
// ]);
//
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )
