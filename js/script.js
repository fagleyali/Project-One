
/*----- constants -----*/ 
const MAX_NUM_SQUARES = 6;
const MIN_NUM_SQUARES = 3;
const bannerColorArr = ['rgb(145,112,249)','rgb(141, 108, 71)','rgb(145,112,249)'];
const message = {
    w:'You are correct!',
    l:'Try again!'
}
/*----- app's state (variables) -----*/ 
let numOfSquares;
let pickedColor;
/*----- cached element references -----*/ 
let squares = document.querySelectorAll('#container1  div,#container2 div');
let easyMode = document.querySelectorAll('#container1 div')
let hardMode = document.querySelectorAll('#container1  div,#container2 div');
const messageDisplay = document.getElementById('message');
const reset = document.getElementById('reset');
const selected = document.querySelector('.selected');
const modes = document.querySelectorAll('.mode');
let rgbCodeDisplay = document.querySelector('#rgb');
let banners = document.querySelectorAll('header, section#stripe, .selected');

/*----- event listeners -----*/ 
modes.forEach(function(mode){
    mode.addEventListener('click', handleMode);
})

squares.forEach(function(square){
    square.addEventListener('click',checkRGB)
})

reset.addEventListener('click', init);

/*----- functions -----*/

//Init functions
//-------------------------------
init();

function init(){
    numOfSquares = {
        e: MIN_NUM_SQUARES,
        h: MAX_NUM_SQUARES
    };
    render();
    
};



function render(){
    modesClear();
    clearSquareClass();
    getSquaresColor(hardMode,numOfSquares.h);
    selected.classList.add('selected');
    toggleBannerColors();
    
}

//---------------------------------------

//Game modes handler
//-----------------------------------

function handleMode(evt){
    modesClear();
    clearSquareClass();
    toggleBannerColors();
    evt.target.className = 'mode selected';
    let mode = evt.target.textContent
    mode === 'Easy'? getSquaresColor(easyMode,numOfSquares.e): getSquaresColor(hardMode,numOfSquares.h);
};

//---------------------------------

// Win/loose handler
//-----------------------------------

function checkRGB(evt){
    modesClear();
    let rgbCode = evt.target.style.background;
   
    rgbCode === pickedColor? (getAllSameColor(rgbCode),messageDisplay.textContent = message.w, reset.textContent = 'Play again?'):(evt.target.style.background='rgb(23,23,23)',messageDisplay.textContent = message.l);
    
}


function getAllSameColor(code){
    squares.forEach(function(square){
        square.style.background = code;
    })
    toggleBannerColors(code);
}

// ----------------------------------

// Initialization
//------------------------------------

function modesClear(){
    modes.forEach(function(mode){
        mode.className = 'mode';
       
    })
    messageDisplay.textContent = '';
    reset.textContent = 'New Colors';
};

function clearSquareClass(){
    squares.forEach(function(square){
        square.classList.remove('square1');
    })
};

function toggleBannerColors(str){
    
    if (str !== undefined){
        banners.forEach(function(banner, idx){
            banner.style.background = str;
        })

    }else {
        banners.forEach(function(banner, idx){
            idx===2?  banner.style.background = '':banner.style.background=bannerColorArr[idx];
        })
    }
};

//--------------------------------------------------


//Sqaures handler
//----------------------------------------

function getSquaresColor(arr,num){
    let id = getRandomNumber(num);
    arr.forEach(function(elm, idx){
    id === idx? (pickedColor = getRGBCode(),elm.classList.add('square1'),elm.style.background=pickedColor): (elm.classList.add('square1'),elm.style.background=getRGBCode());
    })
    rgbCodeDisplay.textContent = pickedColor;
}

function getRGBCode(){
    let r = getRandomNumber(256);
    let g = getRandomNumber(256);
    let b = getRandomNumber(256);
    return (`rgb(${r}, ${g}, ${b})`);
};

function getRandomNumber(num){
    return Math.floor(Math.random()*num);
};

//-------------------------------------------------------


