const WeatherFiveDaysList = (props)=>{
let todayDate= new Date()
let showTodayDate= todayDate.getDate();
    let dateFromApi = props.dt
    let a = new Date(dateFromApi * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.toLocaleTimeString("en-US");
    let time = `${date} ${month} ${hour}`
    let tommorowDate = todayDate.getDate()+1;


    const weatherIconCode = props.weather[0].icon;
    const weatherImage = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;
    console.log(`${tommorowDate}`)


    let expression='';
    
         if(date === showTodayDate){
            expression = <div> <p>{time}</p>
            <h2>{props.main.temp}</h2>
            <img src={weatherImage} alt="" />
            <h2>{props.weather[0].description}</h2> </div>
        }else if(date === tommorowDate ){
            expression = <div> <p>{time}</p>
            <h2>{props.main.temp}</h2>
            <img src={weatherImage} alt="" />
            <h2>{props.weather[0].description}</h2> </div>
            }else{
                expression = <p>this is another Date {tommorowDate}</p>
            }
   
  return(
    <div>
    
{expression}


</div>

)
         }   
    
   



  
    
    
 
export default WeatherFiveDaysList