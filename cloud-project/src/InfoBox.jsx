// import { use, useState } from "react"
// import SearchBox from "./SearchBox"
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

// export default function InfoBox(){
    
//     const HOT_URl = "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0="
//     const COLD_URL = "https://images.unsplash.com/photo-1736847303615-051864095c9d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     const RAIN_URL = "https://media.istockphoto.com/id/547033564/photo/rain-flows-down-from-a-roof-down.webp?a=1&b=1&s=612x612&w=0&k=20&c=JjzhyKKywplhXhNiXslYVMiOhuAftqZhUN8zjMtlkzc="

//     let [detail,setDetail] = useState({
//         city: "",
//         temp: "",
//         tempMin: "",
//         tempMax: "",
//         humidity: "",
//         feelsLike: "",
//         weather: ""
//     }); 


//     let updateWeather = (data)=>{
//         setDetail(data)
        
//     }
 

//     return(
//         <>
//             <div>
//                 <SearchBox updateWeather={updateWeather}/>
//             </div>
            
//             <Card sx={{ maxWidth: 400, maxHeight: 500}} style={{width:"400px",height: "480px" ,boxShadow: "-0px -0px 10px black", border:"1px solid black"}}>
//                 <CardMedia
//                     sx={{ height: 180 }}

//                     image={detail.humidity>80 
//                         ? RAIN_URL 
//                         : detail.temp>15 
//                         ? HOT_URl 
//                         : COLD_URL}

//                     title="weather image"
//                     style={
//                         {
//                             borderBottom: "1px solid black"
//                         }
//                     }
//                 />

//                 <CardContent sx={{ height: 400 } }>
//                     <Typography gutterBottom variant="h5" component="div">
//                     <div style={{fontSize: "20px", display:"flex", placeContent:"center", height: "40px", padding: " 5px"} }>
//                         {detail.city}&nbsp;{detail.humidity > 80 
//                         ? <ThunderstormIcon/>
//                         : detail.temp>15 
//                         ? <WbSunnyIcon/>
//                         : <AcUnitIcon/>}
//                     </div>
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: 'text.secondary' }} style={{textAlign:"left"}}>
//                         <span><b>Temperature:</b> {detail.temp}&deg;C</span><br /><br />
//                         <span><b>Minimum Temperature:</b> {detail.tempMin} &deg;C</span><br /><br />
//                         <span><b>Maximum Temperature:</b> {detail.tempMax} &deg;C</span><br /><br />
//                         <span><b>Humidity:</b> {detail.humidity}</span><br /><br />
//                         <span><b>Feels Like:</b> {detail.feelsLike}&deg;C</span><br /><br />
//                         <span><b>Weather:</b> {detail.weather}</span>
//                     </Typography>
//                 </CardContent>

                
//             </Card>
//         </>
//     )
// }