import classes from "./weather-today.module.css";
import styles from "../../src/global.module.css";
import locationIcon from "./../icons/location-icon.svg";

const WeatherToday = (props) => {
  const weatherIconCode = props.cityData.weather[0].icon;
  const weatherImage = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;

  let tempToCelsius = Math.floor(props.cityData.main.temp - 273, 15);
  let minTempToCelsius = Math.floor(props.cityData.main.temp_min - 273, 15);
  let maxTempToCelsius = Math.floor(props.cityData.main.temp_max - 273, 15);
  let feelsLikeTempToCelsius = Math.floor(
    props.cityData.main.feels_like - 273,
    15
  );

  return (
    <>
      <div className={`${styles["card-content"]} ${styles["weather-today-card"]}`}>
        <div className={classes['weather-today-card-section']}>
          <div className={styles['display-flex']}>
          <div className={`${styles['display-flex']} ${styles['justify-center']}`}>
            <img className={styles['location-img-wrapper']} src={locationIcon} alt="" />
            <h3>{props.cityData.name}</h3>
            </div>  
          </div>
          <div className={classes['weather-icon-wrap']}>
          <img src={weatherImage} alt="weather" />
          </div> 
          <h2>{tempToCelsius} &#x2103;</h2>
          <h2>{props.cityData.weather[0].description}</h2>
         
          <h3>
            {minTempToCelsius}&#x2103; / {maxTempToCelsius}&#x2103;
          </h3>
          <h3> Feels like: {feelsLikeTempToCelsius}&#x2103;</h3>
        </div>
        <div className="weather-today-down-section"></div>
      </div>
    </>
  );
};

export default WeatherToday;
