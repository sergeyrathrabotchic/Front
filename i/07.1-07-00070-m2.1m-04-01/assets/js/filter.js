function prikaz () {
    var prikaz1 = document.querySelector("#prikaz1");
    var prikaz2 = document.querySelector("#prikaz2");
    var text1 = document.querySelector("#text2-3");
    var text2 = document.querySelector("#text2-4");
    text1.style.height = "80px";
    text2.style.height = "80px";
    prikaz1.style.display = "block";
    prikaz2.style.display = "block";
}
function prikaz2(){
    var prikaz1 = document.querySelector("#prikaz1");
    var prikaz2 = document.querySelector("#prikaz2")
    prikaz1.style.filter = "opacity(" + 50 + "%)";
    prikaz2.style.filter = "opacity(" + 50 + "%)";
}
function  prikaz3(){
    var text1 = document.querySelector("#text2-3");
    var text2 = document.querySelector("#text2-4");
    text1.style.height = "60px";
    text2.style.height = "60px";
    var prikaz1 = document.querySelector("#prikaz1");
    var prikaz2 = document.querySelector("#prikaz2");
    prikaz1.style.display = "none";
    prikaz2.style.display = "none";
    /*var br = document.querySelector("#br");
    br.style.display = "none";*/
}



function filter ( Id, Id2, Id3, Id4 ) {

var i = 10;

let timerIdClick = setInterval(function () {
    var bottom1 = document.querySelector(Id);
    if (Id2 != "")
    var bottom2 = document.querySelector(Id2);
    if (Id3 != "")
    var bottom3 = document.querySelector(Id3);
    if (Id4 != "")
    var bottom4 = document.querySelector(Id4);
    /*bottom1.style.display = "block";
    if (bottom2)
    bottom2.style.display = "block";
    if (bottom3)
    bottom3.style.display = "block";
    if (bottom4)
    bottom4.style.display = "block";*/

    if(i == 10) {  
        bottom1.style.filter = "opacity(" + i + "%)";
        if (bottom2)
        bottom2.style.filter = "opacity(" + i + "%)";
        if (bottom3)
        bottom3.style.filter = "opacity(" + i + "%)";
        if (bottom4)
        bottom4.style.filter = "opacity(" + i + "%)";

        i = 20;
    } else if (i == 20){
        bottom1.style.filter = "opacity(" + i + "%)";
        if (bottom2)
        bottom2.style.filter = "opacity(" + i + "%)";
        if (bottom3)
        bottom3.style.filter = "opacity(" + i + "%)";
        if (bottom4)
        bottom4.style.filter = "opacity(" + i + "%)";

        i = 30;
    } else if (i == 30){
        bottom1.style.filter = "opacity(" + i + "%)";
        if (bottom2)
        bottom2.style.filter = "opacity(" + i + "%)";
        if (bottom3)
        bottom3.style.filter = "opacity(" + i + "%)";
        if (bottom4)
        bottom4.style.filter = "opacity(" + i + "%)";

        i = 40;
    } else if (i == 40){
        bottom1.style.filter = "opacity(" + i + "%)";
        if (bottom2)
        bottom2.style.filter = "opacity(" + i + "%)";
        if (bottom3)
        bottom3.style.filter = "opacity(" + i + "%)";
        if (bottom4)
        bottom4.style.filter = "opacity(" + i + "%)";

        i = 50;
    } else if (i == 50){
        bottom1.style.filter = "opacity(" + i + "%)";
        if (bottom2)
        bottom2.style.filter = "opacity(" + i + "%)";
        if (bottom3)
        bottom3.style.filter = "opacity(" + i + "%)";
        if (bottom4)
        bottom4.style.filter = "opacity(" + i + "%)";

        i = 60;
    } else if (i == 60){
        bottom1.style.filter = "opacity(" + i + "%)";
        if (bottom2)
        bottom2.style.filter = "opacity(" + i + "%)";
        if (bottom3)
        bottom3.style.filter = "opacity(" + i + "%)";
        if (bottom4)
        bottom4.style.filter = "opacity(" + i + "%)";

        i = 70;
    } else if (i == 70){
        bottom1.style.filter = "opacity(" + i + "%)";
        if (bottom2)
        bottom2.style.filter = "opacity(" + i + "%)";
        if (bottom3)
        bottom3.style.filter = "opacity(" + i + "%)";
        if (bottom4)
        bottom4.style.filter = "opacity(" + i + "%)";

        i = 80;
    } else if (i == 80){
        bottom1.style.filter = "opacity(" + i + "%)";
        if (bottom2)
        bottom2.style.filter = "opacity(" + i + "%)";
        if (bottom3)
        bottom3.style.filter = "opacity(" + i + "%)";
        if (bottom4)
        bottom4.style.filter = "opacity(" + i + "%)";

        i = 90;
    } else if (i == 90){
        bottom1.style.filter = "opacity(" + i + "%)";
        if (bottom2)
        bottom2.style.filter = "opacity(" + i + "%)";
        if (bottom3)
        bottom3.style.filter = "opacity(" + i + "%)";
        if (bottom4)
        bottom4.style.filter = "opacity(" + i + "%)";

        i = 100;
    } else if (i == 100){
        bottom1.style.filter = "opacity(" + i + "%)";
        if (bottom2)
        bottom2.style.filter = "opacity(" + i + "%)";
        if (bottom3)
        bottom3.style.filter = "opacity(" + i + "%)";
        if (bottom4)
        bottom4.style.filter = "opacity(" + i + "%)";

        clearInterval(timerIdClick);
    }
}, 500);

}

setTimeout(filter, 7000, "#img5-2", "#text7-2");
setTimeout(filter, 14000, "#text1-1");
setTimeout(filter, 21000, "#text3-1","#img2-1");
setTimeout(filter, 28000, "#text6-1","#img5-1");
setTimeout(filter, 35000, "#text8-1","#img7-1");
setTimeout(filter, 42000,"#text1-2");
setTimeout(filter, 49000,"#text2-2");
setTimeout(filter, 56000,"#text1-3");
setTimeout(filter, 63000,"#text2-3","#text2-4","#text2-5");
setTimeout(prikaz, 70000);
setTimeout(prikaz2, 77000);
setTimeout(prikaz3, 84000);
setTimeout(filter, 91000,"#text3-3","#text5-3");
setTimeout(filter, 98000,"#img3-2","#text4-1");
setTimeout(filter, 105000,"#text6-2","#img6-3");
setTimeout(filter, 112000,"#text7-3");

 