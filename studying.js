
var hours = 00;
var mins = 00;
var seconds = 00;
var appendSeconds = document.getElementById("seconds");
var appendMinutes = document.getElementById("minutes");
var appendHours = document.getElementById("hours");
var buttonStop = document.getElementById("stop-study");
var buttonStart = document.getElementById("start");
var start, stop;

//stores timer values
var interval; 
document.getElementById("output").innerHTML = nickname + ", you are currently studying " + subject + " with x num people. Press start to begin your study session, press stop to end it. ";
function startTimer(){
  console.log('timer started');
  start = Date.now();
  console.log(start);
  seconds++
  if(seconds < 9){
      appendSeconds.innerHTML = "0" + seconds;
  }if(seconds  > 9){
      appendSeconds.innerHTML = seconds;
  } if (seconds >60) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innterHTML = "0" + 0;
  } if (minutes > 9){
      appendMinutes.innerHTML = minutes;
  }
  if(minutes > 60){
      hours++;
      appendHours.innerHTML = "0" + seconds;
      minutes = 0;
      appendMinutes.innerHTML = "0" + 0;
  }
  if(hours > 9){
      appendHours.innerHTML = hours;
  }
}

function stopTimer(){
    stop = Date.now();
    console.log(stop);
}
var timePassed = stop - start; 
/*
buttonStop.onclick() = function(){
    clearInterval(interval);
} */
