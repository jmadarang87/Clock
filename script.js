const hour = document.getElementById('hour-hand').style;
const minute = document.getElementById('minute-hand').style;
const second = document.getElementById('second-hand').style;

setInterval(setClock, 1000);

function setClock() {

    const date = new Date();
    let hh = date.getHours() * 30;
    const mm = date.getMinutes() * 6;
    const ss = date.getSeconds() * 6;

    hh += (mm/6/60*30);

    minute.setProperty('--mh-degrees', `${mm}deg`);
    second.setProperty('--sh-degrees', `${ss}deg`);
    hour.setProperty('--hh-degrees', `${hh}deg`);

    // if ( hh > 12 ) {
    //     console.log(hh);
    //     const newHour = (((hh - 12) * 30) + ( mm / 6)) * 6;
    //     hour.setProperty('--hh-degrees', `${newHour}deg`);
    //     } else {
    //     hour.setProperty('--hh-degrees', `${hh}deg`);
    //     } 

}

setClock();