let startTime = 1440;
let time = startTime * 60;

const timerApp = document.querySelector('.timer-app')

function timer() {
    let sec = time > 0 ? time % 60 : 0;
    let min = time > 0 ? Math.floor(time / 60) % 60 : 0;
    let hour = time > 0 ? Math.floor(time / 60 / 60) % 24 : 0;
    let days = time > 0 ? Math.floor(time / 60 / 60 / 24) : 0;



    timerApp.innerHTML = `<p class="time">${days < 10 ? '0' + days : days}:${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}</p>`
    time--;
    if (sec === 0 && min === 0 && hour === 0 && days === 0) {
        clearInterval(interval)
        return
    }
}

let interval = setInterval(timer, 1000)