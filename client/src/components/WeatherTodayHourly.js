import Card from "./UI/Card";
import WeatherTodayHourlyList from "./WeatherTodayHourlyList";
import classes from "./weather-today.module.css";
const WeatherTodayHourly = (props) => {


let todayDatefromApi = props.hourlyToday.list[0].dt;

let todayDate = new Date(todayDatefromApi * 1000);
let date = todayDate.getDate();
let element = [];
let currentElement='';

for(let i =0; i < props.hourlyToday.list.length; i++){
    let currentDate = props.hourlyToday.list[i].dt;
    let checkDateFromApi = new Date(currentDate * 1000);
    let daten = checkDateFromApi.getDate();
   if(daten === date){
    currentElement = props.hourlyToday.list[i];
   element.push(currentElement)
   }
}


    return(
        <div className={classes['hourly-cards']}>
        {element.map(x=><Card className={classes['top-card-background']} 
        key={x.dt}><WeatherTodayHourlyList {...x}/></Card>)}
        </div>
    )
}

export default WeatherTodayHourly;