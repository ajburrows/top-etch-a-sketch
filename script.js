let paintingStatus = false;
let paintingColor = "red";
let mouseInToolContainer = false;

let body = document.querySelector("body");

let gridContainer = document.querySelector(".gridContainer");
let currentGridSize = 0;
let gridContainerWidth = gridContainer.offsetWidth - 2;
console.log(gridContainerWidth);

// Click in the body to toggle painting
body.onmousedown = function(){
    if (mouseInToolContainer == false){
        paintingStatus = !paintingStatus;
        updatePaintingState();
    }
}

// Get color picker boxes
let toolContainer = document.querySelector(".toolContainer");
let redPicker = document.querySelector(".colorPicker.red");
let bluePicker = document.querySelector(".colorPicker.blue");
let greenPicker = document.querySelector(".colorPicker.green");
let whitePicker = document.querySelector(".colorPicker.white");
redPicker.style.backgroundColor = "red";
bluePicker.style.backgroundColor = "blue";
greenPicker.style.backgroundColor = "green";
whitePicker.style.backgroundColor = "white";

// Keep track when the mouse is in the tool container so if the user clicks while in it (for example changing
// their color) do not change the painting status
toolContainer.onmouseenter = function(){
    mouseInToolContainer = true;
    console.log("enter");
};
toolContainer.onmouseleave = function(){
    mouseInToolContainer = false;
    console.log("exit");
};




// Switch painting color when clicking
redPicker.onclick = function(){
    console.log("b");
    paintingColor = "red";
}
bluePicker.onclick = function(){
    paintingColor = "blue";
}
greenPicker.onclick = function(){
    paintingColor = "green";
}
whitePicker.onclick = function(){
    paintingColor = "white";
}

function updatePaintingState(){
    let paintingStatusState = document.querySelector(".paintingStatusState");
    if (paintingStatus == true){
        paintingStatusState.textContent = "On";
    }
    else{
        paintingStatusState.textContent = "Off";
    }
}

// Populate gridContainer with the gridSquares
function createGrid(size){
    // TODO: delete all children in gridContainer before adding the new squares
    for (let i = 0; i < currentGridSize; i++){
        const removeElement = el => el.parentNode.removeChild(el);
        removeElement(document.querySelector('.gridSquare'));
    }

    // TODO: calculate what size the gridSquares need to be to fill up the container
    for (let i = 0; i < size * size; i++){
        const gridSquare = document.createElement("div");
        gridSquare.className = "gridSquare";
        gridSquare.style.backgroundColor = "white";
        gridSquare.style.padding = "0px";
        gridSquare.style.margin = "0px";
        
        console.log(gridContainerWidth / size);
        gridSquare.style.height = "" + gridContainerWidth / size + "px";
        gridSquare.style.width = "" + gridContainerWidth / size + "px";
        gridContainer.appendChild(gridSquare);
    
        gridSquare.onmouseenter = function(){
            if (paintingStatus == true){
                this.style.backgroundColor = paintingColor;
            }
        }
        gridSquare.onmousedown = function(){
            if (paintingStatus == false){
                this.style.backgroundColor = paintingColor;
            }
        }
    }
    currentGridSize = size * size;
}





// Get input from the resize text field
let resizeTextInput = document.querySelector(".resizeTextInput");
let resizeButton = document.querySelector(".resizeButton");
resizeButton.onclick = function() {
    let newSize = resizeTextInput.value;
    createGrid(newSize);
}

createGrid(16);