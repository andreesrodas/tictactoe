/* this is the file which execute first, which initializes a bunch of things
 for reach HTML elementes and store in variables */

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
] /* store the data, check for a winner */

let editedPlayer =  0;
let activePlayer = 0;


const players = [
     {
       name: '',
       symbol: 'X'
     },
     {
      name: '',
      symbol:'O'
     },
];

 const playerConfigOverlayElement = document.getElementById('config-overlay');
 const backdropElement = document.getElementById('backdrop');
 const formElement = document.querySelector('form');
 const errorsOutputElement = document.getElementById('config-errors');
 const gameAreaElement = document.getElementById('active-game');
 const activePlayerNameElement = document.getElementById('active-player-name');


 const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
 const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
 const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
 const startNewGameBtnElement = document.getElementById('start-game-btn');
 const gameFieldElements = document.querySelectorAll('#game-board li');

 editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
 editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
 
 cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
 backdropElement.addEventListener('click' , closePlayerConfig);

 formElement.addEventListener('submit', savePlayerConfig);
 
 startNewGameBtnElement.addEventListener('click', startNewGame);

 for (const gameFieldElement of gameFieldElements) {   /* add a click listeners to all li elements, we do this through a loop */
   gameFieldElement.addEventListener('click' ,  selectGameField);
 }