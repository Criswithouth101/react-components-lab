const WeatherIcon = (weatherIcon) => {
    console.log(weatherIcon)
    return (
        <img src={weatherIcon.image} alt={weatherIcon.imageAlt} />
     );
};
export default WeatherIcon