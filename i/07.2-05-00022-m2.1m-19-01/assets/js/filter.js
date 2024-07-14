var i = 10;

let timerId = setInterval(function () {
    var bottom1 = document.querySelector("#braxmaB");
    /*var bottom2 = document.querySelector(".bottom2");
    var bottom3 = document.querySelector(".bottom3");*/
    if(i == 10) {  
    bottom1.style.filter = "opacity(" + i + "%)";
    /*bottom2.style.filter = "opacity(" + i + "%)";
    bottom3.style.filter = "opacity(" + i + "%)";*/
    i = 20;
    } else if (i == 20){
        bottom1.style.filter = "opacity(" + i + "%)";
        /*bottom2.style.filter = "opacity(" + i + "%)";
        bottom3.style.filter = "opacity(" + i + "%)";*/
        i = 30;
    } else if (i == 30){
        bottom1.style.filter = "opacity(" + i + "%)";
        /*bottom2.style.filter = "opacity(" + i + "%)";
        bottom3.style.filter = "opacity(" + i + "%)";*/
        i = 40;
    } else if (i == 40){
        bottom1.style.filter = "opacity(" + i + "%)";
        /*bottom2.style.filter = "opacity(" + i + "%)";
        bottom3.style.filter = "opacity(" + i + "%)";*/
        i = 50;
    } else if (i == 50){
        bottom1.style.filter = "opacity(" + i + "%)";
        /*bottom2.style.filter = "opacity(" + i + "%)";
        bottom3.style.filter = "opacity(" + i + "%)";*/
        i = 60;
    } else if (i == 60){
        bottom1.style.filter = "opacity(" + i + "%)";
        /*bottom2.style.filter = "opacity(" + i + "%)";
        bottom3.style.filter = "opacity(" + i + "%)";*/
        i = 70;
    } else if (i == 70){
        bottom1.style.filter = "opacity(" + i + "%)";
        /*bottom2.style.filter = "opacity(" + i + "%)";
        bottom3.style.filter = "opacity(" + i + "%)";*/
        i = 80;
    } else if (i == 80){
        bottom1.style.filter = "opacity(" + i + "%)";
       /*bottom2.style.filter = "opacity(" + i + "%)";
        bottom3.style.filter = "opacity(" + i + "%)";*/
        i = 90;
    } else if (i == 90){
        bottom1.style.filter = "opacity(" + i + "%)";
       /*bottom2.style.filter = "opacity(" + i + "%)";
        bottom3.style.filter = "opacity(" + i + "%)";*/
        i = 100;
    } else if (i == 100){
        bottom1.style.filter = "opacity(" + i + "%)";
        /*bottom2.style.filter = "opacity(" + i + "%)";
        bottom3.style.filter = "opacity(" + i + "%)";*/
        clearInterval(timerId);
    } 
}, 500);

/*var click = 0;*/
var Id;
var idStrelka;
function clickImg () {
    var img1 = document.querySelector('.b');
    var img2 = document.querySelector('.s');
    var img3 = document.querySelector('.v')
    var img4 = document.querySelector('.sh');
    var img5 = document.querySelector('.p');

    if(img1.style.display == "none") {
        Id = '.b';
        idStrelka = '.strelkaUp';
    } else if (img2.style.display == "none") {
        Id = '.s';
        idStrelka = '.strelkaK';
    } else if(img3.style.display == "none") {
        Id = '.v';
        idStrelka = '.strelkaV';
    } else if(img4.style.display == "none") {
        Id = '.sh';
        idStrelka = '.strelkaSh';
    } else if(img5.style.display == "none") {
        Id = '.p';
        idStrelka = '';
    }

    i = 10;

        let timerIdClick = setInterval(function () {
            var bottom1 = document.querySelector(Id);
            if (idStrelka != "")
            var bottom2 = document.querySelector(idStrelka);
            bottom1.style.display = "block";
            if (bottom2)
            bottom2.style.display = "block"

            if(i == 10) {  
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";

                i = 20;
            } else if (i == 20){
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";

                i = 30;
            } else if (i == 30){
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";

                i = 40;
            } else if (i == 40){
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";

                i = 50;
            } else if (i == 50){
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";

                i = 60;
            } else if (i == 60){
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";

                i = 70;
            } else if (i == 70){
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";

                i = 80;
            } else if (i == 80){
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";

                i = 90;
            } else if (i == 90){
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";

                i = 100;
            } else if (i == 100){
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";

                clearInterval(timerId);
            }
        }, 500);
}






 