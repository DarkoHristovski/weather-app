import React from "react";
import {useState} from 'react'
import useFetch from "./hooks/use-fetch";
import Form from "./components/UI/Form";
import WeatherToday from "./components/WeatherToday";
import WeatherDaily from "./components/WeatherDaily";
import WeatherTodayHourly from "./components/WeatherTodayHourly";
import Main from "./components/UI/Main";
import Card from "./components/UI/Card";

import "./App.css";


function App(props) {
const [longitude, setlongitude]= useState()
const [latitude, setlatitude]= useState()
const [city, setCity]= useState('')
const [showCity, setShowCity]= useState(false)
const [inputCity, setInputCity]= useState({})
const [hourlyWeatherApiInput, setHourlyWeatherApiInput]= useState({})



const apiKey= '627f2f8c91e540f7514a66b15560a3b3';
const cordinatesApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
const currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
const hourlyWeatherApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`


  if(city !== ''){
      fetch(cordinatesApiUrl)
      .then(res => res.json())
      .then(results =>{
        setlongitude(results[0].lon)
        setlatitude(results[0].lat)
      })
      .catch(err => console.log())
  }

const [cityData] = useFetch(currentWeatherApi);
const [hourlyWeatherApiData] = useFetch(hourlyWeatherApi);
const addCityHandler = (event) =>{
  event.preventDefault();
  if(city===''){
    return
  }
  else{
    setShowCity(true)
    setInputCity(cityData)
    setHourlyWeatherApiInput(hourlyWeatherApiData)
    setCity('')
  }
  
}

  return (
  <>
  <Form setCity={setCity} addCityHandler={addCityHandler} city={city}/>
  <Main>

    <div className="main-top-section display-flex flex-properties">
  <Card>{showCity &&  <WeatherToday cityData={inputCity} /> }</Card>
{showCity &&  <WeatherTodayHourly hourlyToday={hourlyWeatherApiInput} /> }
   </div>
   {showCity &&  <WeatherDaily hourlyToday={hourlyWeatherApiInput} /> }
    </Main>
    </>
  );

}

export default App;
