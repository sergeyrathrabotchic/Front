function check1() {
    var form = document.forms.work1;

    var ot1 = form.elements.answer1;
    /*var ot2 = form.elements.answer2;
    var ot3 = form.elements.answer3;
    var ot4 = form.elements.answer4;
    var ot5 = form.elements.answer5;
    var ot6 = form.elements.answer6;
    var ot7 = form.elements.answer7;*/
    var click = document.querySelector("#click1");

    //alert(ot1.value);
    if(ot1.value == '7' || ot1.value == 'семь' || ot1.value == 'Семь'){
        var r1 = document.querySelector("#r");
        r1.innerHTML = 'Правильный ответ';
        r1.style.color = "#1c8203";
        click.style.background = "#0ed145";
    } else {
        var r1 = document.querySelector("#r");
        r1.innerHTML = 'Неправильный ответ';
        r1.style.color = "#bf1111";
    }

    /*if(ot2.value == 'fashion'){
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
    }*/
}

function check2() {
    var form = document.forms.work2;

    var ot1 = form.elements.answer1;

    var click = document.querySelector("#click2");

    //alert(ot1.value);
    if(ot1.value == 'тога' || ot1.value == 'тогу' || ot1.value == 'Тога' || ot1.value == 'Тогу'){
        var r1 = document.querySelector("#r2");
        r1.innerHTML = 'Правильный ответ';
        r1.style.color = "#1c8203";
        click.style.background = "#0ed145";
    } else {
        var r1 = document.querySelector("#r2");
        r1.innerHTML = 'Неправильный ответ';
        r1.style.color = "#bf1111";
    }

}

function check3() {
    var form = document.forms.work3;

    var ot1 = form.elements.answer1;

    var click = document.querySelector("#click3");

    //alert(ot1.value);
    if(ot1.value == 'туника' || ot1.value == 'Туника' /*|| ot1.value == 'Тога' || ot1.value == 'Тогу'*/){
        var r1 = document.querySelector("#r3");
        r1.innerHTML = 'Правильный ответ';
        r1.style.color = "#1c8203";
        click.style.background = "#0ed145";
    } else {
        var r1 = document.querySelector("#r3");
        r1.innerHTML = 'Неправильный ответ';
        r1.style.color = "#bf1111";
    }

}

function check4() {
    var form = document.forms.work4;

    var ot1 = form.elements.answer1;

    var click = document.querySelector("#click4");

    //alert(ot1.value);
    if(ot1.value == 'нет' || ot1.value == 'Нет' /*|| ot1.value == 'Тога' || ot1.value == 'Тогу'*/){
        var r1 = document.querySelector("#r4");
        r1.innerHTML = 'Правильный ответ';
        r1.style.color = "#1c8203";
        click.style.background = "#0ed145";
    } else {
        var r1 = document.querySelector("#r4");
        r1.innerHTML = 'Неправильный ответ';
        r1.style.color = "#bf1111";
    }

}

function check5() {
    var form = document.forms.work5;

    var ot1 = form.elements.answer1;

    var click = document.querySelector("#click5");

    //alert(ot1.value);
    if(ot1.value == 'Сенат и римский народ' /*|| ot1.value == 'Нет' || ot1.value == 'Тога' || ot1.value == 'Тогу'*/){
        var r1 = document.querySelector("#r5");
        r1.innerHTML = 'Правильный ответ';
        r1.style.color = "#1c8203";
        click.style.background = "#0ed145";
    } else {
        var r1 = document.querySelector("#r5");
        r1.innerHTML = 'Неправильный ответ';
        r1.style.color = "#bf1111";
    }

}

function check6() {
    var form = document.forms.work6;

    var ot1 = form.elements.answer1;

    var click = document.querySelector("#click6");

    //alert(ot1.value);
    if(ot1.value == 'Ромул' /*|| ot1.value == 'Нет' || ot1.value == 'Тога' || ot1.value == 'Тогу'*/){
        var r1 = document.querySelector("#r6");
        r1.innerHTML = 'Правильный ответ';
        r1.style.color = "#1c8203";
        click.style.background = "#0ed145";
    } else {
        var r1 = document.querySelector("#r6");
        r1.innerHTML = 'Неправильный ответ';
        r1.style.color = "#bf1111";
    }

}

function check7() {
    var form = document.forms.work7;

    var ot1 = form.elements.answer1;

    var click = document.querySelector("#click7");

    //alert(ot1.value);
    if(ot1.value == 'этруски' || ot1.value == 'Этруски' /*|| ot1.value == 'Тога' || ot1.value == 'Тогу'*/){
        var r1 = document.querySelector("#r7");
        r1.innerHTML = 'Правильный ответ';
        r1.style.color = "#1c8203";
        click.style.background = "#0ed145";
    } else {
        var r1 = document.querySelector("#r7");
        r1.innerHTML = 'Неправильный ответ';
        r1.style.color = "#bf1111";
    }

}

function check8() {
    var form = document.forms.work8;

    var ot1 = form.elements.answer1;

    var click = document.querySelector("#click8");

    //alert(ot1.value);
    if(ot1.value == '7' || ot1.value == 'Семь' || ot1.value == 'семь' /*|| ot1.value == 'Тогу'*/){
        var r1 = document.querySelector("#r8");
        r1.innerHTML = 'Правильный ответ';
        r1.style.color = "#1c8203";
        click.style.background = "#0ed145";
    } else {
        var r1 = document.querySelector("#r8");
        r1.innerHTML = 'Неправильный ответ';
        r1.style.color = "#bf1111";
    }

}

function check9() {
    var form = document.forms.work9;

    var ot1 = form.elements.answer1;

    var click = document.querySelector("#click9");

    //alert(ot1.value);
    if(ot1.value == 'Григорианский' /*|| ot1.value == 'Нет' || ot1.value == 'Тога' || ot1.value == 'Тогу'*/){
        var r1 = document.querySelector("#r9");
        r1.innerHTML = 'Правильный ответ';
        r1.style.color = "#1c8203";
        click.style.background = "#0ed145";
    } else {
        var r1 = document.querySelector("#r9");
        r1.innerHTML = 'Неправильный ответ';
        r1.style.color = "#bf1111";
    }

}

function check10() {
    var form = document.forms.work10;

    var ot1 = form.elements.answer1;

    var click = document.querySelector("#click10");

    //alert(ot1.value);
    if(ot1.value == 'Эней' /*|| ot1.value == 'Нет' || ot1.value == 'Тога' || ot1.value == 'Тогу'*/){
        var r1 = document.querySelector("#r10");
        r1.innerHTML = 'Правильный ответ';
        r1.style.color = "#1c8203";
        click.style.background = "#0ed145";
    } else {
        var r1 = document.querySelector("#r10");
        r1.innerHTML = 'Неправильный ответ';
        r1.style.color = "#bf1111";
    }

}

function check11() {
    var form = document.forms.work11;

    var ot1 = form.elements.answer1;

    var click = document.querySelector("#click11");

    //alert(ot1.value);
    if(ot1.value == 'Тирренское' /*|| ot1.value == 'Нет' || ot1.value == 'Тога' || ot1.value == 'Тогу'*/){
        var r1 = document.querySelector("#r11");
        r1.innerHTML = 'Правильный ответ';
        r1.style.color = "#1c8203";
        click.style.background = "#0ed145";
    } else {
        var r1 = document.querySelector("#r11");
        r1.innerHTML = 'Неправильный ответ';
        r1.style.color = "#bf1111";
    }

}

function check12() {
    var form = document.forms.work12;

    var ot1 = form.elements.answer1;

    var click = document.querySelector("#click12");

    //alert(ot1.value);
    if(ot1.value == 'этруски' || ot1.value == 'Этруск' /*|| ot1.value == 'Тога' || ot1.value == 'Тогу'*/){
        var r1 = document.querySelector("#r12");
        r1.innerHTML = 'Правильный ответ';
        r1.style.color = "#1c8203";
        click.style.background = "#0ed145";
    } else {
        var r1 = document.querySelector("#r12");
        r1.innerHTML = 'Неправильный ответ';
        r1.style.color = "#bf1111";
    }

}

function check13() {
    var form = document.forms.work13;

    var ot1 = form.elements.answer1;

    var click = document.querySelector("#click13");

    //alert(ot1.value);
    if(ot1.value == 'патриции' || ot1.value == 'Патриции'/* || ot1.value == 'Тога' || ot1.value == 'Тогу'*/){
        var r1 = document.querySelector("#r13");
        r1.innerHTML = 'Правильный ответ';
        r1.style.color = "#1c8203";
        click.style.background = "#0ed145";
    } else {
        var r1 = document.querySelector("#r13");
        r1.innerHTML = 'Неправильный ответ';
        r1.style.color = "#bf1111";
    }

}

function check14() {
    var form = document.forms.work14;

    var ot1 = form.elements.answer1;

    var click = document.querySelector("#click14");

    //alert(ot1.value);
    if(ot1.value == '244' /*|| ot1.value == 'Нет' || ot1.value == 'Тога' || ot1.value == 'Тогу'*/){
        var r1 = document.querySelector("#r14");
        r1.innerHTML = 'Правильный ответ';
        r1.style.color = "#1c8203";
        click.style.background = "#0ed145";
    } else {
        var r1 = document.querySelector("#r14");
        r1.innerHTML = 'Неправильный ответ';
        r1.style.color = "#bf1111";
    }

}

