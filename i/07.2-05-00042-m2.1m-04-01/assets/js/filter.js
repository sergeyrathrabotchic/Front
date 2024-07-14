var i = 10;

let timerId = setInterval(function () {
    var bottom1 = document.querySelector("#idId");
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
    var img1 = document.querySelector('.shiva');
    var img2 = document.querySelector('.history');
    var img3 = document.querySelector('.zmea')
    var img4 = document.querySelector('.sansara')
    /*var img4 = document.querySelector('.sh');
    var img5 = document.querySelector('.p');*/

    if(img1.style.display == "none") {
        Id = '.shiva';
        Id2 = '.korova';
        Id3 = '.braxmaB';
        Id4 = '.filBlok'
    } else if (img2.style.display == "none") {
        Id = '.history';
        Id2 = '.vishna';
        Id3 = "";
        Id4 = '';
    } else if(img3.style.display == "none") {
        Id = '.zmea';
        Id2 = '.mashimatic';
        Id3 = '';
        Id4 = '';
    } else if(img4.style.display == "none") {
        Id = '.sansara';
        Id2 = '.medic';
        Id3 = '';
        Id4 = '';
    }/*else if(img4.style.display == "none") {
        Id = '.sh';
        idStrelka = '.strelkaSh';
    } else if(img5.style.display == "none") {
        Id = '.p';
        idStrelka = '';
    }*/

    i = 10;

        let timerIdClick = setInterval(function () {
            var bottom1 = document.querySelector(Id);
            if (Id2 != "")
            var bottom2 = document.querySelector(Id2);
            if (Id3 != "")
            var bottom3 = document.querySelector(Id3);
            if (Id4 != "")
            var bottom4 = document.querySelector(Id4);
            bottom1.style.display = "block";
            if (bottom2)
            bottom2.style.display = "block";
            if (bottom3)
            bottom3.style.display = "block";
            if (bottom4)
            bottom4.style.display = "block";

            if(i == 10) {  
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";
                if (bottom3)
                bottom3.style.filter = "opacity(" + i + "%)";

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

                clearInterval(timerId);
            }
        }, 500);
}





 