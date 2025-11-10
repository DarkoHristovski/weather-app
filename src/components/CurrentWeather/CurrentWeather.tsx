
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
 
  
  type CurrentWeatherProps={
    currentWeather:CurrentWeatherProps| null;
    city: string;
  }


const CurentWeather = ({currentWeather, city}:CurrentWeatherProps) =>{
console.log(currentWeather)
    return(<>
    <h2>{city}</h2>
    <p>Tempereture: {currentWeather?.temperature_2m}</p>
    </>)

}

export default CurentWeather