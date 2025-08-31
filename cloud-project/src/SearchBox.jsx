import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateWeather }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "c826466474836dae3269d5e77dc03abe"; 

    const getWeatherInfo = async (cityName) => {
        try {
            const res = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
            const jsonRes = await res.json();
            const result = {
                city: jsonRes.name,
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                humidity: jsonRes.main.humidity,
                feelsLike: jsonRes.main.feels_like,
                weather: jsonRes.weather[0].description,
                timestamp: new Date().toLocaleString()
            };
            return result;
        } catch (err) {
            throw err;
        }
    };

    const getLiveWeather = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                try {
                    const res = await fetch(`${API_URL}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`);
                    const jsonRes = await res.json();
                    const result = {
                        city: jsonRes.name,
                        temp: jsonRes.main.temp,
                        tempMin: jsonRes.main.temp_min,
                        tempMax: jsonRes.main.temp_max,
                        humidity: jsonRes.main.humidity,
                        feelsLike: jsonRes.main.feels_like,
                        weather: jsonRes.weather[0].description,
                        timestamp: new Date().toLocaleString()
                    };
                    setError(false);
                    updateWeather(result);
                } catch (err) {
                    setError(true);
                }
            }, () => {
                alert("Location access denied. Please allow location permissions.");
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    const getWeatherFromAWS = async () => {
        try {
            const res = await fetch("/api/get-sensor-data");
            const jsonRes = await res.json();
            const sensorData = jsonRes[0]?.payload;
            console.log(sensorData);

            let istTime = "";
            if (sensorData?.timestamp) {
                const timestampNum = Number(sensorData.timestamp);
                const date = new Date(timestampNum * 1000);
                istTime = date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
            }

            const result = {
                city: "From Sensor",
                temp: sensorData?.temperature || 0,
                // tempMin: sensorData?.temperature || 0,
                tempMax: sensorData?.temperature || 0,
                humidity: sensorData?.humidity || 0,
                weather: "Clear",
                feelsLike: sensorData?.feelsLike || 0, 
                timestamp: istTime
            };
            setError(false);
            updateWeather(result);
        } catch (err) {
            console.error(err);
            setError(true);
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await getWeatherInfo(city);
            setError(false);
            updateWeather(result);
            setCity("");
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City"
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                    // style={{ width: "400px" }}
                    style={{width:"40rem",borderRadius:"10px"}}
                    required
                />
                <br /><br />

                <Button variant="outlined" type="submit" style={{width:"10rem",height:"2.6rem",fontSize:"0.8rem", fontStyle:"bold"}}>Search</Button>
                <br />
                <div style={{margin:"0 auto",display:"flex",justifyContent:"space-between",height:"100px",width:"40rem", alignItems:"center"}}>
                <Button variant="contained" color="primary" onClick={getLiveWeather} style={{width:"14rem",height:"2.6rem",fontSize:"0.8rem"}}>
                    Get Live Weather
                </Button>
                <br />
                <Button variant="contained" color="secondary" onClick={getWeatherFromAWS} style={{width:"14rem",height:"2.6rem",fontSize:"0.8rem"}}>
                    Get Weather from AWS
                </Button>
                </div>
                <br /><br />
                {error && <p style={{ color: "red" }}>**No Such Place Exists / IoT device is turned off**</p>}
            </form>
        </div>
    );
}
