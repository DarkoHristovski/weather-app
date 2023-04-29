import classes from './weather-today.module.css'

const WeatherToday = (props) =>{

    const weatherIconCode = props.cityData.weather[0].icon;
   const weatherImage= `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`
  
   let tempToCelsius = Math.floor(props.cityData.main.temp - 273,15);
   let minTempToCelsius = Math.floor(props.cityData.main.temp_min - 273,15);
   let maxTempToCelsius = Math.floor(props.cityData.main.temp_max - 273,15);
   let feelsLikeTempToCelsius = Math.floor(props.cityData.main.feels_like - 273,15);



    return(
    <div className={classes.box}>
        <div className="weather-today">
        <p>City: {props.cityData.name}</p>
        <p>Temperature: {tempToCelsius} &#x2103;</p>
        <p>Min: {minTempToCelsius}&#x2103; Max: {maxTempToCelsius}&#x2103; Feels like: {feelsLikeTempToCelsius}&#x2103; </p>
        <p>Main: {props.cityData.weather[0].main}</p>
        <p>Description: {props.cityData.weather[0].description}</p>
        
        <img src={weatherImage} alt="weather" />
        </div>
    </div>
    )
}

export default WeatherToday