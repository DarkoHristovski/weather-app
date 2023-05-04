import classes from './weather-today.module.css'
import styles from "../../src/global.module.css";

const WeatherToday = (props) =>{

    const weatherIconCode = props.cityData.weather[0].icon;
   const weatherImage= `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`
  
   let tempToCelsius = Math.floor(props.cityData.main.temp - 273,15);
 let minTempToCelsius = Math.floor(props.cityData.main.temp_min - 273,15);
   let maxTempToCelsius = Math.floor(props.cityData.main.temp_max - 273,15);
   let feelsLikeTempToCelsius = Math.floor(props.cityData.main.feels_like - 273,15);
   
   
    return(
    <>
    <div className={`${styles['card-content']} ${styles['weather-today-card']}`}>
    <p> current weather</p>
    <div className="weather-today-upper-section">
    <h3>{props.cityData.name}</h3>
     <img src={weatherImage} alt="weather" />
     <h2>{props.cityData.weather[0].description}</h2>
     <h2>{tempToCelsius} &#x2103;</h2>
     <p>{minTempToCelsius}&#x2103; / {maxTempToCelsius}&#x2103;</p>
    <p> Feels like: {feelsLikeTempToCelsius}&#x2103;</p>
     
     </div>
     <div className="weather-today-down-section">
        
        </div>
        </div>
    </>
    )
}

export default WeatherToday