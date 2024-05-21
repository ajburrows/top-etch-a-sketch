let paintingStatus = false;
let paintingColor = "red";

let gridContainer = document.querySelector(".gridContainer");
let body = document.querySelector("body");

// Click in the body to toggle painting
body.onmousedown = function(){
    //paintingStatus = !paintingStatus;
    if (paintingStatus == false){
        paintingStatus = true;
    }
    else{
        paintingStatus = false;
    }
}

// Get color picker boxes
let redPicker = document.querySelector(".colorPicker.red");
let bluePicker = document.querySelector(".colorPicker.blue");
let greenPicker = document.querySelector(".colorPicker.green");
let whitePicker = document.querySelector(".colorPicker.white");
redPicker.style.backgroundColor = "red";
bluePicker.style.backgroundColor = "blue";
greenPicker.style.backgroundColor = "green";
whitePicker.style.backgroundColor = "white";


// Switch painting color when clicking
redPicker.onclick = function(){
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


// Populate gridContainer with the gridSquares

for (let i = 0; i < 256; i++){
    const gridSquare = document.createElement("div");
    gridSquare.style.backgroundColor = "white";
    gridSquare.style.padding = "0px";
    gridSquare.style.margin = "0px";

    gridSquare.style.height = "40px";
    gridSquare.style.width = "40px";
    gridContainer.appendChild(gridSquare);

    gridSquare.onmouseenter = function(){
        if (paintingStatus == true){
            this.style.backgroundColor = paintingColor;
        }
    }
}

