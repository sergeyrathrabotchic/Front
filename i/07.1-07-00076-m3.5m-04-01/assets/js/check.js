function check2() {
    var form = document.forms.work;

    var ot1 = form.elements.answer1;
    var ot2 = form.elements.answer2;
    var ot3 = form.elements.answer3;
    var ot4 = form.elements.answer4;
    var ot5 = form.elements.answer5;
    var count = 0;
    /*var ot6 = form.elements.answer6;
    var ot7 = form.elements.answer7;
    var click = document.querySelector("#click1");*/

    //alert(ot1.value);
    if(ot1.value == 'окончательное оформление крепостного права'){
        count = count + 1;
        /*var r1 = document.querySelector("#r");
        r1.innerHTML = 'Правильный ответ';
        r1.style.color = "#1c8203";
        click.style.background = "#0ed145";*/
    } /*else {
        var r1 = document.querySelector("#r");
        r1.innerHTML = 'Неправильный ответ';
        r1.style.color = "#bf1111";
    }*/

    if(ot2.value == 'право помещика на розыск беглого крестьянина в течение 15 лет'){
        count = count + 1;
    }

    if(ot3.value == 'право помещика на розыск беглых крестьян в течение 5 лет' ){
        count = count + 1;
    } 

    if(ot4.value == 'введение заповедных лет'){
        count = count + 1;
    } 
    if(ot5.value == 'введение Юрьева дня'){
        count = count + 1;
    }
    var r1 = document.querySelector("#r");
    r1.innerHTML = 'Правильных ответов: ' + count;

    
}