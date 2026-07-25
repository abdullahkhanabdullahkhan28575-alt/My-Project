const clock=document.getElementById("clock");
const status=document.getElementById("status");

let alarmTime="";
let alarmSet=false;

function updateClock(){

const now=new Date();

let h=String(now.getHours()).padStart(2,"0");
let m=String(now.getMinutes()).padStart(2,"0");
let s=String(now.getSeconds()).padStart(2,"0");

clock.innerHTML=`${h}:${m}:${s}`;

if(alarmSet){

if(`${h}:${m}`===alarmTime && s==="00"){

alert("⏰ Alarm Ringing!");

alarmSet=false;
status.innerHTML="";

}

}

}

setInterval(updateClock,1000);

updateClock();

function setAlarm(){

alarmTime=document.getElementById("alarmTime").value;

if(alarmTime===""){

alert("Select Alarm Time");

return;

}

alarmSet=true;

status.innerHTML="Alarm Set For : "+alarmTime;

}