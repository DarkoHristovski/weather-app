import Card from "./UI/Card"
import WeatherFiveDaysList from './WeatherFiveDaysList'

const WeatherFiveDays = (props) =>{
    console.log(props.haurlyCityData.list)
    return(
        <>
        {props.haurlyCityData.list.map(x=> <Card><WeatherFiveDaysList {...x} /></Card>)}
        </>
    )
}

export default WeatherFiveDays