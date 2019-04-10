document.addEventListener('DOMContentLoaded', function () {
    var HOURHAND = document.querySelector("#hour");
    var MINUTEHAND = document.querySelector("#minute");
    var SECONDHAND = document.querySelector("#second");

    var date = new Date();
    console.log(date);
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

    var hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
    var minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
    var secPosition = sec * 360 / 60;

    function runTheClock() {

        hrPosition = hrPosition + (3 / 360);
        minPosition = minPosition + (6 / 60);
        secPosition = secPosition + 6;

        HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
        MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
        SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

    }

    var interval = setInterval(runTheClock, 1000);

});