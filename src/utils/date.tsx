export const formatDate = (date:string | Date) =>{
    const dateNow = new Date(date);
    const day = dateNow.getDay();
    const todayDate= dateNow.getDate();
    const month = dateNow.getMonth();
    const year = dateNow.getFullYear();
    const dayArray=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const monthArray=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    
    return `${dayArray[day]}, ${monthArray[month]} ${todayDate}, ${year}`
}

export const formatDateAndTime = (dateString:string | Date) => {
    const date = new Date(dateString);

    

    const hours = date.getHours();
    const suffix = hours >= 12 ? "PM" : "AM";
    const formattedHour = (hours % 12) || 12;

    return `${formattedHour} ${suffix}`;
};


export const getDay = (day:string | Date)=>{
   const date = new Date(day);
   const showDay = date.getDay();
   const days =['Mon','Tue', 'Wed','Thu', 'Fri', 'Sat','Sun'];

   return `${days[showDay]}`;
}