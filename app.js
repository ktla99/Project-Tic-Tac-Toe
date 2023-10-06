const gameboard = document.getElementById("gameboard");
const infoDisplay = document.getElementById("info");
const startBoxes = [
    "", "", "",
    "", "", "",
    "", "", ""
]

function createBoard() {
    startBoxes.forEach((_box, index) => {
        const boxElement = document.createElement("div");
        boxElement.classList.add("square");
        gameboard.append(boxElement)
    })
}
createBoard();

