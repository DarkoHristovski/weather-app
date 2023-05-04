import Card from "./UI/Card";
import styles from "../../src/global.module.css";
import classes from './weather-highlihts.module.css';
import windIcon from './../icons/wind-icon.svg';

const WeatherHighlihts = (props) =>{
    let minTempToCelsius = Math.floor(props.cityData.main.temp_min - 273,15);
   let maxTempToCelsius = Math.floor(props.cityData.main.temp_max - 273,15);
   let feelsLikeTempToCelsius = Math.floor(props.cityData.main.feels_like - 273,15);


   let sunrise = props.cityData.sys.sunrise
   let sunriseHour = new Date(sunrise*1000);
   let sunset = props.cityData.sys.sunset
   let sunsetHour = new Date(sunset*1000);

  
   sunriseHour.toLocaleTimeString('en-US');
   // expected output: 1:15:30 AM


    return (
    <div className={styles['card-content']}>
    <p>Today Highlihts</p>
    <div className={styles['display-flex']}>
        <div className={classes.block}>
        <Card>
        <p>Wind</p>
        <img src={windIcon} alt="" />
        <p>{props.cityData.wind.speed} km/h</p>
        </Card>
        <Card><p>Humidity: {props.cityData.main.humidity} %</p></Card>
        </div>
        <div className={classes.block}>
        <Card><p>Min: {minTempToCelsius}&#x2103; Max: {maxTempToCelsius}&#x2103; </p>
    <p>Main: {props.cityData.weather[0].main}</p></Card>
        <Card><p>Visibility: {props.cityData.visibility}km/h</p></Card>
        </div>
   
        <div className={classes.block}>
   <Card><p>Sunrise:{sunriseHour.toLocaleTimeString('en-US')} Sunset:{sunsetHour.toLocaleTimeString('en-US')}</p></Card>
   <Card><p>Feels like: {feelsLikeTempToCelsius}&#x2103;</p></Card>
   </div>
   </div>
  

        
        
    </div>
    )
}


export default WeatherHighlihts