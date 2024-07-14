var i = 10;

let timerId = setInterval(function () {
    var bottom1 = document.querySelector(".bottom1");
    var bottom2 = document.querySelector(".bottom2");
    var bottom3 = document.querySelector(".bottom3");
    if(i == 10) {  
    bottom1.style.filter = "opacity(" + i + "%)";
    bottom2.style.filter = "opacity(" + i + "%)";
    bottom3.style.filter = "opacity(" + i + "%)";
    i = 20;
    } else if (i == 20){
        bottom1.style.filter = "opacity(" + i + "%)";
        bottom2.style.filter = "opacity(" + i + "%)";
        bottom3.style.filter = "opacity(" + i + "%)";
        i = 30;
    } else if (i == 30){
        bottom1.style.filter = "opacity(" + i + "%)";
        bottom2.style.filter = "opacity(" + i + "%)";
        bottom3.style.filter = "opacity(" + i + "%)";
        i = 40;
    } else if (i == 40){
        bottom1.style.filter = "opacity(" + i + "%)";
        bottom2.style.filter = "opacity(" + i + "%)";
        bottom3.style.filter = "opacity(" + i + "%)";
        i = 50;
    } else if (i == 50){
        bottom1.style.filter = "opacity(" + i + "%)";
        bottom2.style.filter = "opacity(" + i + "%)";
        bottom3.style.filter = "opacity(" + i + "%)";
        i = 60;
    } else if (i == 60){
        bottom1.style.filter = "opacity(" + i + "%)";
        bottom2.style.filter = "opacity(" + i + "%)";
        bottom3.style.filter = "opacity(" + i + "%)";
        i = 70;
    } else if (i == 70){
        bottom1.style.filter = "opacity(" + i + "%)";
        bottom2.style.filter = "opacity(" + i + "%)";
        bottom3.style.filter = "opacity(" + i + "%)";
        i = 80;
    } else if (i == 80){
        bottom1.style.filter = "opacity(" + i + "%)";
        bottom2.style.filter = "opacity(" + i + "%)";
        bottom3.style.filter = "opacity(" + i + "%)";
        i = 90;
    } else if (i == 90){
        bottom1.style.filter = "opacity(" + i + "%)";
        bottom2.style.filter = "opacity(" + i + "%)";
        bottom3.style.filter = "opacity(" + i + "%)";
        i = 100;
    } else if (i == 100){
        bottom1.style.filter = "opacity(" + i + "%)";
        bottom2.style.filter = "opacity(" + i + "%)";
        bottom3.style.filter = "opacity(" + i + "%)";
        clearInterval(timerId);
    } 
}, 500);
 