import React from "react";
import {useState, useEffect} from 'react'
import Form from "./components/UI/Form";
import "./App.css";

function App() {
const [longitude, setlongitude]= useState(null)
const [latitude, setlatitude]= useState(null)
const [city, setCity]= useState('Barcelona')

const addCityHandler = (event) =>{
  event.preventDefault();
  setCity(city)
}

const cityChangeHandler = (event) =>{
  setCity(event.target.value);
}




const apiKey= '627f2f8c91e540f7514a66b15560a3b3';
const cordinatesApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
const currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
const hourlyWeatherApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`


useEffect(()=>{
  fetch(cordinatesApiUrl)
  .then(res => res.json())
  .then(results =>{
    setlongitude(results[0].lon)
    setlatitude(results[0].lat);
  })
},[cordinatesApiUrl])


console.log(currentWeatherApi)

  return (
    <div>
      <Form cityChangeHandler={cityChangeHandler} city={city} addCityHandler={addCityHandler}  />
    </div>
  );

}

export default App;
