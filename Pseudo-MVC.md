 VIEW
 declare function to generate html elements
 function generateElements(type, id, classList, parent, eventListener){...}

 generate 
    display:
        header
        <div class="row">
        <div class="col">
       Title of game
            <h2>Title</h2>
        Score(Player 1, Player 2)
            <p>Player 1: x</p>
            <p>Player 2: x</p>
        Current Turn(X or O)
            <p>Current Turn: (X/O)</p>
        game:
        grid(3x3)
            <div class="row">
                 <div class="col-4"> x9
        button(reset)
            <div class="button">

//functions to update view 
//update "grid" onclick
updateGrid(){
    column.innerHTML = `${Turn}`; // add X or O
    arr[column.id] =  `${Turn}`; // set corresponding arr value
    column.removeEventListener; // make unclickable
}

//update "score" onWin
updateScore() {
    if (current_player = "Player 1") {
        player1score++;
    } else {
        player2score++;
    };
};

//update "winner" onWin
checkWinner() {
    if (winner == true) {
        alert(`Winner is ${current_player}`);
        updateScore();
    };
    if (movesUsed >= movesAllowed && winner == false) {
        alert(`Sorry! Looks like a tie game!`);
    };
};

MODEL
//current Game State
    turn = x
    current_player = "Player 1";
    player1Score = 0
    player2Score = 0
    winner = false;

current Board State
    //grid tiles
        // '-' empty
        // 'x' for player1
        // 'o' for player2
    //initialize as:
           arr = ['-', '-', '-',
                  '-', '-', '-', 
                  '-', '-', '-',];

//declare possible values of win conditions
    winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        ];

initialize other global variables
    var movesUsed = 0
    var movesAllowed = 9
    

CONTROLLER
//create onClick function for grid tiles
on column click:
    updateGrid();
    winConditions();
    checkWinner();
    updateTurn();

winConditions() {
    movesUsed++;
    if(movesUsed > 4){
        checkWin();
    };
};

//update "current turn" onclick
updateTurn() {
    if(turn == "x") {
        turn = "o";
    } else {
        turn = "x";
    };
    if(current_player == "Player 1") {
        current_player = "Player 2";
    } else {
        current_player = "Player 1";
    };
};

Win check function
have grid array and current turn value as parameters
checkWin(arr, turn) {
  for(var i = 0; i < winConditions.length; i++) { 
    initialize and reset value of sum every loop
    var sum = 0; 
    var win = winConditions[i];
    (ex: winCondition[2][0] = 6), if arr[6].textContent = turn('x'), sum goes up)
    if all 3 elements of winCondition element return true, sum will equal 3, and Player X will win
    for(var j = 0; j < win.length; j++) { 
      if(arr[win[j]].textcontent == turn) {
        sum++;
      };
    };

    if(sum == 3) {
      return winner = true;
    };
  };
  return winner = false;
};
