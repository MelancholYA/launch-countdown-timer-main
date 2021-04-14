var sec = 5;
var min = 5;
var hr = 5;
var days = 5;

const updateTime = () => {
  sec -= 1;
  if (sec < 0) {
    sec = 59;
    min = min - 1;
  }
  if (min < 0) {
    min = 59;
    hr -= 1;
  }
  if (hr < 0) {
    hr = 23;
    days -= 1;
  }
  document.querySelector("#days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector("#hours").innerHTML = hr < 10 ? `0${hr}` : hr;
  document.querySelector("#minutes").innerHTML = min < 10 ? `0${min}` : min;
  document.querySelector("#seconds").innerHTML = sec < 10 ? `0${sec}` : sec;
};
const timeVal = setInterval(updateTime, 1000);
