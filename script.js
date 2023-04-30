const time = document.getElementById("time");
const alarm = document.getElementById("alrm");
const button = document.getElementById("btn");
const stopbutton = document.getElementById("sbtn");


const alarmsound = new Audio("./audio_file.mp3.wav");
let alarmplayed;
button.addEventListener("click", function () {
  alarmplayed=false;
  alert(`Alarm set for ${alarm.value}`);
  // console.log("alarm set");
});
setInterval(() => {
  d = new Date();
  htime = d.getHours();

  //  padStart() method to add a leading zero if the value is a single digit.
  // The padStart() method takes two arguments: the first argument is the total length of the resulting string (including the original string), and the second argument is the character to use for padding (in this case, the character is "0").

  mtime = d.getMinutes().toString().padStart(2, "0"); 
  stime = d.getSeconds().toString().padStart(2, "0");

  let hmstime = `${htime} : ${mtime} : ${stime}`;
  time.innerHTML = hmstime;

if(alarmplayed===false){ 
  console.log("alarm played false")
  if (alarm.value == `${htime}:${mtime}`) {
    // console.log("it works");
       alarmsound.play();
       alarmsound.addEventListener("ended",()=>{
        console.log("alarm played true")
        alarmplayed=true;
       })
       
  }}
}, 1000);

stopbutton.addEventListener("click",()=>{
  alarmsound.pause();
  alarmplayed=true;

})