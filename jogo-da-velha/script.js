const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");

let isCircleTurn = false;

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
};

const swapTurns = () => {
    isCircleTurn = !isCircleTurn;

    board.classList.remove("circle");
    board.classList.remove("x");

    if(isCircleTurn){
        board.classList.add("circle");
    }else{
        board.classList.add("x");
    }

};

const handleClick = (e) => {
    // Colocar a marca (X ou Círculo)

    const cell = e.target;
    const classToAdd = isCircleTurn ? "cirlce" : "x";

        placeMark(cell, classToAdd);

    // Verificar por vitória
    // Verificar pór empate
    // Mudar símbolo

    swapTurns();
};

for (const cell of cellElements){
    cell.addEventListener("click", handleClick, {once: true});
}

