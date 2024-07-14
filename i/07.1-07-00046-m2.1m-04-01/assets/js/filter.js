
function brightness50( Id, Id2, Id3, Id4 , Id5 ){
    
    var Id1 = document.querySelector(Id);
    Id1.style.filter = "opacity(" + 50 + "%)";
    /*if (Id2 != ""){
        var id2 = document.querySelector(Id2);
        id2.style.filter = "opacity(" + 50 + "%)";
    }
    if (Id3 != ""){
        var id3 = document.querySelector(Id3);
        id3.style.filter = "opacity(" + 50 + "%)";
    }
    if (Id4 != ""){
        var id4 = document.querySelector(Id4);
        id4.style.filter = "opacity(" + 50 + "%)";
    }
    if (Id5 != ""){
        var id5 = document.querySelector(Id5);
        id5.style.filter = "opacity(" + 50 + "%)";
    }*/

}
function brightnessNull( Id, Id2, Id3, Id4 , Id5 ){
    var Id1 = document.querySelector(Id);
    Id1.style.filter = "opacity(" + 0 + "%)";
    if (Id2 != ""){
        var id2 = document.querySelector(Id2);
        id2.style.filter = "opacity(" + 0 + "%)";
    }
    if (Id3 != ""){
        var id3 = document.querySelector(Id3);
        id3.style.filter = "opacity(" + 00 + "%)";
    }
    if (Id4 != ""){
        var id4 = document.querySelector(Id4);
        id4.style.filter = "opacity(" + 0 + "%)";
    }
    if (Id5 != ""){
        var id5 = document.querySelector(Id5);
        id5.style.filter = "opacity(" + 0 + "%)";
    }

}
function brightnessMax(Id, Id2, Id3, Id4 , Id5){
    var Id1 = document.querySelector(Id);
    Id1.style.filter = "opacity(" + 100 + "%)";
    /*if (Id2 != ""){
        var Id2 = document.querySelector(Id2);
        Id2.style.filter = "opacity(" + 100 + "%)";
    }*/
   
}
function  displayNone(Id, Id2, Id3, Id4 , Id5){
    var Id1 = document.querySelector(Id);
    Id1.style.display = "none";
}
function displayFlex(Id, Id2, Id3, Id4 , Id5){

    var Id1 = document.querySelector(Id);
    Id1.style.display = "flex";

}
function left (id){
    var id = document.querySelector(id);
    id.style.alignItems = "flex-start";
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


function clickImg ( /*Id, Id2, Id3, Id4 , Id5,*/ idBlock) {
        filter(idBlock);
        /*setTimeout(brightness50, 100, idBlock);setTimeout(displayNone, 100, idBlock);
        setTimeout(brightnessNull, 110,  Id, Id2, Id3, Id4 , Id5);
        setTimeout(brightnessMax, 120, idBlock)
        setTimeout(displayFlex, 130, idBlock);
        setTimeout(filter, 150,  Id, Id2, Id3, Id4 , Id5);*/

}
function clickImg2 (idBlock) {
        setTimeout(brightness50, 500, idBlock);setTimeout(displayNone, 1000, idBlock);
        /*var img1 = document.querySelector('#text2-1');
        var img2 = document.querySelector('#img3-1');
        var img3 = document.querySelector('#img4-1');
        var img4 = document.querySelector('#img5-1');
        var img5 = document.querySelector('#img6-1');
        if(img1.style.display == "block"){
            setTimeout(brightness50, 100, "#block2");setTimeout(displayNone, 120, "#block2");
        }
        if(img2.style.display == "block"){
            setTimeout(brightness50, 100, "#block3");setTimeout(displayNone, 120, "#block3");
        }
        if(img3.style.display == "block"){
            setTimeout(brightness50, 100, "#block4");setTimeout(displayNone, 120, "#block4");
        }
        if(img4.style.display == "block"){
            setTimeout(brightness50, 100, "#block5");setTimeout(displayNone, 120, "#block5");
        }
        if(img5.style.display == "block"){
            setTimeout(brightness50, 100, "#block6");setTimeout(displayNone, 120, "#block6");
        }
        setTimeout(brightnessNull, 130, "#text1-1",'','','','',);
        setTimeout(brightnessMax, 130, "#block1")
        setTimeout(displayFlex, 130, "#block1");
        setTimeout(filter, 140, "#text1-1");*/
}


function clickImg2Bottom ( Id, Id2, Id3, Id4 , Id5, idBlock) {
    setTimeout(brightness50, 100, "#block7");setTimeout(displayNone, 100, "#block7");
    setTimeout(brightnessNull, 110,  Id, Id2, Id3, Id4 , Id5);
    setTimeout(brightnessMax, 120, idBlock)
    setTimeout(displayFlex, 130, idBlock);
    setTimeout(filter, 150,  Id, Id2, Id3, Id4 , Id5);

}
function clickImgBottom () {
    var img1 = document.querySelector('#text8-1');
    var img2 = document.querySelector('#text9-1');
    var img3 = document.querySelector('#text10-1');
    var img4 = document.querySelector('#text11-1');
    var img5 = document.querySelector('#text12-1');
    var img6 = document.querySelector('#text13-1');
    if(img1.style.display == "block"){
        setTimeout(brightness50, 100, "#block8");setTimeout(displayNone, 120, "#block8");
    }
    if(img2.style.display == "block"){
        setTimeout(brightness50, 100, "#block9");setTimeout(displayNone, 120, "#block9");
    }
    if(img3.style.display == "block"){
        setTimeout(brightness50, 100, "#block10");setTimeout(displayNone, 120, "#block10");
    }
    if(img4.style.display == "block"){
        setTimeout(brightness50, 100, "#block11");setTimeout(displayNone, 120, "#block11");
    }
    if(img5.style.display == "block"){
        setTimeout(brightness50, 100, "#block12");setTimeout(displayNone, 120, "#block12");
    }
    if(img6.style.display == "block"){
        setTimeout(brightness50, 100, "#block13");setTimeout(displayNone, 120, "#block13");
    }
    setTimeout(brightnessNull, 130, "#text7-1",'','','','',);
    setTimeout(brightnessMax, 130, "#block7")
    setTimeout(displayFlex, 140, "#block7");
    setTimeout(filter, 150, "#text7-1");
}
// function clickImg2 (id) {
//     setTimeout(prikaz2, 1000, "#block1");setTimeout(prikaz3, 1200, "#block1");
//     setTimeout(brightnessNull, 1000, "#text1-2");setTimeout(prikaz4, 1200, "#block2");
//     setTimeout(filter, 1500, id);

// }
// function clickImg () {
//     var img1 = document.querySelector('#text1-2');
//     if(img1.style.display == "block"){
//         setTimeout(prikaz2, 1000, "#block2");setTimeout(prikaz3, 1200, "#block2");
//     }
//     /*if(img2.style.display == "block"){
//         setTimeout(prikaz2, 1000, "#text1-3");setTimeout(prikaz3, 1200, "#text1-3");
//     }*/
//     setTimeout(brightnessNull, 1000, "#text1-1");setTimeout(prikaz4, 1200, "#block1");
//     setTimeout(filter, 1250, "#text1-1");
// }
/*function clickImg2 () {
    setTimeout(prikaz2, 1000, "#text1-1");setTimeout(prikaz3, 2000, "#text1-1");
    setTimeout(prikaz2, 1000, "#img1-2");setTimeout(prikaz3, 2000, "#img1-2");
    setTimeout(prikaz2, 1000, "#text1-3");setTimeout(prikaz3, 2000, "#text1-3");
    setTimeout(left, 3000, "#text1");
    setTimeout(filter, 4000, "#text1-4");
}
function clickImg3 () {
    setTimeout(prikaz2, 1000, "#text2-1");setTimeout(prikaz3, 2000, "#text2-1");
    setTimeout(prikaz2, 1000, "#img2-2");setTimeout(prikaz3, 2000, "#img2-2");
    setTimeout(prikaz2, 1000, "#text2-3");setTimeout(prikaz3, 2000, "#text2-3");
    setTimeout(left, 3000, "#text2");
    setTimeout(filter, 4000, "#text2-4");
}
function clickImg4 () {
    setTimeout(prikaz2, 1000, "#text3-1");setTimeout(prikaz3, 2000, "#text3-1");
    setTimeout(prikaz2, 1000, "#img3-2");setTimeout(prikaz3, 2000, "#img3-2");
    setTimeout(prikaz2, 1000, "#text3-3");setTimeout(prikaz3, 2000, "#text3-3");
    setTimeout(left, 3000, "#text3");
    setTimeout(filter, 4000, "#text3-4");
}
function clickImg5 () {
    setTimeout(prikaz2, 1000, "#text4-1");setTimeout(prikaz3, 2000, "#text4-1");
    setTimeout(prikaz2, 1000, "#img4-2");setTimeout(prikaz3, 2000, "#img4-2");
    setTimeout(prikaz2, 1000, "#text4-3");setTimeout(prikaz3, 2000, "#text4-3");
    setTimeout(left, 3000, "#text4");
    setTimeout(filter, 4000, "#text4-4");
}
function clickImg6 () {
    setTimeout(prikaz2, 1000, "#text5-1");setTimeout(prikaz3, 2000, "#text5-1");
    setTimeout(prikaz2, 1000, "#img5-2");setTimeout(prikaz3, 2000, "#img5-2");
    setTimeout(prikaz2, 1000, "#text5-3");setTimeout(prikaz3, 2000, "#text5-3");
    setTimeout(left, 3000, "#text5");
    setTimeout(filter, 4000, "#text5-4");
}
function clickImg7 () {
    setTimeout(prikaz2, 1000, "#text5-1");setTimeout(prikaz3, 2000, "#text5-1");
}*/


/*function clickImg () {
    var img1 = document.querySelector('#text1');
    var img2 = document.querySelector('#text2');
    var img3 = document.querySelector('#text3');
    var img4 = document.querySelector('#text8')


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
    }

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
}*/






 