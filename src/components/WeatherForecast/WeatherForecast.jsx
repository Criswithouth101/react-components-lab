import "./WeatherForecast.css";

const WeatherForecast = (weatherForecast) => {
    return (
<div className="weather">
  <h2>{weatherForecast.day}</h2>
  <img src={weatherForecast.image} alt={weatherForecast.imageAlt} />
  <p><span>conditions: </span>{weatherForecast.conditions}</p>
  <p><span>time: </span>{weatherForecast.time}</p>
</div>
);
};

export default WeatherForecast;