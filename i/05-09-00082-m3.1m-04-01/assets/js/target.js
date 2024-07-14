
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
            img.style.left = pageX - shiftX + 'px';
            img.style.top = pageY - shiftY + 'px';
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

        if (startingPosition != target1 || startingPosition != target2 || startingPosition != target3 || startingPosition != target4 ||
        startingPosition != target5 || startingPosition != target6 || startingPosition != target7 || startingPosition != target8) {

            if (startingPosition){
                removeBackground(startingPosition);
            }

            startingPosition = target1
            if (startingPosition){
                createBackground(startingPosition);
            } else if (!startingPosition) {
                startingPosition = target2
                if (startingPosition){
                    createBackground(startingPosition);
                }  else if (!startingPosition) {
                    startingPosition = target3
                    if (startingPosition){
                        createBackground(startingPosition);
                    } else if (!startingPosition) {
                        startingPosition = target4
                        if (startingPosition){
                            createBackground(startingPosition);
                        } else if (!startingPosition) {
                            startingPosition = target5
                            if (startingPosition){
                                createBackground(startingPosition);
                            } else if (!startingPosition) {
                                startingPosition = target6
                                if (startingPosition){
                                    createBackground(startingPosition);
                                } else if (!startingPosition) {
                                    startingPosition = target7
                                    if (startingPosition){
                                        createBackground(startingPosition);
                                    } else if (!startingPosition) {
                                        startingPosition = target8
                                        if (startingPosition){
                                            createBackground(startingPosition);
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

    function createBackground(elem) {
        elem.style.background = "green";
    }

    function removeBackground(elem) {
        elem.style.background = "#9e9fa3";
    }
}

transferPicture(ship);
transferPicture(home);
transferPicture(velo);
transferPicture(velo2);
transferPicture(home2);
transferPicture(ship2);
transferPicture(human);
transferPicture(human2);

