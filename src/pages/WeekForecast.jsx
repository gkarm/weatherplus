import React, { useState, useEffect } from 'react';
import './WeekForecast.css';

import search_icon from "/src/assets/search.png";
import clear_icon from "/src/assets/clear.png";
import cloud_icon from "/src/assets/cloud.png";
import drizzle_icon from "/src/assets/drizzle.png";
import rain_icon from "/src/assets/rain.png";
import snow_icon from "/src/assets/snow.png";
import humidity_icon from "/src/assets/humidity.png";
import wind_icon from "/src/assets/wind.png";

const WeeklyWeather = () => {
    const [city, setCity] = useState("");
    const [weeklyData, setWeeklyData] = useState([]);
    const [wicon, setWicon] = useState(cloud_icon);
    const [error, setError] = useState(null);

    const api_key = "b8a5b939482c713ddb5f0c28ee6c2dd6";

    const search = async () => {
        if (city === "") return;

        try {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric&cnt=7`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            if (data.list) {
                setWeeklyData(data.list);
                setError(null);
            } else {
                setWeeklyData([]);
                setError('No data available');
            }
        } catch (error) {
            setError(error.message);
            setWeeklyData([]);
        }
    };

    useEffect(() => {
        if (weeklyData.length > 0) {
            const icon = weeklyData[0].weather[0].icon;
            if (icon === "01d" || icon === "01n") setWicon(clear_icon);
            else if (icon.includes("02") || icon.includes("03")) setWicon(cloud_icon);
            else if (icon.includes("09") || icon.includes("10")) setWicon(rain_icon);
            else if (icon.includes("13")) setWicon(snow_icon);
            else setWicon(clear_icon);
        }
    }, [weeklyData]);

    return (
        <div className='container'>
            <div className="top-bar">
                <input
                    type="text"
                    className="cityInput"
                    placeholder="Search"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <div className="search-icon" onClick={search}>
                    <img src={search_icon} alt="Search Icon"/>
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="Weather Icon"/>
            </div>
            {error && <div className="error-message">{error}</div>}
            <div className="data-container">
                {weeklyData.length > 0 ? (
                    weeklyData.map((day, index) => (
                        <div key={index} className="day-container">
                            <div className="day">{new Date(day.dt * 1000).toLocaleDateString()}</div>
                            <div className="temp">{Math.floor(day.main.temp)}°C</div>
                            <div className="description">{day.weather[0].description}</div>
                            <div className="humidity">
                                <img src={humidity_icon} alt="Humidity Icon" className="icon"/>
                                <div className="data">
                                    <div className="humidity-percent">{day.main.humidity}%</div>
                                    <div className="text">Humidity</div>
                                </div>
                            </div>
                            <div className="wind">
                                <img src={wind_icon} alt="Wind Icon" className="icon"/>
                                <div className="data">
                                    <div className="wind-rate">{Math.floor(day.wind.speed)} km/h</div>
                                    <div className="text">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    !error && <div className="no-data-message">No data available</div>
                )}
            </div>
        </div>
    );
};

export default WeeklyWeather;

