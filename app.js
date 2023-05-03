
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
        console.log(`Updating square ${index} with value ${board[index]}`); 
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
            console.log(e.target.dataset.square)
            board.splice((e.target.dataset.square)-1, 1, currentValue)
            currentValue = currentValue === 'X' ? 'O' : 'X';
            displayBoard();
        }, { once: true });
    }
})();



    

