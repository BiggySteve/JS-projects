function addZero(i) {
    if(i < 10) {
        i = "0" + i;
    }
    return i;
}

function updateClock() {
    let d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());
    let time = h + ':' + m + ":" + s;

    document.getElementById("myClockDisplay").innerText = time;
    document.getElementById("myClockDisplay").textContent = time;

    setTimeout(updateClock, 1000);
}

updateClock();
