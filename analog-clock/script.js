var digitalDisplay = document.querySelector('.meter');
setInterval (displayDigitalTime, 1000);
function displayDigitalTime (){
    var now = new Date();
    var hr = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    digitalDisplay.innerHTML = 'The time now is: ' + hr + ':' + min + ':'+ sec;
}

var HOURHAND = document.querySelector("#hour");
var MINUTEHAND = document.querySelector("#minute");
var SECONDHAND = document.querySelector("#second"); 

setInterval (displayAnalogTime, 1000);
function displayAnalogTime (){
        var now = new Date();
        var hr = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();

        var secAngle = sec * 6;
        var minAngle = min * 6 + sec/60 * 6;
        var hrAngle = hr * 30 + min/60 * 30 + sec/3600 * 30;
    
        document.getElementById('hour').style.transform = 'rotate(' + hrAngle + 'deg)';
        document.getElementById('minute').style.transform = 'rotate(' + minAngle + 'deg)';
        document.getElementById('second').style.transform = 'rotate(' + secAngle + 'deg)';
}