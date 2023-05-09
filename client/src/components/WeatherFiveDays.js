import Card from "./UI/Card"
import WeatherFiveDaysList from './WeatherFiveDaysList'

const WeatherFiveDays = (props) =>{
    console.log(props.haurlyCityData)
    return(
        <>
        {props.haurlyCityData.list.map(x=> <Card key={x.dt_txt}><WeatherFiveDaysList {...x} /></Card>)}
        </>
    )
}

export default WeatherFiveDays