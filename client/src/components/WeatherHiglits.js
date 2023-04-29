const WeatherHighlihts = (props) =>{
    <>
    <p>Wind: {props.cityData.wind.speed} km/h</p>
        <p>Humidity: {props.cityData.main.humidity} %</p>
    </>
}


export default WeatherHighlihts