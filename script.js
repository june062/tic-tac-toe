let gameBoard = (function(){
    let array = [["@","@","@"],["@","@","@"],["@","@","@"]];
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


let gameFlow = (function(){
    let objects = createPlayers();
    let {firstPlayerObj,secondPlayerObj} = objects;

    function playRound(){
        console.log(gameBoard);

        
        if(firstPlayerObj.getSwitchStatus1() === "on"){
            let usersChoice1 = prompt(`it's ${firstPlayerObj.firstPlayer}'s turn`);
            let usersChoice2 = prompt(`it's ${firstPlayerObj.firstPlayer}'s turn`);
            gameBoard.board[usersChoice1][usersChoice2] = firstPlayerObj.marker;
             firstPlayerObj.flipFirstSwitch(); 
            console.log(gameBoard.board);
            gameResults();
        }
        else{
            let usersChoice1 = prompt(`it's ${secondPlayerObj.secondPlayer}'s turn`);
            let usersChoice2 = prompt(`it's ${secondPlayerObj.secondPlayer}'s turn`);
            gameBoard.board[usersChoice1][usersChoice2] = secondPlayerObj.marker;
             secondPlayerObj.flipSecondSwitch();
             firstPlayerObj.flipFirstSwitch();
            console.log(gameBoard.board);
            gameResults();

        }
    }

    function gameResults(){
        for(row = 0; row < 3;row++){
               if(gameBoard.board[row].every((ev)=>ev ==="X")){
                console.log(`${firstPlayerObj.firstPlayer} is the winner!`);
                break;
               }
                
                else if(gameBoard.board[row].every((ev)=>ev ==="O")){
                    console.log(`${secondPlayerObj.secondPlayer} is the winner!`);
                    break;
                }
            
            let colArr = [];
            colArr.push(gameBoard.board[0][row],gameBoard.board[1][row],gameBoard.board[2][row]);
            if(colArr.every((ev)=> ev === "X")){
                console.log(`${firstPlayerObj.firstPlayer} is the winner!`)
                break;
            }
            else if(colArr.every((ev)=>ev ==="O")){
                console.log(`${secondPlayerObj.secondPlayer} is the winner!`)
                break;
            }

            let diagArr = [];
            diagArr.push([gameBoard.board[0][0],gameBoard.board[1][1],gameBoard.board[2][2]],
                        [gameBoard.board[0][2],gameBoard.board[1][1],gameBoard.board[2][0]]);

        if(row === 0){
            if(diagArr[0].every((ev)=> ev === "X")){
                console.log(`${firstPlayerObj.firstPlayer} is the winner!`);
                break;
            }
            else if(diagArr[0].every((ev)=> ev === "O")){
                console.log(`${secondPlayerObj.secondPlayer} is the winner!`);
                break;

            }
            else if(diagArr[1].every((ev)=> ev === "X")){
                console.log(`${firstPlayerObj.firstPlayer} is the winner!`);
                break;
            }
            else if(diagArr[1].every((ev)=> ev === "O")){
                console.log(`${secondPlayerObj.secondPlayer} is the winner!`);
                break;
            }
        }

            
            


            
        }


       
    
    }

    function playGame(){
        /* Maybe it can loop 9 times since that is the max amount of turns there 
        can be in a tic tac toe game? So it can call the playRound function 9 times,
        declare a draw if it plays those full 9 rounds, otherwise, declare who got 
        3 in a row first and end the game.*/
    }


return {playRound, gameResults};
    
    

})()
gameFlow.playRound();
gameFlow.playRound();
gameFlow.playRound();
gameFlow.playRound();
gameFlow.playRound();
gameFlow.playRound();
gameFlow.playRound();
gameFlow.playRound();
gameFlow.playRound();







