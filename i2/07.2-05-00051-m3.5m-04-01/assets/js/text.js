function text(text) {
    var text2 = document.querySelector(text);
    text2.style.display = "block";
    arr = ['#text1','#text2','#text3','#text4','#text5']; 
    for(var i = 0;i <arr.length;i++ ){
        if(arr[i] == text){
            arr.splice(i, 1);
        }
    }
    var k;
    for(var i = 0;i <arr.length;i++ ){
        k = document.querySelector(arr[i]);
        k.style.display = "none";
    }
}

