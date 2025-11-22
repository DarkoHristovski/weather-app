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

  // prevent crash
  if (
    !hourlyWeather ||
    !Array.isArray(hourlyWeather.time) ||
    !Array.isArray(hourlyWeather.temperature_2m)
  ) {
    return <p>Loading hourly weather...</p>;
  }

  const todayHours = hourlyWeather.time
  .map((t,i)=>({time:t, temp:hourlyWeather.temperature_2m[i]}))
  .filter((item)=>item.time.startsWith(today));
  console.log('todayHours', todayHours);

  
  return (
    <section className={style['hourly-weather-section']}>
      <div>
        <p>Hourly Weather</p>

        {todayHours.map((hour, i) => (
          <div key={i} className={style['hourly-weather-item']}>
            <p>{formatDateAndTime(hour.time)}</p>
            <p>{hour.temp}°</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HourlyWeather;
