import "./App.css";
import {useState, useEffect} from 'react'


function App() {
const [longitude, setlongitude]= useState(null)
const [latitude, setlatitude]= useState(null)

useEffect(()=>{
  const cordinatesApiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q={skopje}&appid=627f2f8c91e540f7514a66b15560a3b3';
  fetch(cordinatesApiUrl)
  .then(res => res.json())
  .then(results =>{
    setlongitude(results[0].lon)
    setlatitude(results[0].lat);
  })
},[])



console.log(longitude)
console.log(latitude)


return (
  <div></div>
);
}

export default App;
