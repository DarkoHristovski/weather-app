import { useState, useEffect } from "react";
import { getCoordinates } from "./services/geocodingService";
import { getWeather } from "./services/weatherService";
import Header from "../src/components/Header/Header";
import Search from "./components/Search/Search";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (newCity: string) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);
    setCity(newCity);
    try {
      const coords = await getCoordinates(newCity);
      const weather = await getWeather(coords.latitude, coords.longitude);
      setWeatherData({ city: coords.name, weather });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const {current, hourly, daily}= weatherData?.weather || {};

  console.log(daily)


  return (
    <>
      <Header />
      <Search handleSearch={handleSearch} />
      
  
    </>
  );
}

export default App;
