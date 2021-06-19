const hour = document.getElementById('hour-hand').style;
const minute = document.getElementById('minute-hand').style;
const second = document.getElementById('second-hand').style;
const digital = document.getElementById('digital');

setInterval(setClock, 1000);

function setClock() {

    const date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    const hourDeg = 30;
    const minuteDeg = 6;
    const secondDeg = 6;

    let setHour = hh * hourDeg;
    const setMinute = mm * minuteDeg;
    const setSecond = ss * secondDeg;

    setHour += (setMinute/6/60*30);

    minute.setProperty('--mh-degrees', `${setMinute}deg`);
    second.setProperty('--sh-degrees', `${setSecond}deg`);
    hour.setProperty('--hh-degrees', `${setHour}deg`);

    if ( hh > 12 ) {
        hh -= 12;
    };
    if ( ss < 10 ) {
        ss = `0${ss}`;
    };
    if ( mm < 10 ) {
        mm = `0${mm}`;
    };

    digital.innerHTML = `${hh}:${mm}:${ss} CST`

}

setClock();