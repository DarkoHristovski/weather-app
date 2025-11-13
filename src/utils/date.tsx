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