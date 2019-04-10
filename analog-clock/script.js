document.addEventListener("DOMContentLoaded", function(event) { 
    var now = new Date(),
        hr = now.getHours(),
        min = now.getMinutes(),
        seconds = now.getSeconds();

    var secondsAngle = seconds*6;
    var minAngle = min*6 + seconds/60 * 6;
    var hourAngle = hr*30 + min/60 * 30 + seconds/3600 * 30;

    adjustArms(hourAngle, minAngle, secondsAngle);

    function updateArmsLocation() {
        secondsAngle += 6;
        minAngle += 0.1;
        hourAngle += 1/120;

        adjustArms(hourAngle, minAngle, secondsAngle);
    }

    function adjustArms(a,b,c) {
        document.getElementById('hour').style.transform = 'rotate(' + a +'deg)';
        document.getElementById('minute').style.transform = 'rotate(' + b +'deg)';
        document.getElementById('second').style.transform = 'rotate(' + c +'deg)';
    }

    setInterval(updateArmsLocation, 1000);

});


