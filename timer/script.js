const Days = document.getElementById("Days")
const Hours = document.getElementById("Hours")
const Minutes = document.getElementById("Minutes")
const Seconds = document.getElementById("Seconds")

function countDown(){
    const newYear = new Date("1 jan 2023")
    const currentTime = new Date();
    const tSeconds = (newYear - currentTime) / 1000;
    const d = Math.floor(tSeconds / 3600 /24);
    const h = Math.floor(tSeconds / 3600) % 24;
    const m = Math.floor(tSeconds / 60) % 60 ;
    const s = Math.floor(tSeconds) % 60;
    console.log(d, h , m, s);

    Days.innerHTML = d;
    Hours.innerHTML = h;
    Minutes.innerHTML = m;
    Seconds.innerHTML = s;

}

countDown()
setInterval(countDown, 1000)