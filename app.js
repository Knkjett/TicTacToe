let player = 1;
//player green is 1, yellow is -1;
let numPlays = 0;
let winner = 0;
let winsPlayer1 = 0;
let winsPlayer2 = 0;
//INITIALIZE GRID AND THE VALUES TO 0
let grid = [0, 1, 2, 3, 4, 5, 6, 7, 8]
for (let i = 0; i < 9; i++) {
    grid[i] = 0;
}

const headerSelect = document.querySelector('.header');
const greenScore = document.querySelector('.greenscore');
const yellowScore = document.querySelector('.yellowscore');
const boxSelector = document.querySelectorAll('.box');

const hardReset = () => {
    player = 1;
    numPlays = 0;
    winner = 0;
    winsPlayer1 = 0;
    winsPlayer2 = 0;
    for (let i = 0; i < 9; i++) {
        boxSelector[i].innerText = "";
        boxSelector[i].classList.remove("yellow");
        boxSelector[i].classList.remove("green");
        boxSelector[i].classList.remove("draw");
    }
}
const softReset = () => {
    player = 1;
    numPlays = 0;
    winner = 0;
    for (let i = 0; i < 9; i++) {
        boxSelector[i].innerText = "";
        boxSelector[i].classList.remove("yellow");
        boxSelector[i].classList.remove("green");
        boxSelector[i].classList.remove("draw");
        grid[i] = 0;
    }
}
for (let i = 0; i < 9; i++) {
    boxSelector[i].addEventListener('click', (e) => {
        if (player === 1 && (boxSelector[i].innerText === "") && (winner === 0)) {
            grid[i] = 1;
            boxSelector[i].innerText = "X";
            boxSelector[i].classList.add("green");
            player = -1;
        }
        if (player === -1 && (boxSelector[i].innerText === "") && (winner === 0)) {
            grid[i] = -1;
            boxSelector[i].innerText = "O";
            boxSelector[i].classList.add("yellow");
            player = 1;
        }
        checkWinner(i);
    });
}
const checkWinner = (index) => {
    numPlays++;
    if (numPlays >= 9) {
        for (let i = 0; i < 9; i++) {
            boxSelector[i].classList.remove("yellow");
            boxSelector[i].classList.remove("green");
            boxSelector[i].classList.add("draw");
        }
    }
    //ROW WINS
    if (index === 0 || index === 1 || index === 2) {
        let check = grid[0] + grid[1] + grid[2];
        if (check === 3) {
            winner = 1;
            winsPlayer1++;
            for (let i = 0; i < 9; i++) {
                if (i === 0 || i === 1 || i === 2) {
                    //Do nothing
                } else {
                    boxSelector[i].classList.remove("yellow");
                    boxSelector[i].classList.add("draw");
                }
            }

        } else if (check === -3) {
            winner = 1;
            winsPlayer2++;
            for (let i = 0; i < 9; i++) {
                if (i === 0 || i === 1 || i === 2) {
                    //Do nothing
                } else {
                    boxSelector[i].classList.remove("green");
                    boxSelector[i].classList.add("draw");
                }
            }
        }
    } 
    if (index === 3 || index === 4 || index === 5) {
        let check = grid[3] + grid[4] + grid[5];
        if (check === 3) {
            winner = 1;
            winsPlayer1++;
            for (let i = 0; i < 9; i++) {
                if (i === 3 || i === 4 || i === 5) {
                    //Do nothing
                } else {
                    boxSelector[i].classList.remove("yellow");
                    boxSelector[i].classList.add("draw");
                }
            }
        } else if (check === -3) {
            winner = 1;
            winsPlayer2++;
            for (let i = 0; i < 9; i++) {
                if (i === 3 || i === 4 || i === 5) {
                    //Do nothing
                } else {
                    boxSelector[i].classList.remove("green");
                    boxSelector[i].classList.add("draw");
                }
            }
        }
    } 
    if (index === 6 || index === 7 || index === 8) {
        let check = grid[6] + grid[7] + grid[8];
        if (check === 3) {
            winner = 1;
            winsPlayer1++;
            for (let i = 0; i < 9; i++) {
                if (i === 6 || i === 7 || i === 8) {
                    //Do nothing
                } else {
                    boxSelector[i].classList.remove("yellow");
                    boxSelector[i].classList.add("draw");
                }
            }
        } else if (check === -3) {
            winner = 1;
            winsPlayer2++;
            for (let i = 0; i < 9; i++) {
                if (i === 6 || i === 7 || i === 8) {
                    //Do nothing
                } else {
                    boxSelector[i].classList.remove("yellow");
                    boxSelector[i].classList.add("draw");
                }
            }
        }
    }
    //COLUMN WINS
    if (index === 0 || index === 3 || index === 6) {
        let check = grid[0] + grid[3] + grid[6];
        if (check === 3) {
            winner = 1;
            winsPlayer1++;
            for (let i = 0; i < 9; i++) {
                if (i === 0 || i === 3 || i === 6) {
                    //Do nothing
                } else {
                    boxSelector[i].classList.remove("yellow");
                    boxSelector[i].classList.add("draw");
                }
            }
        } else if (check === -3) {
            winner = 1;
            winsPlayer2++;
            for (let i = 0; i < 9; i++) {
                if (i === 0 || i === 3 || i === 6) {
                    //Do nothing
                } else {
                    boxSelector[i].classList.remove("yellow");
                    boxSelector[i].classList.add("draw");
                }
            }
        }
    }
    if (index === 1 || index === 4 || index === 7) {
        let check = grid[1] + grid[4] + grid[7];
        if (check === 3) {
            winner = 1;
            winsPlayer1++;
            for (let i = 0; i < 9; i++) {
                if (i === 1 || i === 4 || i === 7) {
                    //Do nothing
                } else {
                    boxSelector[i].classList.remove("yellow");
                    boxSelector[i].classList.add("draw");
                }
            }
        } else if (check === -3) {
            winner = 1;
            winsPlayer2++;
            for (let i = 0; i < 9; i++) {
                if (i === 1 || i === 4 || i === 7) {
                    //Do nothing
                } else {
                    boxSelector[i].classList.remove("yellow");
                    boxSelector[i].classList.add("draw");
                }
            }
        }
    } 
    if (index === 2 || index === 5 || index === 8) {
        let check = grid[2] + grid[5] + grid[8];
        if (check === 3) {
            winner = 1;
            winsPlayer1++;
            for (let i = 0; i < 9; i++) {
                if (i === 2 || i === 5 || i === 7) {
                    //Do nothing
                } else {
                    boxSelector[i].classList.remove("yellow");
                    boxSelector[i].classList.add("draw");
                }
            }
        } else if (check === -3) {
            winner = 1;
            winsPlayer2++;
            for (let i = 0; i < 9; i++) {
                if (i === 2 || i === 5 || i === 8) {
                    //Do nothing
                } else {
                    boxSelector[i].classList.remove("yellow");
                    boxSelector[i].classList.add("draw");
                }
            }
        }
    }
    //DIAGONAL WINS
    if (index === 0 || index === 4 || index === 8) {
        let check = grid[0] + grid[4] + grid[8];
        if (check === 3) {
            winner = 1;
            winsPlayer1++;
            for (let i = 0; i < 9; i++) {
                if (i === 0 || i === 4 || i === 8) {
                    //Do nothing
                } else {
                    boxSelector[i].classList.remove("yellow");
                    boxSelector[i].classList.add("draw");
                }
            }
        } else if (check === -3) {
            winner = 1;
            winsPlayer2++;
            for (let i = 0; i < 9; i++) {
                if (i === 0 || i === 4 || i === 8) {
                    //Do nothing
                } else {
                    boxSelector[i].classList.remove("yellow");
                    boxSelector[i].classList.add("draw");
                }
            }
        }
    } 
    if (index === 2 || index === 4 || index === 6) {
        let check = grid[2] + grid[4] + grid[6];
        if (check === 3) {
            winner = 1;
            winsPlayer1++;
            for (let i = 0; i < 9; i++) {
                if (i === 2 || i === 4 || i === 6) {
                    //Do nothing
                } else {
                    boxSelector[i].classList.remove("yellow");
                    boxSelector[i].classList.add("draw");
                }
            }
        } else if (check === -3) {
            winner = 1;
            winsPlayer2++;
            for (let i = 0; i < 9; i++) {
                if (i === 2 || i === 4 || i === 6) {
                    //Do nothing
                } else {
                    boxSelector[i].classList.remove("yellow");
                    boxSelector[i].classList.add("draw");
                }
            }
        }
    }
    greenScore.innerText = winsPlayer1;
    yellowScore.innerText = winsPlayer2;

}




headerSelect.addEventListener('click', (e) => {
    softReset();
});