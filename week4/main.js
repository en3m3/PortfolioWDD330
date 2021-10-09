class TicTacToe {
    constructor(containerId, ...args) {
    let options = args[0];
    this.container = document.getElementById(containerId);
    this.container.classList.add("game-container");
    this.containerWidth = options["containerWidth"] || 500;
    if(this.containerWidth > visualViewport.width) {
        this.containerWidth = visualViewport.width;
    }
    this.length = options["length"] || 3;
    this.width = options["width"] || 3;
    this.player1 = options["player1"] || "X";
    this.player2 = options["player2"] || "O";
    this.player1Color = options["player1Color"] || "";
    this.player2Color = options["player2Color"] || "";
    this.boardColor = options["boardColor"] || "";
    this.borderColor = options["borderColor"] || "";
    this.borderWidth = options["borderWidth"] || 1;

    this.createBoard();
    }

    createBoard() {
        for(let i=0;i<this.length;i++) {
            for(let j=0;j<this.width;j++){
                const space = document.createElement("div");
                space.classList.add("tic-tac-space");
                this.container.appendChild(space);
                
            }
        }
        this.container.style.maxWidth = this.containerWidth+"px";
        this.container.style.display = "flex";
        this.container.style.flexWrap = "wrap";
        var cells = this.container.childNodes;
        // cells[0] is the text node for the container so the cells start from index 1
        for(var i=0; i<cells.length; i++) {
            if (cells[i].nodeName == 'DIV') {
                cells[i].style.width = (parseInt(this.container.offsetWidth) / this.width) - (parseInt(this.borderWidth)*this.width) +"px";
                cells[i].style.height = cells[i].style.width;
                //removes edge borders
                if(i <= this.width){
                    cells[i].style.borderTop = "none";
                }
                if(i >= cells.length - this.width) {
                    cells[i].style.borderBottom = "none";
                }
                if((i-1)%this.width === 0) {
                    cells[i].style.borderLeft = "none";
                }
                if(i%this.width === 0) {
                    cells[i].style.borderRight = "none";
                }
            }
        }  
              
    }
}

const tictac = new TicTacToe("ticTacContainer", {
"length": 3,
"width": 3,
"player1":"X",
"player2":"O",
"player1Color":"",
"player2Color":"",
"boardColor": "",
"borderColor": "",
});




// const resetButton = document.getElementById('reset');
// const player1 = 'X';
// const player2 = 'O';
// let player = player1;


// function addPiece(e) {
// console.log(e.target);
// e.target.innerHTML = player;
// if (player === player1) player = player2;
// else player = player1;
// }


// function resetBoardDiv() {
// const divBoard = document.querySelector('.cont');
// for (let i = 0; i < divBoard.children.length; i++) {
// divBoard.children[i].innerText = '';
// }
// const children = Array.from(divBoard.children);
// const empty = children.filter(function(child) {
// return child.innerText == 'X' || child.innerText == 'O';
// });
// console.log(empty);
// }


// divBoard.addEventListener('click', addPiece);
// reset.addEventListener('click', resetBoardDiv);