import classes from "./weather-today.module.css";
import styles from "../../src/global.module.css";
import locationIcon from "./../icons/location-icon.svg";
import windIcon from "./../icons/wind-icon.svg";
import humidityIcon from "./../icons/humidity-icon.svg";
import sunsetIcon from "./../icons/sunset-icon.svg";
import sunriseIcon from "./../icons/sunrise-icon.svg";
import visibilityIcon from "./../icons/visibility-icon.svg";
import airPresureIcon from "./../icons/air-presure-icon.svg";

const WeatherToday = (props) => {
  const weatherIconCode = props.cityData.weather[0].icon;
  const weatherImage = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;

  // Weather Highlihts
  let sunrise = props.cityData.sys.sunrise;
  let sunriseHour = new Date(sunrise * 1000);
  let sunset = props.cityData.sys.sunset;
  let sunsetHour = new Date(sunset * 1000);
  sunriseHour.toLocaleTimeString("en-US");
  // expected output: 1:15:30 AM

  let todayDate = new Date();

  let showDate = todayDate.getDate();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[todayDate.getMonth()];
  let year = todayDate.getFullYear();

  let tempToCelsius = Math.floor(props.cityData.main.temp - 273, 15);
  let minTempToCelsius = Math.floor(props.cityData.main.temp_min - 273, 15);
  let maxTempToCelsius = Math.floor(props.cityData.main.temp_max - 273, 15);
  let feelsLikeTempToCelsius = Math.floor(
    props.cityData.main.feels_like - 273,
    15
  );

  return (
    <>
      <div className={`${styles["card-content"]} ${classes['today-weather-card']} ${styles["display-flex"]}`}>
        <header className={`${classes['header-today-weather-card']} ${styles["display-flex"]}`}>
          <p>Current Weather</p> <p>{`${showDate} ${month} ${year}`}</p>
        </header>
            <div className={`${styles["display-flex"]} ${styles["justify-center"]}`}>
              <img
                className={styles["location-img-wrapper"]}
                src={locationIcon}
                alt=""
              />
              <h3>{props.cityData.name}</h3>
            </div>
          <div className={`${classes["forecast-main-container"]}`}>
            <div className={`${styles["display-flex"]} ${classes["justify-space-around"]}`}>
          <div className={classes["weather-icon-wrap"]}>
            <img src={weatherImage} alt="weather" />
          </div>
          <div className={classes['weather-forecast-temp']}>
          <h2>{tempToCelsius} &#x2103;</h2>
          <p> Feels like: {feelsLikeTempToCelsius}&#x2103;</p>
          <p>{minTempToCelsius}&#x2103; / {maxTempToCelsius}&#x2103;</p>
          </div>
          </div>
          <h2>{props.cityData.weather[0].description}</h2>
         </div>
          <div className={classes["weather-highlights"]}>
            <div>
            <p>
              <span>
                <img
                  className={classes["highlihts-icon"]}
                  src={sunriseIcon}
                  alt="sunrise"
                />
                Sunrise:
              </span>{" "}
              <span> {sunriseHour.toLocaleTimeString("en-US")}</span>
            </p>
            <p>
              <span>
                <img
                  className={classes["highlihts-icon"]}
                  src={sunsetIcon}
                  alt="sunset"
                />
                Sunset:
              </span>
              <span> {sunsetHour.toLocaleTimeString("en-US")}</span>
            </p>
            </div>
            <div>
            <p>
              <span>
                <img
                  className={classes["highlihts-icon"]}
                  src={windIcon}
                  alt="sunset"
                />
                Wind:
              </span>
              <span> {props.cityData.wind.speed} km/h</span>
            </p>
            <p>
              <span>
                <img
                  className={classes["highlihts-icon"]}
                  src={humidityIcon}
                  alt="humidity"
                />
                Humidity:
              </span>
              <span>{props.cityData.main.humidity} %</span>
            </p>
            </div>
            <div>
            <p>
              <span>
                <img
                  className={classes["highlihts-icon"]}
                  src={visibilityIcon}
                  alt="visibility"
                />
                Visibility:
              </span>
              <span> {props.cityData.visibility} km/h</span>
            </p>
            <p>
              <span>
                <img
                  className={classes["highlihts-icon"]}
                  src={airPresureIcon}
                  alt="sunset"
                />
                Air Pressure:
              </span>
              <span> {props.cityData.main.pressure} hPa</span>
            </p>
            </div>
          </div>
       
      </div>
    </>
  );
};

export default WeatherToday;
