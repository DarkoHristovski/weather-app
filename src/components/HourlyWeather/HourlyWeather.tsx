import { formatDateAndTime } from "../../utils/date";
import style from './HourlyWeather.module.css';

type hourlyWeatherType = {
  time: string[];
  temperature_2m: number[];
};

type hourlyWeatherProps = {
  hourlyWeather: hourlyWeatherType;
};

const HourlyWeather = ({ hourlyWeather }: hourlyWeatherProps) => {
  const today = new Date().toISOString().split("T")[0];
  const now = new Date();

  // Prevent crash if data is missing or malformed
  if (
    !hourlyWeather ||
    !Array.isArray(hourlyWeather.time) ||
    !Array.isArray(hourlyWeather.temperature_2m) ||
    hourlyWeather.time.length !== hourlyWeather.temperature_2m.length
  ) {
    return <p>Loading hourly weather...</p>;
  }

  // Map and filter safely
  const todayHours = hourlyWeather.time
    .map((t, i) => {
      const date = new Date(t);
      if (isNaN(date.getTime())) return null; // skip invalid dates
      return { time: date, temp: hourlyWeather.temperature_2m[i] };
    })
    .filter((item) => item !== null) // remove nulls
    .filter((item) => item!.time.toISOString().startsWith(today)) // only today
    .filter((item) => item!.time.getHours() >= now.getHours()); // only future hours

  return (
    <section className={style['hourly-weather-section']}>
      <div>
        <p>Hourly Weather</p>

        {todayHours.length === 0 ? (
          <p>No more hourly data for today.</p>
        ) : (
          todayHours.map((hour, i) => (
            <div key={i} className={style['hourly-weather-item']}>
              <p>{formatDateAndTime(hour!.time)}</p>
              <p>{hour!.temp}°</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default HourlyWeather;
