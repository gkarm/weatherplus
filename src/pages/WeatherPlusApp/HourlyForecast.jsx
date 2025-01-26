
import React, { useState } from 'react';

import search_icon from "/src/assets/search.png";
import humidity_icon from "/src/assets/humidity.png";
import wind_icon from "/src/assets/wind.png";
import './HourlyForecast.css';

const HourlyForecast = () => {
    const [city, setCity] = useState("");
    const [hourlyData, setHourlyData] = useState([]);
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
            setHourlyData(data.list.slice(0, 12));
            setError(null);
        } catch (error) {
            setError(error.message);
            setHourlyData([]);
        }
    };

    return (
        <div className='hourly-container'>
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
            {error && <div className="error-message">{error}</div>}
            <div className="hourly-data-container">
                {hourlyData.length > 0 ? (
                    hourlyData.map((hour, index) => (
                        <div key={index} className="hour-container">
                            <div className="hour-time">
                                {new Date(hour.dt * 1000).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </div>
                            <div className="temp">{Math.floor(hour.main.temp)}°C</div>
                            <div className="description">{hour.weather[0].description}</div>
                            <div className="humidity">
                                <img src={humidity_icon} alt="Humidity Icon" className="icon"/>
                                <div className="data">
                                    <div className="humidity-percent">{hour.main.humidity}%</div>
                                    <div className="text">Humidity</div>
                                </div>
                            </div>
                            <div className="wind">
                                <img src={wind_icon} alt="Wind Icon" className="icon"/>
                                <div className="data">
                                    <div className="wind-rate">{Math.floor(hour.wind.speed)} km/h</div>
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

export default HourlyForecast;