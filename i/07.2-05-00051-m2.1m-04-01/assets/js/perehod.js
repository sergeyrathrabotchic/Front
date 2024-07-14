function onclik1 (){
    var main = document.querySelector(".main");
    main.style.display = "none";
    var history1 = document.querySelector("#history1");
    history1.style.display = "block";
}
function onclik2 (){
    var main = document.querySelector(".main");
    main.style.display = "none";
    var history2 = document.querySelector("#history2");
    history2.style.display = "block";
}
function onclik3 (){
    var main = document.querySelector(".main");
    main.style.display = "none";
    var history3 = document.querySelector("#history3");
    history3.style.display = "block";
}
function onclik4 (){
    var main = document.querySelector(".main");
    main.style.display = "none";
    var history4 = document.querySelector("#history4");
    history4.style.display = "block";
}


function onclik (){
    var history1 = document.querySelector("#history1");
    var history2 = document.querySelector("#history2");
    var history3 = document.querySelector("#history3");
    var history4 = document.querySelector("#history4");
    var main = document.querySelector(".main");
    if (history1.style.display == "block"){
        history1.style.display = "none";
        main.style.display = "block";
    }
    if (history2.style.display == "block"){
        history2.style.display = "none";
        main.style.display = "block";
    }
    if (history3.style.display == "block"){
        history3.style.display = "none";
        main.style.display = "block";
    }
    if (history4.style.display == "block"){
        history4.style.display = "none";
        main.style.display = "block";
    }
}