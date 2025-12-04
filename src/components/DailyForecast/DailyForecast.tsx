import {getDay} from '../../utils/date';
import style from './DailyForecast.module.css';

type DailyForecastType = {
    time: string[];                // ['2025-12-03', '2025-12-04', ...]
    temperature_2m_max: number[];  // [3.2, 2.2, 5.4, ...]
    temperature_2m_min: number[];  // [-1.1, -1.5, 2.4, ...]
  };


  type DailyForecastProps={
    daily:DailyForecastType
  }

  type DailyItem = {
    date:string;
    max:number;
    min:number;
  }


const DailyForecast = ({daily}:DailyForecastProps) =>{
const days: DailyItem[]= daily.time.map((date, i)=>({
    date,
    max:daily.temperature_2m_max[i],
    min:daily.temperature_2m_min[i]
}));

console.log(daily)
    return(
       <section>
        <h3>Daily Forecast</h3>
        <div className={style['display-flex']}>
           {days.map((x,i)=>{
            return(
                <div  className={style['card']} key={i}>
                <div> {getDay(x.date)}</div>
                   <div className={style['display-flex']}>
                    <p>{x.min}</p>
                    <p>{x.max}</p>
                   </div>
                </div>
            )
           })}
        </div>
       </section>
    )
}

export default DailyForecast;