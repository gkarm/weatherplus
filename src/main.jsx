
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
import WeekForecast from "./pages/WeekForecast.jsx";
import MapPage from './pages/MapPage.jsx';
import HourlyForecast from "./pages/WeatherPlusApp/HourlyForecast.jsx";

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
    {
      path: 'weekForecast',
      element: <Layout><WeekForecast /></Layout>
    },
    {
      path: 'map',
      element: <Layout><MapPage /></Layout>
    },
    {
        path:'hourly',
        element: <Layout><HourlyForecast /></Layout>
    },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <AppProvider>
            <RouterProvider router={router} />
        </AppProvider>

    </React.StrictMode>,
);