function check() {
    var form = document.forms.work;

    var ot1 = form.elements.answer1;
    var ot2 = form.elements.answer2;
    var ot3 = form.elements.answer3;
    var ot4 = form.elements.answer4;
    var ot5 = form.elements.answer5;
    var ot6 = form.elements.answer6;
    var ot7 = form.elements.answer7;

    //alert(ot1.value);
    if(ot1.value == 'former'){
        var r1 = document.querySelector("#r");
        r1.innerHTML = 'Правильный ответ';
        r1.style.color = "rgb(0 0 0)";
    } else {
        var r1 = document.querySelector("#r");
        r1.innerHTML = 'Неправильный ответ';
        r1.style.color = "#bf1111";
    }

    if(ot2.value == 'fashion'){
        var r2 = document.querySelector("#r2");
        r2.innerHTML = 'Правильный ответ';
        r2.style.color = "rgb(0 0 0)";
    } else {
        var r2 = document.querySelector("#r2");
        r2.innerHTML = 'Неправильный ответ';
        r2.style.color = "#bf1111";
    }

    if(ot3.value == 'was perfect' || ot3.value == 'perfect'){
        var r3 = document.querySelector("#r3");
        r3.innerHTML = 'Правильный ответ';
        r3.style.color = "rgb(0 0 0)";
    } else {
        var r3 = document.querySelector("#r3");
        r3.innerHTML = 'Неправильный ответ';
        r3.style.color = "#bf1111";
    }

    if(ot4.value == 'prestigious'){
        var r4 = document.querySelector("#r4");
        r4.innerHTML = 'Правильный ответ';
        r4.style.color = "rgb(0 0 0)";
    } else {
        var r4 = document.querySelector("#r4");
        r4.innerHTML = 'Неправильный ответ';
        r4.style.color = "#bf1111";
    }

    if(ot5.value == 'help'){
        var r5 = document.querySelector("#r5");
        r5.innerHTML = 'Правильный ответ';
        r5.style.color = "rgb(0 0 0)";
    } else {
        var r5 = document.querySelector("#r5");
        r5.innerHTML = 'Неправильный ответ';
        r5.style.color = "#bf1111";
    }

    if(ot6.value == 'sincere'){
        var r6 = document.querySelector("#r6");
        r6.innerHTML = 'Правильный ответ';
        r6.style.color = "rgb(0 0 0)";
    } else {
        var r6 = document.querySelector("#r6");
        r6.innerHTML = 'Неправильный ответ';
        r6.style.color = "#bf1111";
    }

    if(ot7.value == 'tolerant'){
        var r7 = document.querySelector("#r7");
        r7.innerHTML = 'Правильный ответ';
        r7.style.color = "rgb(0 0 0)";
    } else {
        var r7 = document.querySelector("#r7");
        r7.innerHTML = 'Неправильный ответ';
        r7.style.color = "#bf1111";
    }
}