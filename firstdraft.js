/*----- state (variables) -----*/
// create turn and board
let turn = 'X';
let board;

// array of win conditions
const winningCombos  = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//set main elements for documents
let main = document.getElementById('main');
let con = document.createElement('div');
con.setAttribute('class', 'container');
createHeader();
createBoard();

let squares = Array.from(document.querySelectorAll('#board div'));
let c_turn = document.getElementById('score');


/*----- functions -----*/
function init() {
    board = ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'];
    render();
    document.getElementById('board').addEventListener('click', handleTurn);
};

function render() {
    board.forEach(function (value, index) {
        squares[index].textContent = value;
    });
    c_turn.innerHTML = win ? `${win} wins the game!` : `Turn: ${turn}`;
};

/*----- create header -------*/
function createHeader() {
    var head = document.createElement('div');
    var header = document.createElement('header');
    var div_0 = document.createElement('div');
    var h1_title = document.createElement('h1');
    var p_turn = document.createElement('p');

    head.setAttribute('class', 'header');
    head.setAttribute('id', 'header');
    div_0.setAttribute('class', 'm-2 text-center border-bottom');
    h1_title.innerHTML = "Tic Tac Toe";
    p_turn.setAttribute('class', 'd-flex justify-content-start');
    p_turn.setAttribute('id', 'score');
    p_turn.innerHTML = `Turn: ${turn}`;

    div_0.appendChild(h1_title);
    div_0.appendChild(p_turn);
    header.appendChild(div_0);
    head.appendChild(header);
    document.getElementById('main').appendChild(head);

};

/*-------- create board ---------*/
function createBoard() {
    var row = document.createElement('div');
    row.setAttribute('id', 'board');
    row.setAttribute('class', 'row');
    con.appendChild(row);


    for (let i = 0; i < 9; i++) {
        var col = document.createElement('div');
        col.setAttribute('class', 'col-4 text-center border border-dark');
        row.appendChild(col);
    };
    main.appendChild(con);

}

function handleTurn(e) {
    let index = squares.findIndex(function(squares) {
        return squares === e.target;
    });
    board[index] = turn;
    turn = turn === 'X' ? 'O'  : 'X';
    win = getWinner();
    render();
    
};

function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
            winner = board[combo[0]];
        }
    }); 
    return winner;
};

init();