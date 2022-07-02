
function addZero(i) {
    if(i < 10) {
        i = "0" + i
    }
    return i;
}

function updateClock() {
    const d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());
    let time = h + ":" + m + ":" + s;

    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent =  time;

    setTimeout(updateClock, 1000);    
}

updateClock();

/* another way to write it including AM and PM

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if(h == 0) {
        h = 12;
    }

    if(h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h; -These do the same thing as 
    m = (m < 10) ? "0" + m : m; the if statement in function addZero
    s = (s < 10) ? "0" + s : s; above-

    var time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();
*/