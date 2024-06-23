let gameBoard = (function(){
    let array = [["","",""],["","",""],["","",""]];
    let gameBoardObj = {board: array};


    return gameBoardObj;
})()

function createPlayers(){
    let firstPlayer = prompt("What is the first players name?");
   let secondPlayer = prompt("What is the second players name?"); 
   switch1 = "on";
   switch2 = "off";

   flipFirstSwitch = () => {if(switch1 === "on"){
    switch1 = "off";}
    else {switch1 = "on"}
   }; 
   flipSecondSwitch = () => {if(switch2 === "on"){
    switch2 = "off";}
    else {switch2 = "on"}
   };

   getSwitchStatus1 = () => switch1;
   getSwitchStatus2 = () => switch2;

   let firstPlayerObj = {firstPlayer, marker: "X", flipFirstSwitch, getSwitchStatus1}
   let secondPlayerObj = {secondPlayer, marker: "O", flipSecondSwitch, getSwitchStatus2};

   return {firstPlayerObj, secondPlayerObj};

}

let gameDisplay = (function(){
    let gameContainer = document.querySelector('div.game-board-container');
   
    let marker;
     

    function displayMarker(event){
        let eventTarget = event.target;
        let firstIndex = eventTarget.dataset.firstindex;
        let secondIndex = eventTarget.dataset.secondindex;
        

        if(gameFlow.playRound(firstIndex, secondIndex)==="winner"){
           gameContainer.removeEventListener("click",gameDisplay.displayMarker);
          
        };

       
        if(eventTarget.children.length === 0 ){
            let markerDisplay = document.createElement("p");
            markerDisplay.textContent= gameDisplay.marker;
            eventTarget.appendChild(markerDisplay);
        }
    }
    return {displayMarker, marker};
    


})()


let gameFlow = (function(){
    let objects = createPlayers();
    let {firstPlayerObj,secondPlayerObj} = objects;

    function playRound(usersChoice1,usersChoice2, event){
        console.log(gameBoard);

        
        if(firstPlayerObj.getSwitchStatus1() === "on"&& gameBoard.board[usersChoice1][usersChoice2]===""){
            gameBoard.board[usersChoice1][usersChoice2] = firstPlayerObj.marker;
             firstPlayerObj.flipFirstSwitch(); 
            secondPlayerObj.flipSecondSwitch();
            gameDisplay.marker = firstPlayerObj.marker;
            
    
          
            if(gameResults()==="winner"){
                return "winner";
            };
        }
        else if(secondPlayerObj.getSwitchStatus2() === "on"&& gameBoard.board[usersChoice1][usersChoice2]===""){
            gameBoard.board[usersChoice1][usersChoice2] = secondPlayerObj.marker;
             secondPlayerObj.flipSecondSwitch();
             firstPlayerObj.flipFirstSwitch();
            console.log(gameBoard.board);
            gameDisplay.marker = secondPlayerObj.marker; 
            
    
       
            if(gameResults()==="winner"){
                return "winner";
            };
        }
    }

    function gameResults(){
        for(row = 0; row < 3;row++){
               if(gameBoard.board[row].every((ev)=>ev ==="X")){
                let winnerDisplay = document.createElement("p");
                let winnerContainer = document.querySelector(".winner");
                winnerDisplay.textContent = `${firstPlayerObj.firstPlayer} is the winner!`
                winnerContainer.appendChild(winnerDisplay);

               



                return "winner";
               }
                
                else if(gameBoard.board[row].every((ev)=>ev ==="O")){
                let winnerDisplay = document.createElement("p");
                let winnerContainer = document.querySelector(".winner");
                winnerDisplay.textContent = `${secondPlayerObj.secondPlayer} is the winner!`
                winnerContainer.appendChild(winnerDisplay);

               
                    return "winner";
                }
            
            let colArr = [];
            colArr.push(gameBoard.board[0][row],gameBoard.board[1][row],gameBoard.board[2][row]);
            if(colArr.every((ev)=> ev === "X")){
                let winnerDisplay = document.createElement("p");
                let winnerContainer = document.querySelector(".winner");
                winnerDisplay.textContent = `${firstPlayerObj.firstPlayer} is the winner!`;
                winnerContainer.appendChild(winnerDisplay);

               


                return "winner";
            }
            else if(colArr.every((ev)=>ev ==="O")){
                let winnerDisplay = document.createElement("p");
                let winnerContainer = document.querySelector(".winner");
                winnerDisplay.textContent = `${secondPlayerObj.secondPlayer} is the winner!`
                winnerContainer.appendChild(winnerDisplay);

               
                return "winner";
            }

            let diagArr = [];
            diagArr.push([gameBoard.board[0][0],gameBoard.board[1][1],gameBoard.board[2][2]],
                        [gameBoard.board[0][2],gameBoard.board[1][1],gameBoard.board[2][0]]);

        if(row === 0){
            if(diagArr[0].every((ev)=> ev === "X")){
                let winnerDisplay = document.createElement("p");
                let winnerContainer = document.querySelector(".winner");
                winnerDisplay.textContent = `${firstPlayerObj.firstPlayer} is the winner!`
                winnerContainer.appendChild(winnerDisplay);

             

                return "winner";
            }
            else if(diagArr[0].every((ev)=> ev === "O")){
                let winnerDisplay = document.createElement("p");
                let winnerContainer = document.querySelector(".winner");
                winnerDisplay.textContent = `${secondPlayerObj.secondPlayer} is the winner!`
                winnerContainer.appendChild(winnerDisplay);

             


                return "winner";

            }
            else if(diagArr[1].every((ev)=> ev === "X")){
                let winnerDisplay = document.createElement("p");
                let winnerContainer = document.querySelector(".winner");
                winnerDisplay.textContent = `${firstPlayerObj.firstPlayer} is the winner!`
                winnerContainer.appendChild(winnerDisplay);

               

                return "winner";
            }
            else if(diagArr[1].every((ev)=> ev === "O")){
                let winnerDisplay = document.createElement("p");
                let winnerContainer = document.querySelector(".winner");
                winnerDisplay.textContent = `${secondPlayerObj.secondPlayer} is the winner!`
                winnerContainer.appendChild(winnerDisplay);

              


                return "winner";
            }
        }
  
    }

     if((gameBoard.board[0].every((e)=> e ==="O"||e==="X")&&gameBoard.board[1].every((e)=> e ==="O"||e==="X"))&&gameBoard.board[2].every((e)=> e ==="O"||e==="X")){
    let winnerDisplay = document.createElement("p");
    let drawContainer = document.querySelector(".winner");
    winnerDisplay.textContent = "Draw"
    drawContainer.appendChild(winnerDisplay);
    return "winner";
    } }

   

return {playRound,gameResults};
})()






let gameContainer = document.querySelector('div.game-board-container');
gameContainer.addEventListener("click", gameDisplay.displayMarker)
