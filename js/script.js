
/*----- constants -----*/ 
const MAX_NUM_SQUARES = 6;
/*----- app's state (variables) -----*/ 
let numOfSquares;
let pickedColor;

/*----- cached element references -----*/ 
const squares = document.querySelectorAll('.square1');
const messageDisplay = document.getElementById('message');
const reset = doucment.getElementById('reset');

/*----- event listeners -----*/ 
/*----- functions -----*/
//1. Create 6 Squares of different colors for guessing. 
//2. Write  RGB random number generator function.
//3. Generate one RGB number to show at the top. 
//4. Change the background of 5 squares according to the random numbers generated. 
//5. Change the one square according to the RGB given at the top. 
//6. Position of the correct colored square will also be changed in every refresh. 