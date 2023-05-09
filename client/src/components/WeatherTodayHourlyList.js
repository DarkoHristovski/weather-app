import classes from "./weather-today.module.css";



const WeatherTodayHourlyList = (props) =>{
    const weatherIconCode = props.weather[0].icon;
    const weatherImage = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;
    let tempToCelsius = Math.floor(props.main.temp - 273, 15);
    let minTempToCelsius = Math.floor(props.main.temp_min - 273, 15);
    let maxTempToCelsius = Math.floor(props.main.temp_max - 273, 15);

return(
    <><p>{props.dt_txt}</p>
       <h2>{tempToCelsius}</h2>
       <p>{props.weather[0].description}</p>
       <div className={classes["weather-icon-wrap"]}>
       <img src={weatherImage} alt="" />
    </div>
    </>
)


}

export default WeatherTodayHourlyList;