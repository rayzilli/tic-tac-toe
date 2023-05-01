
const gameBoard = (function(){
    let board = ['x','o','x','x','o','x','x','o','x'];
    const getBoard = () => {
        return board;
    }

    return{
        getBoard,
    }

})();


const displayBoard = function(){
    const board = gameBoard.getBoard();
    const square = document.querySelectorAll('.square');
    console.log(board);
    square.forEach((square, index) => {
        console.log(`Updating square ${index} with value ${board[index]}`);

        square.textContent = board[index];
    });
}

document.addEventListener("DOMContentLoaded", function() {
    displayBoard();
});