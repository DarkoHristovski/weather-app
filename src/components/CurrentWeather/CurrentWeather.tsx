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
  const details = [
    { label: "Feels like", value: currentWeather?.apparent_temperature },
    { label: "Humidity", value: currentWeather?.relative_humidity_2m },
    { label: "Wind", value: currentWeather?.wind_speed_10m },
    { label: "Precipitation", value: currentWeather?.precipitation },
  ];
  
  console.log(details)
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
          {details.map((x,i)=>{
            return(<div key={i}>
              <p>{x.label}</p>
              <p>{x.value}</p>
              </div>)
          })}
        </div>
      </section>
    </>
  );
};

export default CurentWeather;
