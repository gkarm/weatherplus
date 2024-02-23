import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import WeatherPlusApp from "./Components/WeatherPlusApp/WeatherPlusApp.jsx"
import  './Components/WeatherPlusApp/WeatherPlusApp.css'
import './Components/style.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import SignUpForm from './Components/SignUpForm.jsx'
import LoginForm from "./Components/LoginForm.jsx";




const router = createBrowserRouter([
    {
        path: "/signup",
        element: <SignUpForm/>,
    },
    {
        path: "WeatherPlusApp",
        element: <WeatherPlusApp/>,
    },
    {
        path: '/login',
        element: <LoginForm/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
