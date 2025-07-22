import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

const WeatherForecast = (weatherForecast) => {
    console.log(weatherForecast)
    return (
<div className="weather">
  <h2>{weatherForecast.day}</h2>
  < WeatherIcon 
    image={weatherForecast.img} 
    alt={weatherForecast.imgAlt} />
  <p><span>conditions: </span>{weatherForecast.conditions}</p>
  <p><span>time: </span>{weatherForecast.time}</p>
</div>
);
};

export default WeatherForecast;