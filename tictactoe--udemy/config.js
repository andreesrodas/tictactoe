/* this file should open and close the overlay
take the user input, validate and store */

function openPlayerConfig(event) {
    editedPlayer =  +event.target.dataset.playerid /* gives us access to the element for wich the event occurred in this case (GIVE US ACCESS TO THE BUTTON) */
    /* we add a + BECAUSE WE NEED TO CONVERTED TO A NUMBER +"1" = 1 SO IS SIMPLY THE VALUE TYPE THAT WILL BE CHANGED      */
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');  /* get rid the error  */
    errorsOutputElement.textContent= ''; /* get rid of the error message */
    formElement.firstElementChild.lastElementChild.value = ''; /* the name dosnt stay there when you8 click confirm  */
}


/* 1. we want to prevent the default behavior of the browser
the default behavior

is that if I click Confirm,

the browser tries to send a HTTP request to a server,

in this case to our development server

which is serving this page,

and the browser tries to send the data there.

That's why this page reloads
*/

function savePlayerConfig(event) { /* And preventing that default is possible with help of that event object which we get automatically in functions that are executed because of an event.* And savePlayerConfig will be executed because of an event because we bind it here with addEventListener. */
event.preventDefault();
const formData = new FormData(event.target); 
const enteredPlayername = formData.get('playername').trim();  /* trim is for the space  */

if (!enteredPlayername)  /* !! this means if its not true  (if NOT entered player name) */ {
    event.target.firstElementChild.classList.add('error'); /* we are adding a class ONLY when the player namis wrong */
    errorsOutputElement.textContent = 'please enter a valid name';

return;
}

const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data')
updatedPlayerDataElement.children[1].textContent = enteredPlayername; /* we select the player name  */

players[editedPlayer - 1].name = enteredPlayername;
/*  
if (editedPlayer === 1 ){
    players[0].name = enteredPlayername;
} else {
    players[1].name = enteredPlayername;
}
*/
 closePlayerConfig();
}