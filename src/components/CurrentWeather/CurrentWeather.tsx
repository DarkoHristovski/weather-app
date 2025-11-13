import { formatDate } from "../../utils/date";

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
  country:string;
};

const CurentWeather = ({ currentWeather, city, country }: CurrentWeatherProps) => {
  return (
    <>
    <section className="current-temp">
      <h2>{city} {country}</h2>
      <p> {currentWeather?.time ? formatDate(currentWeather.time) : ''}</p>
     
      <p>Tempereture: {currentWeather?.temperature_2m}</p>
      </section>
    </>
  );
};

export default CurentWeather;
