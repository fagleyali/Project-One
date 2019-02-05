
/*----- constants -----*/ 
const MAX_NUM_SQUARES = 6;
const MIN_NUM_SQUARES = 3;

/*----- app's state (variables) -----*/ 
let numOfSquares;
let pickedColor;


/*----- cached element references -----*/ 
let squares = document.querySelectorAll('.square1');
let hardMode = document.querySelectorAll('.square1')
let easyMode = document.querySelectorAll('#container1 .square1')
let divs = document.querySelectorAll('#container2 div');
const messageDisplay = document.getElementById('message');
const reset = document.getElementById('reset');
const selected = document.querySelector('.selected');
const modes = document.querySelectorAll('.mode');
let rgbCodeDisplay = document.querySelector('#rgb');

/*----- event listeners -----*/ 
modes.forEach(function(mode){
    mode.addEventListener('click', handleGo);
})

squares.forEach(function(square){
    square.addEventListener('click',checkedRGB)
})


/*----- functions -----*/
init();



function init(){
    numOfSquares = MAX_NUM_SQUARES;
    getSquaresColor(hardMode,numOfSquares);
    console.log(hardMode)
    console.log(easyMode)

    
   
}

function checkedRGB(evt){
    let rgbCode = evt.target.style.background;
    rgbCode === pickedColor? getAllSameColor(rgbCode):evt.target.classList.remove('square1');
}

function getAllSameColor(code){
    squares.forEach(function(square){
        square.style.background = code;
    })
}


function modesClear(){
    modes.forEach(function(mode){
        mode.className = 'mode';
    })
};

function handleGo(evt){
    modesClear();
    evt.target.className = 'mode selected';
    let mode = evt.target.textContent
    numOfSquares = evt.target.textContent === 'Hard'? MAX_NUM_SQUARES: MIN_NUM_SQUARES;
    
     mode === 'Easy'? deleteSquares(): addSquares();
    
//    getSquaresColor(numOfSquares);

}

function modeSelection(){

}

function deleteSquares(){
    // squares.forEach(function(square, idx){
    //     idx > 2?square.classList.remove('square1'): null;
    // })
    // squares = document.querySelectorAll('.square1');
    getSquaresColor(easyMode,3);
}

function addSquares(){
    // divs.forEach(function(div,idx){        
    //      div.classList.add('square1');
    // })
    // squares = document.querySelectorAll('.square1');
    getSquaresColor(hardMode,6);
}



function getSquaresColor(arr,num){
    let id = getRandomNumber(num);
    arr.forEach(function(elm, idx){
    id === idx? (pickedColor = getRGBCode(),elm.style.background=pickedColor): elm.style.background=getRGBCode();
    })
    rgbCodeDisplay.textContent = pickedColor;
}

function getRGBCode(){
    let r = getRandomNumber(256);
    let g = getRandomNumber(256);
    let b = getRandomNumber(256);
    return (`rgb(${r},${g},${b})`);
}

function getRandomNumber(num){
    return Math.floor(Math.random()*num);
}


//1. Create 6 Squares of different colors for guessing. 
//2. Write  RGB random number generator function.
//3. Generate one RGB number to show at the top. 
//4. Change the background of 5 squares according to the random numbers generated. 
//5. Change the one square according to the RGB given at the top. 
//6. Position of the correct colored square will also be changed in every refresh. 