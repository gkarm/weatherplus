import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WeatherPlusApp from "./Components/WeatherPlusApp/WeatherPlusApp.jsx"
import  './Components/LoginRegistration/Login.css'
import  './Components/WeatherPlusApp/WeatherPlusApp.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "WeatherPlusApp",
        element: <WeatherPlusApp/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
