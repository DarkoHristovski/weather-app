import { formatDate } from "../../utils/date";
import style from "./currentWeather.module.css";

type CurrentWeatherType = {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
  cloud_cover: number;
  precipitation: number;
  rain: number;
  showers: number;
  snowfall: number;
  weather_code: number;
  wind_direction_10m: number;
  wind_gusts_10m: number;
  wind_speed_10m: number;
};

type CurrentWeatherProps = {
  currentWeather: CurrentWeatherType | null;
  city: string;
  country: string;
};

const CurentWeather = ({
  currentWeather,
  city,
  country,
}: CurrentWeatherProps) => {
  console.log();
  return (
    <>
      <section className="current-section">
        <div className={`border-radius ${style["current-temp"]}`}>
          <h2>
            {city} {country}
          </h2>
          <p> {currentWeather?.time ? formatDate(currentWeather.time) : ""}</p>

          <p>Tempereture: {currentWeather?.temperature_2m}</p>
        </div>
        <div>
          <div>Feels like{currentWeather?.apparent_temperature}</div>
          <div>Hymidity:{currentWeather?.relative_humidity_2m}</div>
          <div>Wind:{currentWeather?.wind_speed_10m}</div>
          <div>Precipation:{currentWeather?.precipitation}</div>
        </div>
      </section>
    </>
  );
};

export default CurentWeather;
