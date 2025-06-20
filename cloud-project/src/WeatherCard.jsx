import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function WeatherCard({ weatherData }) {
    if (!weatherData) return null;

    return (
        <Card style={{ maxWidth: 600, marginTop: -60 , margin:"0 auto", height:"28rem", backgroundColor:"rgba(255, 255, 255, 0.5)", boxShadow:"0 0 5px black"}}>
            <CardContent>
                <Typography variant="h5" component="div" style={{fontSize:"2rem"}}>
                    Weather Information {weatherData.city}
                </Typography>
                <br />
                <Typography sx={{ mb: 1.5 }} color="text.secondary"style={{fontSize:"1.5rem"}}>
                    Timestamp: {weatherData.timestamp}
                </Typography>
                <br />
                <Typography variant="body2" color="text.primary" style={{fontSize:"1.5rem"}}>
                    Temperature: {weatherData.temp}°C
                </Typography>
                <br />
                <Typography variant="body2" color="text.primary" style={{fontSize:"1.5rem"}}>
                    Min Temperature: {weatherData.tempMin}°C
                </Typography>
                <br />
                <Typography variant="body2" color="text.primary" style={{fontSize:"1.5rem"}}>
                    Max Temperature: {weatherData.tempMax}°C
                </Typography>
                <br />
                <Typography variant="body2" color="text.primary" style={{fontSize:"1.5rem"}}>
                    Humidity: {weatherData.humidity}%
                </Typography>
                <br />
                {weatherData.feelsLike !== "" && (
                    <Typography variant="body2" color="text.primary" style={{fontSize:"1.5rem"}}>
                        Feels Like: {weatherData.feelsLike}°C
                    </Typography>
                   
                )}
                <br />
                
                <Typography variant="body2" color="text.primary" style={{fontSize:"1.5rem"}}>
                    Weather: {weatherData.weather}
                </Typography><br />
            </CardContent>
        </Card>
    );
}
