let introduction = document.getElementById('intro')
let startButton = document.getElementById('begin-button')

const gameBoard = () => {
    var board = document.getElementById('board');
    var a1 = document.createElement('div');
    a1.id = "a1";
    a1.className = "playGrid";
    board.appendChild(a1);
    var a2 = document.createElement('div');
    a2.id = "a2";
    a2.className = "playGrid";
    board.appendChild(a2);
    var a3 = document.createElement('div');
    a3.id = "a3";
    a3.className = "playGrid";
    board.appendChild(a3);
    var a4 = document.createElement('div');
    a4.id = "a4";
    a4.className = "playGrid";
    board.appendChild(a4);
    var a5 = document.createElement('div');
    a5.id = "a5";
    a5.className = "playGrid";
    board.appendChild(a5);
    var a6 = document.createElement('div');
    a6.id = "a6";
    a6.className = "playGrid";
    board.appendChild(a6);
    var a7 = document.createElement('div');
    a7.id = "a7";
    a7.className = "playGrid";
    board.appendChild(a7);
    var a8 = document.createElement('div');
    a8.id = "a8";
    a8.className = "playGrid";
    board.appendChild(a8);
    var a9 = document.createElement('div');
    a9.id = "a9";
    a9.className = "playGrid";
    board.appendChild(a9);
}

startButton.addEventListener("click", () => {
    introduction.style.opacity = '0';
    startButton.style.opacity = '0';
})

startButton.addEventListener("transitionend", () => {
    let p1name = document.getElementById("p1name").value;
    let p2name = document.getElementById("p2name").value;
    if (p1name == "") {
        p1name = "Player 1"
    };
    if (p2name == "") {
        p2name = "Player 2"
    };
    introduction.remove();
    startButton.remove();
    let newBoard = gameBoard();
    let newGame = gameStart(p1name, p2name);
    newGame.turn();
})

const gameStart = (player1, player2) => {
    let turn = () => {
        let selectableBoard = document.querySelectorAll(".playGrid")
        let count = 1;
        let result =  document.getElementById("turn");
        let a1 = document.getElementById("a1");
        let a2 = document.getElementById("a2");
        let a3 = document.getElementById("a3");
        let a4 = document.getElementById("a4");
        let a5 = document.getElementById("a5");
        let a6 = document.getElementById("a6");
        let a7 = document.getElementById("a7");
        let a8 = document.getElementById("a8");
        let a9 = document.getElementById("a9");
        let replayButton = document.createElement('button')
        replayButton.id = "replay"
        replayButton.innerHTML = "Play Again!"
        replayButton.className = "begin"
        let replayButtonSection = document.getElementById('btn2');
        replayButton.addEventListener("click", () => {
            count = 1;
            result.innerHTML = "";
            a1.innerHTML = "";
            a2.innerHTML = "";
            a3.innerHTML = "";
            a4.innerHTML = "";
            a5.innerHTML = "";
            a6.innerHTML = "";
            a7.innerHTML = "";
            a8.innerHTML = "";
            a9.innerHTML = "";
            replayButton.remove();
        })
        function winchecker() {
            if (a1.innerHTML == a2.innerHTML && a2.innerHTML == a3.innerHTML && a1.innerHTML != "" && a2.innerHTML != "" && a3.innerHTML != "") {
                if (a1.innerHTML == "X") {
                    result.innerHTML = player1 + " WINS!"
                    count = 999;
                    replayButtonSection.appendChild(replayButton);

                } else if (a1.innerHTML == "O") {
                    result.innerHTML = player2 + " WINS!"
                    count = 999;
                    replayButtonSection.appendChild(replayButton);
                }
            } else if (a1.innerHTML == a5.innerHTML && a5.innerHTML == a9.innerHTML && a1.innerHTML != "" && a5.innerHTML != "" && a9.innerHTML != "") {
                if (a1.innerHTML == "X") {
                    result.innerHTML = player1 + " WINS!"
                    count = 999;
                    replayButtonSection.appendChild(replayButton);
                } else if (a1.innerHTML == "O") {
                    result.innerHTML = player2 + " WINS!"
                    count = 999;
                    replayButtonSection.appendChild(replayButton);
                }
            } else if (a1.innerHTML == a4.innerHTML && a4.innerHTML == a7.innerHTML && a1.innerHTML != "" && a4.innerHTML != "" && a7.innerHTML != "") {
                if (a1.innerHTML == "X") {
                    result.innerHTML = player1 + " WINS!"
                    count = 999;
                    replayButtonSection.appendChild(replayButton);
                } else if (a1.innerHTML == "O") {
                    result.innerHTML = player2 + " WINS!"
                    count = 999;
                    replayButtonSection.appendChild(replayButton);
                }
            } else if (a2.innerHTML == a5.innerHTML && a5.innerHTML == a8.innerHTML && a2.innerHTML != "" && a5.innerHTML != "" && a8.innerHTML != "") {
                if (a2.innerHTML == "X") {
                    result.innerHTML = player1 + " WINS!"
                    count = 999;
                    replayButtonSection.appendChild(replayButton);
                } else if (a2.innerHTML == "O") {
                    result.innerHTML = player2 + " WINS!"
                    count = 999;
                    replayButtonSection.appendChild(replayButton);
                }
            } else if (a3.innerHTML == a6.innerHTML && a6.innerHTML == a9.innerHTML && a3.innerHTML != "" && a6.innerHTML != "" && a9.innerHTML != "") {
                if (a3.innerHTML == "X") {
                    result.innerHTML = player1 + " WINS!"
                    count = 999;
                    replayButtonSection.appendChild(replayButton);
                } else if (a3.innerHTML == "O") {
                    result.innerHTML = player2 + " WINS!"
                    count = 999;
                    replayButtonSection.appendChild(replayButton);
                }
            } else if (a3.innerHTML == a5.innerHTML && a5.innerHTML == a7.innerHTML && a3.innerHTML != "" && a5.innerHTML != "" && a7.innerHTML != "") {
                if (a3.innerHTML == "X") {
                    result.innerHTML = player1 + " WINS!"
                    count = 999;
                    replayButtonSection.appendChild(replayButton);
                } else if (a3.innerHTML == "O") {
                    result.innerHTML = player2 + " WINS!"
                    count = 999;
                    replayButtonSection.appendChild(replayButton);
                } 
            } else if (a4.innerHTML == a5.innerHTML && a5.innerHTML == a6.innerHTML && a4.innerHTML != "" && a5.innerHTML != "" && a6.innerHTML != "") {
                if (a4.innerHTML == "X") {
                    result.innerHTML = player1 + " WINS!"
                    count = 999;
                    replayButtonSection.appendChild(replayButton);
                } else if (a4.innerHTML == "O") {
                    result.innerHTML = player2 + " WINS!"
                    count = 999;
                    replayButtonSection.appendChild(replayButton);
                }
            } else if (a7.innerHTML == a8.innerHTML && a8.innerHTML == a9.innerHTML && a7.innerHTML != "" && a8.innerHTML != "" && a9.innerHTML != "") {
                if (a7.innerHTML == "X") {
                    result.innerHTML = player1 + " WINS!"
                    count = 999;
                    replayButtonSection.appendChild(replayButton);
                } else if (a7.innerHTML == "O") {
                    result.innerHTML = player2 + " WINS!"
                    count = 999;
                    replayButtonSection.appendChild(replayButton);
                }
            } else if (count == 10) {
                result.innerHTML = "TIE!!"
                count = 999;
                replayButtonSection.appendChild(replayButton);
            } 
        } 
        result.innerHTML = player1 +  "'s Turn!"
        selectableBoard.forEach(box => {
            box.addEventListener('click', function filler() {
                if (count % 2 != 0 && box.innerHTML == "" && count < 11) {
                    box.innerHTML = "X";
                    count += 1;
                    result.innerHTML = player2 + "'s Turn!"
                    winchecker()
                    console.log(count)
                    
                }
                else if (count % 2 == 0 && box.innerHTML == "" && count < 11) {
                    box.innerHTML = "O";
                    count += 1;
                    result.innerHTML = player1 + "'s Turn!"
                    winchecker()
                    console.log(count)
                }
            })
        })
    }
    return { turn }
}
