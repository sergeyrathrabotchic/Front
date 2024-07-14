function no(){
    var no = document.querySelector("#no");
    no.style.filter = "opacity(" + 50 + "%)";
}
function no2(){
    var obj = document.querySelector("#text2-2");
    obj.style.height = "60px";
    var no = document.querySelector("#no");
    no.style.display = "none";
    var br = document.querySelector("#br");
    br.style.display = "none";
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

setTimeout(filter, 1000, "#strelkaTime", "#minStrelka1", "#date1", "#text1");
setTimeout(filter, 7000, "#strelkaUp", "#text2-1", );
setTimeout(filter, 14000, "#minStrelka2", "#date2", "#text2");
setTimeout(filter, 21000, "#text2-2");
setTimeout(no, 28000);
setTimeout(no2, 29000);
setTimeout(filter, 29000, "#strelkaDown");
setTimeout(filter, 36000, "#minStrelka4", "#date4", "#text4");
setTimeout(filter, 43000, "#minStrelka5", "#date5", "#text5");
setTimeout(filter, 50000, "#text3-1");
setTimeout(filter, 57000, "#minStrelka3", "#date3", "#text3");
 