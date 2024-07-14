
function prikaz2(prikaz){
    var prikaz1 = document.querySelector(prikaz);
    prikaz1.style.filter = "opacity(" + 50 + "%)";
    /*prikaz2.style.filter = "opacity(" + 50 + "%)";*/
}
function prikaz1(prikaz){
    var prikaz1 = document.querySelector(prikaz);
    prikaz1.style.filter = "opacity(" + 0 + "%)";
    /*prikaz2.style.filter = "opacity(" + 50 + "%)";*/
}
function  prikaz3(prikaz){
    /*var text1 = document.querySelector("#text2-3");*/
    /*var text2 = document.querySelector("#text2-4");*/
    /*text1.style.height = "60px";*/
    /*text2.style.height = "60px";*/
    var prikaz1 = document.querySelector(prikaz);
    /*var prikaz2 = document.querySelector("#prikaz2");*/
    prikaz1.style.display = "none";
    /*prikaz2.style.display = "none";*/
    /*var br = document.querySelector("#br");
    br.style.display = "none";*/
}
function filter ( Id, Id2, Id3, Id4 , Id5 ) {

    var i = 10;
    
    let timerIdClick = setInterval(function () {
        var bottom1 = document.querySelector(Id);
        if (Id2 != "")
        var bottom2 = document.querySelector(Id2);
        if (Id3 != "")
        var bottom3 = document.querySelector(Id3);
        if (Id4 != "")
        var bottom4 = document.querySelector(Id4);
        if (Id5 != "")
        var bottom5 = document.querySelector(Id5);
        bottom1.style.display = "block";
        if (bottom2)
        bottom2.style.display = "block";
        if (bottom3)
        bottom3.style.display = "block";
        if (bottom4)
        bottom4.style.display = "block";
        if (bottom5)
        bottom5.style.display = "block";
    
        if(i == 10) {  
            bottom1.style.filter = "opacity(" + i + "%)";
            if (bottom2)
            bottom2.style.filter = "opacity(" + i + "%)";
            if (bottom3)
            bottom3.style.filter = "opacity(" + i + "%)";
            if (bottom4)
            bottom4.style.filter = "opacity(" + i + "%)";
            if (bottom5)
            bottom5.style.filter = "opacity(" + i + "%)";
    
            i = 20;
        } else if (i == 20){
            bottom1.style.filter = "opacity(" + i + "%)";
            if (bottom2)
            bottom2.style.filter = "opacity(" + i + "%)";
            if (bottom3)
            bottom3.style.filter = "opacity(" + i + "%)";
            if (bottom4)
            bottom4.style.filter = "opacity(" + i + "%)";
            if (bottom5)
            bottom5.style.filter = "opacity(" + i + "%)";
    
            i = 30;
        } else if (i == 30){
            bottom1.style.filter = "opacity(" + i + "%)";
            if (bottom2)
            bottom2.style.filter = "opacity(" + i + "%)";
            if (bottom3)
            bottom3.style.filter = "opacity(" + i + "%)";
            if (bottom4)
            bottom4.style.filter = "opacity(" + i + "%)";
            if (bottom5)
            bottom5.style.filter = "opacity(" + i + "%)";
    
            i = 40;
        } else if (i == 40){
            bottom1.style.filter = "opacity(" + i + "%)";
            if (bottom2)
            bottom2.style.filter = "opacity(" + i + "%)";
            if (bottom3)
            bottom3.style.filter = "opacity(" + i + "%)";
            if (bottom4)
            bottom4.style.filter = "opacity(" + i + "%)";
            if (bottom5)
            bottom5.style.filter = "opacity(" + i + "%)";
    
            i = 50;
        } else if (i == 50){
            bottom1.style.filter = "opacity(" + i + "%)";
            if (bottom2)
            bottom2.style.filter = "opacity(" + i + "%)";
            if (bottom3)
            bottom3.style.filter = "opacity(" + i + "%)";
            if (bottom4)
            bottom4.style.filter = "opacity(" + i + "%)";
            if (bottom5)
            bottom5.style.filter = "opacity(" + i + "%)";
    
            i = 60;
        } else if (i == 60){
            bottom1.style.filter = "opacity(" + i + "%)";
            if (bottom2)
            bottom2.style.filter = "opacity(" + i + "%)";
            if (bottom3)
            bottom3.style.filter = "opacity(" + i + "%)";
            if (bottom4)
            bottom4.style.filter = "opacity(" + i + "%)";
            if (bottom5)
            bottom5.style.filter = "opacity(" + i + "%)";
    
            i = 70;
        } else if (i == 70){
            bottom1.style.filter = "opacity(" + i + "%)";
            if (bottom2)
            bottom2.style.filter = "opacity(" + i + "%)";
            if (bottom3)
            bottom3.style.filter = "opacity(" + i + "%)";
            if (bottom4)
            bottom4.style.filter = "opacity(" + i + "%)";
            if (bottom5)
            bottom5.style.filter = "opacity(" + i + "%)";
    
            i = 80;
        } else if (i == 80){
            bottom1.style.filter = "opacity(" + i + "%)";
            if (bottom2)
            bottom2.style.filter = "opacity(" + i + "%)";
            if (bottom3)
            bottom3.style.filter = "opacity(" + i + "%)";
            if (bottom4)
            bottom4.style.filter = "opacity(" + i + "%)";
            if (bottom5)
            bottom5.style.filter = "opacity(" + i + "%)";
    
            i = 90;
        } else if (i == 90){
            bottom1.style.filter = "opacity(" + i + "%)";
            if (bottom2)
            bottom2.style.filter = "opacity(" + i + "%)";
            if (bottom3)
            bottom3.style.filter = "opacity(" + i + "%)";
            if (bottom4)
            bottom4.style.filter = "opacity(" + i + "%)";
            if (bottom5)
            bottom5.style.filter = "opacity(" + i + "%)";
    
            i = 100;
        } else if (i == 100){
            bottom1.style.filter = "opacity(" + i + "%)";
            if (bottom2)
            bottom2.style.filter = "opacity(" + i + "%)";
            if (bottom3)
            bottom3.style.filter = "opacity(" + i + "%)";
            if (bottom4)
            bottom4.style.filter = "opacity(" + i + "%)";
            if (bottom5)
            bottom5.style.filter = "opacity(" + i + "%)";
    
            clearInterval(timerIdClick);
        }
    }, 500);
    
    }

function clickImg2 () {
    setTimeout(prikaz2, 1000, "text1-1");setTimeout(prikaz3, 3000, "#text1-1");
    setTimeout(prikaz2, 1000, "#img2-2");setTimeout(prikaz3, 3000, "#img2-2");
    setTimeout(prikaz2, 1000, "#text2-1");setTimeout(prikaz3, 3000, "#text2-1");
    setTimeout(prikaz2, 1000, "#img2-3");setTimeout(prikaz3, 3000, "#img2-3");
    setTimeout(prikaz2, 1000, "#text2-4");setTimeout(prikaz3, 3000, "#text2-4");
    setTimeout(prikaz2, 1000, "#text3-1");setTimeout(prikaz3, 3000, "#text3-1");
    setTimeout(prikaz2, 1000, "#img5-1");setTimeout(prikaz3, 3000, "#img5-1");
    setTimeout(prikaz2, 1000, "#text5-2");setTimeout(prikaz3, 3000, "#text5-2");
    setTimeout(filter, 5000, "#text1-2", "#text2-5", "#text2-6", "#text3-2", "#text5-3");

}
function clickImg () {
    var img1 = document.querySelector('#text1');
    var img2 = document.querySelector('#text2');
    var img3 = document.querySelector('#text3');
    var img4 = document.querySelector('#text8')
    /*var img4 = document.querySelector('.sh');
    var img5 = document.querySelector('.p');*/

    if(img1.style.filter =="opacity(0%)") {
        Id = '#text1';
        Id2 = '';
        Id3 = '';
        Id4 = '';
        Id5 = '';
        Id6 = '';
    } else if (img2.style.filter =="opacity(0%)") {
        Id = '#text2';
        Id2 = '';
        Id3 = "";
        Id4 = '';
        Id5 = '';
        Id6 = '';
    } else if(img3.style.filter == "opacity(0%)") {
        Id = '#text3';
        Id2 = '#text4';
        Id3 = '#text5';
        Id4 = '#text6';
        Id5 = '#text7';
        Id6 = '';
    } else if(img4.style.filter == "opacity(0%)") {
        Id = '#text8';
        Id2 = '#text9';
        Id3 = '#text10';
        Id4 = '#text11';
        Id5 = '#text12';
        Id6 = '#text13';
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
            if (Id5 != "")
            var bottom5 = document.querySelector(Id5);
            if (Id6 != "")
            var bottom6 = document.querySelector(Id6);
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
                if (bottom5)
                bottom5.style.filter = "opacity(" + i + "%)";
                if (bottom6)
                bottom6.style.filter = "opacity(" + i + "%)";
                

                i = 20;
            } else if (i == 20){
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";
                if (bottom3)
                bottom3.style.filter = "opacity(" + i + "%)";
                if (bottom4)
                bottom4.style.filter = "opacity(" + i + "%)";
                if (bottom5)
                bottom5.style.filter = "opacity(" + i + "%)";
                if (bottom6)
                bottom6.style.filter = "opacity(" + i + "%)";

                i = 30;
            } else if (i == 30){
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";
                if (bottom3)
                bottom3.style.filter = "opacity(" + i + "%)";
                if (bottom4)
                bottom4.style.filter = "opacity(" + i + "%)";
                if (bottom5)
                bottom5.style.filter = "opacity(" + i + "%)";
                if (bottom6)
                bottom6.style.filter = "opacity(" + i + "%)";

                i = 40;
            } else if (i == 40){
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";
                if (bottom3)
                bottom3.style.filter = "opacity(" + i + "%)";
                if (bottom4)
                bottom4.style.filter = "opacity(" + i + "%)";
                if (bottom5)
                bottom5.style.filter = "opacity(" + i + "%)";
                if (bottom6)
                bottom6.style.filter = "opacity(" + i + "%)";

                i = 50;
            } else if (i == 50){
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";
                if (bottom3)
                bottom3.style.filter = "opacity(" + i + "%)";
                if (bottom4)
                bottom4.style.filter = "opacity(" + i + "%)";
                if (bottom5)
                bottom5.style.filter = "opacity(" + i + "%)";
                if (bottom6)
                bottom6.style.filter = "opacity(" + i + "%)";

                i = 60;
            } else if (i == 60){
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";
                if (bottom3)
                bottom3.style.filter = "opacity(" + i + "%)";
                if (bottom4)
                bottom4.style.filter = "opacity(" + i + "%)";
                if (bottom5)
                bottom5.style.filter = "opacity(" + i + "%)";
                if (bottom6)
                bottom6.style.filter = "opacity(" + i + "%)";

                i = 70;
            } else if (i == 70){
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";
                if (bottom3)
                bottom3.style.filter = "opacity(" + i + "%)";
                if (bottom4)
                bottom4.style.filter = "opacity(" + i + "%)";
                if (bottom5)
                bottom5.style.filter = "opacity(" + i + "%)";
                if (bottom6)
                bottom6.style.filter = "opacity(" + i + "%)";

                i = 80;
            } else if (i == 80){
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";
                if (bottom3)
                bottom3.style.filter = "opacity(" + i + "%)";
                if (bottom4)
                bottom4.style.filter = "opacity(" + i + "%)";
                if (bottom5)
                bottom5.style.filter = "opacity(" + i + "%)";
                if (bottom6)
                bottom6.style.filter = "opacity(" + i + "%)";

                i = 90;
            } else if (i == 90){
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";
                if (bottom3)
                bottom3.style.filter = "opacity(" + i + "%)";
                if (bottom4)
                bottom4.style.filter = "opacity(" + i + "%)";
                if (bottom5)
                bottom5.style.filter = "opacity(" + i + "%)";
                if (bottom6)
                bottom6.style.filter = "opacity(" + i + "%)";

                i = 100;
            } else if (i == 100){
                bottom1.style.filter = "opacity(" + i + "%)";
                if (bottom2)
                bottom2.style.filter = "opacity(" + i + "%)";
                if (bottom3)
                bottom3.style.filter = "opacity(" + i + "%)";
                if (bottom4)
                bottom4.style.filter = "opacity(" + i + "%)";
                if (bottom5)
                bottom5.style.filter = "opacity(" + i + "%)";
                if (bottom6)
                bottom6.style.filter = "opacity(" + i + "%)";

                clearInterval(timerIdClick);
            }
        }, 500);
}






 