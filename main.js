//View

let turn = 'X';
let arr = ['-', '-', '-', 
           '-', '-', '-', 
           '-', '-', '-'];
let movesUsed = 0;
const movesAllowed = 9;
let winner = false;

let p1score = 0;
let p2score = 0;

let p1name;
let p2name;

let currentPlayer = 1;

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


//declare function to generate html elements
function generateElement(
    type, id, classList, eventListener=false
    ) {
    let newElement = document.createElement(type);
    newElement.id = id;
    newElement.setAttribute('class', classList);
    return newElement;
};

let main = document.getElementById('main'); //main div
let h_row = generateElement('div', 'head', 'row text-center');
let title = generateElement('h1', 'title', 'pt-3 col-12');
    title.innerHTML = 'Tic-Tac-Toe';
let score1 = generateElement('p', 'player_1_score', 'col-6');
let score2 = generateElement('p', 'player_2_score', 'col-6');
let board = generateElement('div', 'board', 'row pl-n3 d-flex justify-content-center');
for(let i = 0; i < 9; i++) {
    let newCol = generateElement('div', i, 'col-4 border');
    board.appendChild(newCol);
};
let reset = generateElement('div', 'reset', 'col-2 button btn-danger');
reset.innerHTML = 'Reset';
reset.addEventListener('click', init);

h_row.appendChild(title);
h_row.appendChild(score1);
h_row.appendChild(score2);
main.appendChild(h_row);
main.appendChild(board);
main.appendChild(reset);

chooseName();
init();

function chooseName() {
    console.log(score1)
    p1name = prompt("Enter Name of Player 1", "");
    if(p1name == null || p1name == '') {
        p1name = 'Player 1';
    //     score1.innerHTML = `${p1name}: ${p1score}`;
    // } else {
    }
    score1.innerHTML = `<span style='color: red;'> ${p1name}: ${p1score}`;
    p2name = prompt("Enter Name of Player 2", "");
    if(p2name == null || p2name == '') {
        p2name = 'Player 2';
    //     score2innerHTML = `${p2name}: ${p2score}`;
    // } else {
    }
    score2.innerHTML = `${p2name}: ${p2score}`;
}


function init(){
    arr = ['-', '-', '-', 
           '-', '-', '-', 
           '-', '-', '-'];
    let squares = Array.from(document.querySelectorAll('#board div'));
    for(let i = 0; i < squares.length; i++){
        squares[i].innerHTML = arr[i];
        squares[i].addEventListener('click', doTurn);
    };
    winner = false;
    movesUsed = 0;
    currentPlayer = 1;
    turn = 'X';
};

function doTurn(e){
    if(winner == true){
        return;
    } else {
        updateGrid(e);
        winCondition();
        checkWinner();
        updateTurn();
    };
};

function updateGrid(e){
    e.target.innerHTML = `${turn}`;
    arr[e.target.id] = `${turn}`;
    e.target.removeEventListener('click', doTurn);
};

function winCondition(){
    movesUsed++;
    if(movesUsed > 4) {
        checkWin();
    };
};

function checkWin() {
    for(var i = 0; i < winConditions.length; i++) {
        var sum = 0;
        var win = winConditions[i];
        for(var j = 0; j < win.length; j++) {
            if(arr[win[j]] === `${turn}`) {
                sum++;
            };
        };
        if(sum === 3) {
            winner = true;
            console.log(winner);
            return winner;
        };
    };
    return winner = false;
};

function checkWinner(){
    if (winner == true) {
        alert('A winner is YOU');
        console.log(currentPlayer);
        if(currentPlayer == 1) {
            p1score++;
            score1.innerHTML = `${p1name}: ${p1score}`;
        } else if(currentPlayer == 2){
            p2score++;
            score2.innerHTML = `${p2name}: ${p2score}`;
        }
    };
    if (movesUsed >= movesAllowed && winner == false) {
        alert('Sorry! A winner is Nobody!');
    };
};

function updateTurn() {
    if(turn == 'X') {
        turn = 'O';
    } else {
        turn = "X";
    };
    if(currentPlayer == 1) {
        currentPlayer = 2;
        score2.innerHTML = `<span style='color: red;'>${p2name}: ${p2score}</span>`;
        score1.innerHTML = `${p1name}: ${p1score}`
    } else if(currentPlayer == 2){
        currentPlayer = 1;
        score1.innerHTML = `<span style='color: red;'>${p1name}: ${p1score}</span>`;
        score2.innerHTML = `${p2name}: ${p2score}`

    };
};