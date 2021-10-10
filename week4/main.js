class TicTacToe {
    constructor(containerId, ...args) {
        let options = args[0];
        this.player1Turn = true;
        this.container = document.getElementById(containerId);
        this.container.classList.add("game-container");
        this.containerWidth = options["containerWidth"] || 500;
        if(this.containerWidth > visualViewport.width) {
            this.containerWidth = visualViewport.width;
        }
        this.length = options["length"] || 3;
        this.width = options["width"] || 3;
        this.player1 = options["player1"] || "Player 1";
        this.player2 = options["player2"] || "Player 2";
        this.player1Color = options["player1Color"] || "blue";
        this.player2Color = options["player2Color"] || "red";
        this.boardColor = options["boardColor"] || "";
        this.borderColor = options["borderColor"] || "";
        this.borderWidth = options["borderWidth"] || 1;

        this.createBoard(this);
        //touchend wasnt working
    }

    boardClicked(e) {
        let obj = e.currentTarget.obj;
        let cell = e.currentTarget;
        if(e.currentTarget.querySelector("p").textContent === "") {
            if(obj.player1Turn) {
                cell.querySelector("p").textContent = "X";
                cell.style.color = obj.player1Color;
                document.querySelector(".info").textContent = "Player 2"; 
            }else {
                cell.querySelector("p").textContent = "O"; 
                cell.style.color = obj.player2Color;
                document.querySelector(".info").textContent = "Player 1"; 
            }
            obj.player1Turn = !obj.player1Turn;
            this.checkWin;
        }
    }

    checkWin(){

    }

    resetBoard(e) {
        let gameCells = e.currentTarget.obj.container.childNodes;
        gameCells.forEach(elem => {
            elem.nextElementSibling.querySelector("p").textContent = "";
           
        });
    }

    createBoard() {
        this.container.style.fontSize = "30px";
        for(let i=0;i<this.length;i++) {
            for(let j=0;j<this.width;j++){       
                let space = document.createElement("div"); 
                let spaceText = document.createElement("p");
                space.classList.add("tic-tac-space");
                space.style.display = "flex";
                space.style.justifyContent = "center";
                space.style.alignItems = "center";
                space.appendChild(spaceText);
                this.container.appendChild(space);
                
            }
        }

        let resetButton = document.createElement("button"); 
        resetButton.id = "reset";
        resetButton.textContent = "Reset";
        resetButton.obj = this;
        resetButton.addEventListener("click",this.resetBoard);
        this.container.parentNode.insertBefore(resetButton,this.container.nextElementSibling);

        let textInfo = document.createElement("div"); 
        textInfo.classList.add("info");
        textInfo.textContent = this.player1;
        this.container.parentNode.insertBefore(textInfo,this.container.nextElementSibling);
        this.container.style.maxWidth = this.containerWidth+"px";
        textInfo.style.width = this.container.offsetWidth+"px";


        this.container.style.display = "flex";
        this.container.style.flexWrap = "wrap";
        var cells = this.container.childNodes;
        // cells[0] is the text node for the container so the cells start from index 1
        for(var i=0; i<cells.length; i++) {
            if (cells[i].nodeName == 'DIV') {
                cells[i].style.width = (parseInt(this.container.offsetWidth) / this.width) - (parseInt(this.borderWidth)*this.width) +"px";
                cells[i].style.height = cells[i].style.width;
                cells[i].addEventListener("click",this.boardClicked);
                cells[i].obj = this;
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
"player1":"Player 1",
"player2":"Player 2",
// "player1Color":"",
// "player2Color":"",
// "boardColor": "",
// "borderColor": "",
});