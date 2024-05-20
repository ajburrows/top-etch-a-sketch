let gridContainer = document.querySelector(".gridContainer");
let paintingStatus = false;
let body = document.querySelector("body");
body.onmousedown = function(){
    //paintingStatus = !paintingStatus;
    if (paintingStatus == false){
        paintingStatus = true;
    }
    else{
        paintingStatus = false;
    }
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
            this.style.backgroundColor = "black";
        }
    }
}

