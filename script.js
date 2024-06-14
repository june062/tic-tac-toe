let gameBoard = (function(){
    let array = [[0,0,0],[0,0,0],[0,0,0]];
    let gameBoardObj = {board: array};


    return gameBoardObj;
})()


function createPlayers(){
    firstPlayer = prompt("What is the first players name?");
   secondPlayer = prompt("What is the second players name?"); 
   switch1 = "on";
   switch2 = "off";

   flipFirstSwitch = () => switch1; /* Make this function change switch status instead of just returning it. */
   flipSecondSwitch = () => switch2;

   let firstPlayerObj = {firstPlayer, marker: "X", firstPlayerSwitch}
   let secondPlayerObj = {secondPlayer, marker: "O", secondPlayerSwitch};

   return {firstPlayerObj, secondPlayerObj};

}


let gameFlow = (function(){
    let objects = createPlayers();
    let {firstPlayerObj,secondPlayerObj} = objects;

    if(firstPlayerObj.firstPlayerSwitch() === "on"){
        let usersChoice1 = prompt(`it's ${firstPlayerObj.firstPlayer}'s turn`);
        let usersChoice2 = prompt(`it's ${firstPlayerObj.firstPlayer}'s turn`);
        gameBoard.board[usersChoice1][usersChoice2] = firstPlayerObj.marker;
        console.log(gameBoard.board)

    }
    
    

})()







