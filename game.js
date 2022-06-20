/* will be resposible for the game logic */

function startNewGame () {
    if (players[0].name === '' || players[1].name === '' ) {
        alert('enter valid names');
        return;

    }  
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';  /* appear the game */
}

function switchPlayer() {  /* IZ PIZIIIII */
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }

    activePlayerNameElement.textContent = players[activePlayer].name; /* change the player name every turn */
}


function selectGameField(event){

    const selectedColumn = event.target.dataset.col -1 ; /* WE DEDUCT ONE BECAUSE AUTOMATICALLY CONVERT THE RESULT TO A NUMBER AND THEY START AT 0 AND WE CAN USE IN THE ARRAY DOWN  */
    const selectedRow = event.target.dataset.row -1 ;

    if (gameData[selectedRow][selectedColumn] > 0)  {  /* with this we now when a square has been click and we dont allow to click it again */
        alert("please select an empty field");
        return;
    }

event.target.textContent =  players[activePlayer].symbol;  /* with this we acces to the array of active player  WE BASICALLY ACCESS TO PLAYER[0] BC ACTIVE PLAYER === 0; */
event.target.classList.add('disabled');



gameData[selectedRow][selectedColumn] = activePlayer +1; /* and we add +1 here because in the game data the default is 0 and we wanna use 1 and 2 for the players */
/* we do two brackets here BC the firs select the row and the second  whe decice which column we wanna use */

 const winnerId =  checkForGameOver();  
 console.log(winnerId);

switchPlayer();

}

function checkForGameOver () {
for (let i = 0; i < 3; i++) {

    if (gameData [i][0] > 0 &&
        /* WHIT THIS WE ENSURE THAT THE OVERALL CONDITION HERE IS ONLY TRUE IF ALL FIELDS ARE EQUAL AND THEY ARE NOT 0  */
         gameData [i][0] === gameData [i][1] &&
         gameData [i][1] === gameData [i][2] ) 


         /* if we checked like this, i dont know whether it belongs to player 1 or 2 but i know that all the fields in the first row are owned by the same player, BECAUSE THEY HAVE THE SAME ID ON IT*/ {
      return gameData[i][0]; /* THIS IS  A SMARTER WAY FOR CHECKING WHETHER THE ENTIRE ROW IS OWNED BY THE SAME PLAYER, TO THEN RETURN THE ID OF THE PLAYER SINCE THAT PLAYER WILL BE THE WINNER     */
   }

}

for (let i = 0; i < 3; i++) {

    if (gameData [0][i] > 0 &&
        /* WHIT THIS WE ENSURE THAT THE OVERALL CONDITION HERE IS ONLY TRUE IF ALL FIELDS ARE EQUAL AND THEY ARE NOT 0  */
         gameData [0][i] === gameData [1][i] &&
         gameData [0][i] === gameData [2][i] ) 


         /* if we checked like this, i dont know whether it belongs to player 1 or 2 but i know that all the fields in the first row are owned by the same player, BECAUSE THEY HAVE THE SAME ID ON IT*/ {
      return gameData[0][i]; /* THIS IS  A SMARTER WAY FOR CHECKING WHETHER THE ENTIRE ROW IS OWNED BY THE SAME PLAYER, TO THEN RETURN THE ID OF THE PLAYER SINCE THAT PLAYER WILL BE THE WINNER     */
   }

}

/* diagonal top left to top rigth */


if (gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2] 
    ){
        return gameData[0][0];
    }


/* diagonal bottom left to top rigth */


if (gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2] 
    ){
        return gameData[2][0];
    }



return 0;
   

 
}