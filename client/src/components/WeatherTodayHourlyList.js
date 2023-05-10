import classes from "./weather-today.module.css";



const WeatherTodayHourlyList = (props) =>{
    const weatherIconCode = props.weather[0].icon;
    const weatherImage = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;
    let tempToCelsius = Math.floor(props.main.temp - 273, 15);
    let minTempToCelsius = Math.floor(props.main.temp_min - 273, 15);
    let maxTempToCelsius = Math.floor(props.main.temp_max - 273, 15);

    let date = new Date(props.dt * 1000);
    let hour = date.getHours();
    let minutes = date.getMinutes();


return(
    <><p>{`${hour}:0${minutes} Uhr`}</p>
     <div className={classes["img-wrapper-hourly-cards"]}>
        <div className={`${classes['align-center']}`}>
    <div className={`${classes['img-wrapper-hourly-cards']} ${classes['forecast-main-container']}`}>
    <img className={classes['img-hourly-cards']} src={weatherImage} alt="weather" />
       </div>
       <h2>{tempToCelsius}&#x2103;</h2>
       <h3>{props.weather[0].description}</h3>
       </div>
       </div>
    </>
)


}

export default WeatherTodayHourlyList;