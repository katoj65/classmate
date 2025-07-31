class Time{

getCurrentTime(){
const now = new Date();
let date = now.toDateString();
let day=now.toLocaleDateString('en-US', { weekday: 'short' });;
let month=now.getMonth();
let year=now.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let ampm = hours >= 12 ? 'PM' : 'AM';
let time = hours+':'+minutes+' '+ampm;

return {
date: date,
time: time,
day: day,
month: month,
year: year,
hours: hours,
minutes: minutes,
seconds: seconds,
ampm: ampm,
dateTime:new Date().toLocaleDateString('en-US', {
weekday: 'long',
year: 'numeric',
month: 'long',
day: 'numeric'
}),


};
}






}

export default Time;
