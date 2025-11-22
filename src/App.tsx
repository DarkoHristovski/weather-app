import { useState, useEffect } from "react";
import { getCoordinates } from "./services/geocodingService";
import './App.css';
import { getWeather } from "./services/weatherService";
import Header from "../src/components/Header/Header";
import Search from "./components/Search/Search";
import CurentWeather from "./components/CurrentWeather/CurrentWeather";
import HourlyWeather from "./components/HourlyWeather/HourlyWeather";

function App() {
  //const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (newCity: string) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const coords = await getCoordinates(newCity);
      const weather = await getWeather(coords.latitude, coords.longitude);


      setWeatherData({ city: coords.name, country: coords.country, weather });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const { current, hourly, daily } = weatherData?.weather || {};
  const { city = "", country = "" } = weatherData || {};

  return (
    <>
      <Header />
      <Search handleSearch={handleSearch} />

      {loading && <h1>Loading....</h1>}

      {error && <h2>{error}</h2>}

{ weatherData && (
      <div className="container">
        <div className="flex-container">
          <div className="left">
            <CurentWeather
              country={country}
              city={city}
              currentWeather={current}
            />
          </div>
          <div className="right">
          <HourlyWeather hourlyWeather={hourly} />
          </div>
        </div>
      </div>
      )}
    </>
  );
}

export default App;
