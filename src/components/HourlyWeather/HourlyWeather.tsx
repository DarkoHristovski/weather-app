
import { useState } from "react";
import { formatDateAndTime } from "../../utils/date";
import style from "./HourlyWeather.module.css";

type hourlyWeatherType = {
  time: string[];
  temperature_2m: number[];
};

type hourlyWeatherProps = {
  hourlyWeather: hourlyWeatherType;
};


const HourlyWeather = ({ hourlyWeather }: hourlyWeatherProps) => {
  const now = new Date();

  if (
    !hourlyWeather ||
    !Array.isArray(hourlyWeather.time) ||
    !Array.isArray(hourlyWeather.temperature_2m)
  ) {
    return <p>Loading hourly weather...</p>;
  }

  // GROUP BY DAY
  const groupedByDay: Record<string, { time: Date; temp: number }[]> = {};

  hourlyWeather.time.forEach((t, i) => {
    const date = new Date(t);
    if (isNaN(date.getTime())) return;

    const day = date.toLocaleDateString("en-CA"); 

    if (!groupedByDay[day]) groupedByDay[day] = [];
    groupedByDay[day].push({ time: date, temp: hourlyWeather.temperature_2m[i] });
  });

  // PRAZNI DENOVI? SORT
  const days = Object.keys(groupedByDay).sort();

  // SELECT STATE
  const [selectedDay, setSelectedDay] = useState(days[0]);

  // HOURLY FOR SELECTED DAY
  let hours = groupedByDay[selectedDay] || [];

  // If selected day is today → filter out past hours
  const today = new Date().toISOString().split("T")[0];
  if (selectedDay === today) {
    hours = hours.filter((h) => h.time.getHours() >= now.getHours() + 1);
  }

  return (
    <section className={`border-radius ${style["hourly-weather-section"]}`}>
      <div>
      <div className={style['displey-flex-item']}>
        <p>Hourly Forecast</p>

        {/* DAY SELECTOR */}
       
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {days.map((d) => (
            <option key={d} value={d}>
              {new Date(d).toLocaleDateString("en-US", { weekday: "long" })}
            </option>
          ))}
        </select>
        </div>
        {/* HOURS LIST */}
        {hours.length === 0 ? (
          <p>No hourly data for this day.</p>
        ) : (
          hours.map((hour, i) => (
            <div key={i} className={style["hourly-weather-item"]}>
              <p>{formatDateAndTime(hour.time)}</p>
              <p>{hour.temp}°</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default HourlyWeather