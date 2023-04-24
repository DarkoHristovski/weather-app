import "./App.css";
import {useState, useEffect} from 'react'
import Form from "./components/UI/Form";


function App() {
const [longitude, setlongitude]= useState(null)
const [latitude, setlatitude]= useState(null)


const apiKey= '627f2f8c91e540f7514a66b15560a3b3';
const cordinatesApiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q={frankfurt}&appid=627f2f8c91e540f7514a66b15560a3b3';

const currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
const hourlyWeatherApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`



useEffect(()=>{
  fetch(cordinatesApiUrl)
  .then(res => res.json())
  .then(results =>{
    setlongitude(results[0].lon)
    setlatitude(results[0].lat);
  })
},[])



console.log(longitude)
console.log(latitude)

console.log(currentWeatherApi)

console.log(hourlyWeatherApi)

useEffect(()=>{
  const cordinatesApiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q={skopje}&appid=627f2f8c91e540f7514a66b15560a3b3';
  fetch(cordinatesApiUrl)
  .then(res => res.json())
  .then(results =>{
    setlongitude(results[0].lon)
    setlatitude(results[0].lat);
  })
},[])


  return (
    <div>
      <Form/>
    </div>
  );

}

export default App;
