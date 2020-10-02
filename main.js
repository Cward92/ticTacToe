//initialize header variables
let state = 0;

let main = document.getElementById('main');
let con = document.createElement('div');
    con.setAttribute('class', 'container');

function createHeader() {
    var head = document.createElement('div');
    var header = document.createElement('header');
    var div_0 = document.createElement('div');
    var p_score = document.createElement('p');
    var h1_title = document.createElement('h1');
    var p_player = document.createElement('p');

    head.setAttribute('class', 'header');
    head.setAttribute('id', 'header');
    div_0.setAttribute('class', 'm-2 text-center border-bottom');
    p_score.setAttribute('class', 'pr-3 d-flex justify-content-end');
    p_score.innerHTML = "Score: ";
    h1_title.innerHTML = "Tic Tac Toe";
    p_player.setAttribute('class', 'd-flex justify-content-start');
    p_player.innerHTML = "Turn: ";

    div_0.appendChild(p_score);
    div_0.appendChild(h1_title);
    div_0.appendChild(p_player);
    header.appendChild(div_0);
    head.appendChild(header);
    document.getElementById('main').appendChild(head);
}

// create main
function createBoard() {
    var row = document.createElement('div');
    row.setAttribute('id', 'board');
    row.setAttribute('class', 'row');
    con.appendChild(row);

    var hr = document.createElement('hr');

    for (let i = 0; i < 9; i++) {
        var col = document.createElement('div');
        var text = document.createTextNode("_");
        col.appendChild(text);
        col.setAttribute('id', "col_" + i);
        if (i < 3) {
            col.setAttribute('class', 'col-4 text-center border border-top-0');
        } else if (i > 5) {
            col.setAttribute('class', 'col-4 text-center border border-bottom-0');
        } else {
            col.setAttribute('class', 'col-4 text-center border');
        }
        row.appendChild(col);
    };
    con.appendChild(hr);
    main.appendChild(con);
}

function updateBlock() {
    if (state = 0) {
        cconsole.log("works");
    }
}

function resetState() {
    state = 0;
}

function createButton() {
    let div = document.createElement('div');
    div.setAttribute('class', 'btn');
    div.setAttribute('id', 'button');

    let btn = document.createElement('button');
    btn.setAttribute('class', 'btn btn-outline-success');
    btn.setAttribute('onClick', 'resetState()');
    btn.innerHTML = "Reset";
    div.appendChild(btn);
    con.appendChild(div);
}



createHeader();
createBoard();
createButton();