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
    checkScore();
}

function checkScore() {
    const allSquares = document.querySelectorAll(".square");
    const winConditions = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    winConditions.forEach(array => {
        const circleWins = array.every(box => 
            allSquares[box].firstChild?.classList.contains("circle"))
   

    if(circleWins) {
        infoDisplay.textContent = "Circle Wins!";
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
        return
    };
    });
    winConditions.forEach(array => {
        const crossWins = array.every(box => 
            allSquares[box].firstChild?.classList.contains("cross"))
   

    if(crossWins) {
        infoDisplay.textContent = "Cross Wins!";
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
        return
    };
    });
};
