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
        }
        else {
            let usersChoice1 = prompt(`it's ${secondPlayerObj.secondPlayer}'s turn`);
            let usersChoice2 = prompt(`it's ${secondPlayerObj.secondPlayer}'s turn`);
            gameBoard.board[usersChoice1][usersChoice2] = secondPlayerObj.marker;
             secondPlayerObj.flipSecondSwitch();
             firstPlayerObj.flipFirstSwitch();
            console.log(gameBoard.board);

        }
    }

    function gameResults(){
        /* This function should check the verticals, horizontals, and diagonals, of 2d
        array to see if 3 in a row are a match. Then display who won or if it's a draw. */
    }


return {playRound};
    
    

})()
gameFlow.playRound();







