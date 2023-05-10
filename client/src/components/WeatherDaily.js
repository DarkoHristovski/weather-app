const WeatherDaily = (props) =>{
console.log(props.hourlyToday.list[2].dt)

let ApiArr = props.hourlyToday.list[0].dt;
let day = new Date();
let today = day.getDate();
let secondDay = day.setDate(day.getDate() +1)
let thirdDay = day.setDate(day.getDate() +2)
let fourthDay = day.setDate(day.getDate() +3)
let fifthDay = day.setDate(day.getDate() +4)


console.log(today)
console.log(secondDay)
console.log(thirdDay)
console.log(fourthDay)
console.log(fifthDay)
for(let i = 0; i < ApiArr.length; i++){
    console.log(ApiArr[i])
}

    return (
        <div className="weather-daily-section">

        </div>
    )
}

export default WeatherDaily