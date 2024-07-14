function variant(variant){
    var variant = document.querySelector(variant);
    //alert (variant.id);
    if ( variant.id == "variant1"){
        variant.style.backgroundColor = "#1c8203";
        var variant2 = document.querySelector("#variant2");
        variant2.style.backgroundColor = "#747674";
        var bloke = document.querySelector("#var1");
        var bloke2 = document.querySelector("#var2");
        bloke.style.display = "block";
        bloke2.style.display = "none";
    } else if (variant.id == "variant2"){
        variant.style.backgroundColor = "#1c8203";
        var variant2 = document.querySelector("#variant1");
        variant2.style.backgroundColor = "#747674";
        var bloke = document.querySelector("#var1");
        var bloke2 = document.querySelector("#var2");
        bloke.style.display = "none";
        bloke2.style.display ="block";
    }
}