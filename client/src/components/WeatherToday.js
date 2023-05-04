import classes from './weather-today.module.css'
import styles from "../../src/global.module.css";

const WeatherToday = (props) =>{

    const weatherIconCode = props.cityData.weather[0].icon;
   const weatherImage= `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`
  
   let tempToCelsius = Math.floor(props.cityData.main.temp - 273,15);

   
   
    return(
    <>
    <div className={`${styles['card-content']} ${styles['weather-today-card']}`}>
    <div className="weather-today-upper-section">
     <img src={weatherImage} alt="weather" />
     <p>{tempToCelsius} &#x2103;</p>
     <p>Description: {props.cityData.weather[0].description}</p>
     </div>
     <div className="weather-today-down-section">
        <p>City: {props.cityData.name}</p>
       
      
        </div>
        </div>
    </>
    )
}

export default WeatherToday