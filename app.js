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
        boxElement.id = index;
        boxElement.addEventListener("click", addChoice);
        gameboard.append(boxElement);
    })
}
createBoard();

function addChoice(e) {
    const choiceDisplay = document.createElement("div");
    choiceDisplay.classList.add("circle");
    e.target.append();
}