function clockTimes() {
    setInterval(function () {
        document.getElementById('root').innerHTML = getClock();
    }, 1000);
}

function getClock() {
    let date = new Date()
    return twoDigit(date.getHours()) + ":" + twoDigit(date.getMinutes()) + ':' + twoDigit(date.getSeconds())
}




function twoDigit(number) {
    return number < 10 ? '0' + number : number;
}
clockTimes();