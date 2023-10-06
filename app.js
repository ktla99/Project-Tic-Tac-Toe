const gameBoard = document.getElementById("gameBoard");
const infoDisplay = document.getElementById("info");
const startBoxes = [
    "", "", "",
    "", "", "",
    "", "", ""
]
let choice = "circle";
infoDisplay.textContent = "Circle goes first";


function createBoard() {
    startBoxes.forEach((_box, index) => {
        const boxElement = document.createElement("div");
        boxElement.classList.add("square");
        boxElement.id = index;
        boxElement.addEventListener("click", addChoice);
        gameBoard.append(boxElement);
    })
}
createBoard();

function addChoice(e) {
    const choiceDisplay = document.createElement("div");
    choiceDisplay.classList.add(choice);
    e.target.append(choiceDisplay);
    choice = choice === "circle" ? "cross" : "circle"
    infoDisplay.textContent = "It is now " + choice + "'s go.";
    e.target.removeEventListener("click", addChoice);
}

