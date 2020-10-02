# Pseudocode
Steps:
Init
//set states to 0
//display score
//display current player
//modal Instructions

Render Board
//display divs

Advance State
//update html with new json or state change (onclick updates state)

Determine Win Condition
//if statement {number of turns >= 5 and <= 9}, calculate if 3 in a row at end of player turn.
//if win, display current player as winner
//if state > 9, display no winner - tie state

Display Results
//display win/tie results in separate modal
//update score

Reset/End
//set states to 0
//reset current player to: player 1


how does tic tac toe work?
we need to:
create the header
//createHeader();

create the board
//createBoard();

create the button
//createButton();

define game rules (3 x/o's in a row ends the game)
    //3x3 grid
    //Make first mark
    //Take turns
    //"x" and "o"
    //define win or declare tie
    //end game


define winner
update score
enable reset/end

what should the header have?
header should have a:
score(player 1 wins, player 2 wins)
title
player/turn

what should the board have?
tic tac toe board(3x3 grid)
interact-able squares (onclick)
changeable O and X states for each square

what should the button have?
reset function
back function
start function