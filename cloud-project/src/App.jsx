import { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import WeatherCard from './WeatherCard';

import sunImg from './assets/sun.jpg';
import snowImg from './assets/snow.jpg';
import rainImg from './assets/rain.jpg';
import defaultImg from './assets/default.jpg'; 

export default function App() {
    const [weatherData, setWeatherData] = useState(null);

    const updateWeather = (data) => {
        setWeatherData(data);
    };

    const getBackgroundImage = () => {
        if (!weatherData) return defaultImg; // default
        if (weatherData.humidity > 80) {
            return rainImg;
        } else if (weatherData.temp > 30) {
            return sunImg;
        } else if (weatherData.temp < 20) {
            return snowImg;
        } else {
            return sunImg;
        }
    };

    // 👇 set background on body whenever weatherData changes
    useEffect(() => {
        document.body.style.backgroundImage = `url(${getBackgroundImage()})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.height = "100vh";
        document.body.style.margin = 0;
    }, [weatherData]);

    const appStyle = {
        textAlign: "center",
        margin: "50px auto",
        // border: "1px solid black",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.8)", // semi-transparent white
        width: "50rem",
        boxSizing: "border-box"
    };

    return (
        <div style={appStyle}>
            <h1>Cloud Computing Project</h1>
            <SearchBox updateWeather={updateWeather} />
            {weatherData && <WeatherCard weatherData={weatherData} />}
        </div>
    );
}
