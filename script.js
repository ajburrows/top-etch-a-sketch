const gridContainer = document.querySelector(".gridContainer");



// Populate gridContainer with the gridSquares

for (let i = 0; i < 256; i++){
    const gridSquare = document.createElement("div");
    gridSquare.style.backgroundColor = "white";
    gridSquare.style.padding = "0px";
    gridSquare.style.margin = "0px";

    gridSquare.style.height = "40px";
    gridSquare.style.width = "40px";
    gridContainer.appendChild(gridSquare);
}

