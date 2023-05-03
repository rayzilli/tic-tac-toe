
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  function checkWinner(board) {
    return winConditions.some(combination => combination.every(index =>board[index] !== '' && board[index] === board[combination[0]]));
  }

    

const gameBoard = (function(){
    let board = ['','','','','','','','',''];
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
    square.forEach((square, index) => {
        // console.log(`Updating square ${index} with value ${board[index]}`); 
        square.textContent = board[index];
    });
};
displayBoard();


const displayController = (function(){
    let currentValue = 'X';
    const square = document.querySelectorAll('.square');
    const board = gameBoard.getBoard();
    for(let i = 0; i<square.length; i++){
        square[i].addEventListener('click', (e) => {
            board.splice((e.target.dataset.square)-1, 1, currentValue);
            displayBoard(board);
            if (checkWinner(board)){
                console.log(`${currentValue} wins!`);
            }
            currentValue = currentValue === 'X' ? 'O' : 'X';
        }, { once: true });
    }
 
})();



