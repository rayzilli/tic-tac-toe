
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

    const resetBoard = ()=>{
        board = ['','','','','','','','','']
    }

    return{
        getBoard,
        resetBoard,
    }

})();


const displayBoard = function(){
    const board = gameBoard.getBoard();
    const square = document.querySelectorAll('.square');
    return square.forEach((square, index) => {
        // console.log(`Updating square ${index} with value ${board[index]}`); 
        square.textContent = board[index];
    });
};




const displayController = function(){
    let currentValue = 'X';
    const square = document.querySelectorAll('.square');
    const board = gameBoard.getBoard();
    const wins = document.getElementById('winner');
    let count = 0;

    // Define the clickHandler function
    const clickHandler = (e) => {
        count ++;
        console.log(count);
        board.splice((e.target.dataset.square)-1, 1, currentValue);
        displayBoard(board);


        if (checkWinner(board)){
            console.log(`${currentValue} wins!`);
            
            wins.innerHTML = `${currentValue} wins!`;
            //remove event listener
            for(let i = 0; i<square.length; i++){
                square[i].removeEventListener('click', clickHandler);
            }
        }

        if (count === 9 && !checkWinner(board)){
            console.log('draw');
            wins.innerHTML = ('draw')

        }
        currentValue = currentValue === 'X' ? 'O' : 'X';
    }

    // Add the event listeners using the clickHandler function
    for(let i = 0; i<square.length; i++){
        square[i].addEventListener('click', clickHandler, { once: true });
    }
    return {
        clickHandler,
    }
};

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', ()=> {
     gameBoard.resetBoard();
     displayBoard();
     document.getElementById('winner').innerHTML = '';
     displayController();
    console.log('reset');
});


displayBoard();
displayController();


