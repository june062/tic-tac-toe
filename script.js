let gameBoard = (function(){
    let array = [[0,0,0],[0,0,0],[0,0,0]];
    let gameBoardObj = {board: array};


    return gameBoardObj;
})()

console.log(gameBoard.board); 

function createPlayers(name, gamePiece){
    let score = 0;
    let getScore = ()=> console.log(`${name} score is ${score}`)
    return {name, gamePiece, getScore}

}

let bob = createPlayers("bob","X");
console.log(bob)


let billy = createPlayers("billy","O");
console.log(billy)





