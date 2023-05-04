import Card from "./UI/Card";
import styles from "../../src/global.module.css";
import classes from "./weather-highlihts.module.css";
import windIcon from "./../icons/wind-icon.svg";
import humidityIcon from "./../icons/humidity-icon.svg";
import sunsetIcon from "./../icons/sunset-icon.svg";
import sunriseIcon from "./../icons/sunrise-icon.svg";
import visibilityIcon from "./../icons/visibility-icon.svg";
import airPresureIcon from "./../icons/air-presure-icon.svg";






const WeatherHighlihts = (props) => {
  let sunrise = props.cityData.sys.sunrise;
  let sunriseHour = new Date(sunrise * 1000);
  let sunset = props.cityData.sys.sunset;
  let sunsetHour = new Date(sunset * 1000);

  sunriseHour.toLocaleTimeString("en-US");
  // expected output: 1:15:30 AM

  return (
    <div className={styles["card-content"]}>
      <p>Today Highlihts</p>
      <div className={styles["display-flex"]}>
      <Card>
            <p>Sunrise:</p> 
          <div className={classes["card-icon-wrapper"]}>
            <div className={classes["img-wrapper"]}>
              <img src={sunriseIcon} alt="" />
            </div>
          </div>
          <p>
            {sunriseHour.toLocaleTimeString("en-US")}
          </p>
        </Card>
        <Card>
        <p>Sunset:</p>
        <div className={classes["img-wrapper"]}>
              <img src={sunsetIcon} alt="" />
            </div>
        <p>
            {sunsetHour.toLocaleTimeString("en-US")}
          </p>
        </Card>
        <Card>
          <p>Wind</p>
          <div className={classes["img-wrapper"]}>
            <img src={windIcon} alt="" />
          </div>
          <p>{props.cityData.wind.speed} km/h</p>
        </Card>
        </div>
       <div className={styles["display-flex"]}>
       <Card>
          <p>Humidity:</p>
          <div className={classes["img-wrapper"]}>
            <img src={humidityIcon} alt="" />
          </div>
          <p>{props.cityData.main.humidity} %</p>
        </Card>
        <Card>
        <p>Visibility:</p>
        <div className={classes["img-wrapper"]}>
              <img src={visibilityIcon} alt="" />
            </div>
        <p>
        <p>{props.cityData.visibility} km/h</p>
          </p>
        </Card>
        <Card>
        <p>Air Pressure:</p>
        <div className={classes["img-wrapper"]}>
              <img src={airPresureIcon} alt="" />
            </div>
        <p>
        <p>{props.cityData.main.pressure} hPa</p>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default WeatherHighlihts;
