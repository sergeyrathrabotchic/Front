
function transferPicture(img)
{
    let startingPosition = null;

    img.onmousedown = function(event) { 

        let shiftX = event.clientX - img.getBoundingClientRect().left;
        let shiftY = event.clientY - img.getBoundingClientRect().top;
       
        img.style.position = 'absolute';
        img.style.zIndex = 1000;
        document.body.append(img);
        

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            img.style.left = pageX - img.offsetWidth / 2 + 'px';
            img.style.top = pageY - img.offsetHeight / 2 + 'px';
            /*img.style.left = pageX - shiftX + 'px';
            img.style.top = pageY - shiftY + 'px';*/
            //alert(img.style.top);
        }

        function сheckingTheStatus(event) {
        moveAt(event.pageX, event.pageY);

        img.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        img.hidden = false;

        if (!elemBelow) return;

        let target1 = elemBelow.closest('#target1');
        let target2 = elemBelow.closest('#target2');
        let target3 = elemBelow.closest('#target3');
        let target4 = elemBelow.closest('#target4');
        let target5 = elemBelow.closest('#target5');
        let target6 = elemBelow.closest('#target6');
        let target7 = elemBelow.closest('#target7');
        let target8 = elemBelow.closest('#target8');
        let target9 = elemBelow.closest('#target9');
        let target10 = elemBelow.closest('#target10');
        let target11 = elemBelow.closest('#target11');
        let target12 = elemBelow.closest('#target12');
        let target13 = elemBelow.closest('#target13');
        let target14 = elemBelow.closest('#target14');

        if (startingPosition != target1 || startingPosition != target2 || startingPosition != target3 || startingPosition != target4 ||
        startingPosition != target5 || startingPosition != target6 || startingPosition != target7 || startingPosition != target8
        || startingPosition != target9 || startingPosition != target10 || startingPosition != target11 || startingPosition != target12
        || startingPosition != target13 || startingPosition != target14) {

            if (startingPosition){
                removeBackground(startingPosition); 
            }

            startingPosition = target1
            if (startingPosition){
                //alert(img.id == "Simbol");
                if (img.id == "text1"){
                    createBackground(startingPosition,"#true1","#folse1");
                } else {
                    createBackground2(startingPosition,"#folse1","#true1");
                }
            } else if (!startingPosition) {
                startingPosition = target2
                if (startingPosition){
                    if (img.id == "text2"){
                        createBackground(startingPosition,"#true2","#folse2");
                    } else {
                        createBackground2(startingPosition,"#folse2","#true2");
                    }
                    
                }  else if (!startingPosition) {
                    startingPosition = target3
                    if (startingPosition){
                        if (img.id == "text3"){
                            createBackground(startingPosition,"#true3","#folse3");
                        } else {
                            createBackground2(startingPosition,"#folse3","#true3");
                        }
                    } else if (!startingPosition) {
                        startingPosition = target4
                        if (startingPosition){
                            if (img.id == "text4"){
                                createBackground(startingPosition,"#true4","#folse4");
                            } else {
                                createBackground2(startingPosition,"#folse4","#true4");
                            }
                        } else if (!startingPosition) {
                            startingPosition = target5
                            if (startingPosition){
                                if (img.id == "baggageClaim"){
                                    createBackground(startingPosition,"#true5","#folse5");
                                } else {
                                    createBackground2(startingPosition,"#folse5","#true5");
                                }
                            } else if (!startingPosition) {
                                startingPosition = target6
                                if (startingPosition){
                                    if (img.id == "gate"){
                                        createBackground(startingPosition,"#true6","#folse6");
                                    } else {
                                        createBackground2(startingPosition,"#folse6","#true6");
                                    }
                                } else if (!startingPosition) {
                                    startingPosition = target7
                                    if (startingPosition){
                                        if (img.id == "checkInDesk"){
                                            createBackground(startingPosition,"#true7","#folse7");
                                        } else {
                                            createBackground2(startingPosition,"#folse7","#true7");
                                        }
                                    } else if (!startingPosition) {
                                        startingPosition = target8
                                        if (startingPosition){
                                            if (img.id == "airline"){
                                                createBackground(startingPosition,"#true8","#folse8");
                                            } else {
                                                createBackground2(startingPosition,"#folse8","#true8");
                                            }
                                        }  else if (!startingPosition) {
                                            startingPosition = target9;
                                            if (startingPosition){
                                                if (img.id == "gate"){
                                                    createBackground(startingPosition,"#true9","#folse9");
                                                } else {
                                                    createBackground2(startingPosition,"#folse9","#true9");
                                                }
                                            } else if (!startingPosition) {
                                                startingPosition = target10;
                                                if (startingPosition){
                                                    if (img.id == "boardingPass"){
                                                        createBackground(startingPosition,"#true10","#folse10");
                                                    } else {
                                                        createBackground2(startingPosition,"#folse10","#true10");
                                                    }
                                                } else if (!startingPosition){
                                                    startingPosition = target11;
                                                    if (startingPosition){
                                                        if (img.id == "toBoard"){
                                                            createBackground(startingPosition,"#true11","#folse11");
                                                        } else {
                                                            createBackground2(startingPosition,"#folse11","#true11");
                                                        }
                                                    } else if (!startingPosition){
                                                        startingPosition = target12;
                                                        if (startingPosition){
                                                            if (img.id == "toLand"){
                                                                createBackground(startingPosition,"#true12","#folse12");
                                                            } else {
                                                                createBackground2(startingPosition,"#folse12","#true12");
                                                            }
                                                        } else if (!startingPosition){
                                                            startingPosition = target13;
                                                            if (startingPosition){
                                                                if (img.id == "toTakeOff"){
                                                                    createBackground(startingPosition,"#true13","#folse13");
                                                                } else {
                                                                    createBackground2(startingPosition,"#folse13","#true13");
                                                                }
                                                            } else if (!startingPosition){
                                                                startingPosition = target14;
                                                                if (startingPosition){
                                                                    if (img.id == "toCheckIn"){
                                                                        createBackground(startingPosition,"#true14","#folse14");
                                                                    } else {
                                                                        createBackground2(startingPosition,"#folse14","#true14");
                                                                    }
                                                                } 
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } 
                                } 
                            }  
                        } 
                    }
                } 
            } 
        }
        
        }

        document.addEventListener('mousemove', сheckingTheStatus);

        img.onmouseup = function() {
        document.removeEventListener('mousemove', сheckingTheStatus);
        img.onmouseup = null;
        };
    }; 

    img.ondragstart = function() {
    return false;
    };

    function createBackground(elem, id, id2) {
        
        var id = document.querySelector(id);
        var id2 = document.querySelector(id2);
        id.style.display = "block";
        id2.style.display = "none";
        elem.style.background = "green";
    }

    function createBackground2(elem, id, id2) {
        var id = document.querySelector(id);
        var id2 = document.querySelector(id2);
        id.style.display = "block";
        id2.style.display =  "none";
        elem.style.background = "red";
    }

    function removeBackground(elem) {
        elem.style.background = "#ffffff";
    }
}

transferPicture(text1);
transferPicture(text2);
transferPicture(text3);
transferPicture(text4);

/*transferPicture(boardingPass);
transferPicture(toBoard);
transferPicture(toLand);
transferPicture(toTakeOff);
transferPicture(toCheckIn);*/

