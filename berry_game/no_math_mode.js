
const canvas = document.getElementById ("gameArea");
const ctx = canvas.getContext ("2d");

const scoreBoard = document.getElementById ("scoreBoard");
const points = document.getElementById ("points");

const basket = document.getElementById ("basket");

const blueberry = document.getElementById ("blueberry");
const strawberry = document.getElementById ("strawberry");

// for (let i = 0; i < 5; i++)
// {
//     const newBlueberry = document.createElement ("img");
//     newBlueberry.textContent = 'blueberry ${i + 1}';
//     newBlueberry.classList.add ("my-elem");
//     document.body.appendChild(newBlueberry);
// }
let x = 0; 
let y = 0;
let speed = 10;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;


//Game Loop
export function drawGame () {
    requestAnimationFrame (drawGame);
    clearScreen ();
    inputs ();
    boundaryCheck ();
    generateBerries (performance.now ());
    managePoints (performance.now ());
    drawBlob ();
}

function clearScreen () {
    //game Area
    ctx.fillStyle = "pink";
    ctx.fillRect (0,0,canvas.clientWidth, canvas.clientHeight);
}

function inputs () {
    if (upPressed) {
        y -= speed;
    }
    if (downPressed) {
        y = y + speed;
    }
    if (leftPressed) {
        x -= speed;
    }
    if (rightPressed) {
        x += speed;
    }
}

function boundaryCheck () {

    //up boundary
    if (y < 0)
        y = 0;

    //down boundary
    if (y > 480)
        y = 480;

    //left boundary
    if (x < 0)
        x = 0;

    //right boundary
    if (x > 760)
        x = 760;
}
function drawBlob () {
    basket.style.left = x + "px";
    basket.style.top = y + "px";
}

document.body.addEventListener ('keydown', keyPush);
document.body.addEventListener ('keyup', keyRelease);

function keyPush (event) {
    if (event.keyCode == 38 || event.keyCode == 87) 
        upPressed = true;

    if (event.keyCode == 40 || event.keyCode == 83) 
        downPressed = true;

    if (event.keyCode == 37 || event.keyCode == 65) 
        leftPressed = true;

    if (event.keyCode == 39 || event.keyCode == 68) 
        rightPressed = true;
    
}
function keyRelease (event) {
    if (event.keyCode == 38 || event.keyCode == 87) 
        upPressed = false;

    if (event.keyCode == 40 || event.keyCode == 83) 
        downPressed = false;

    if (event.keyCode == 37 || event.keyCode == 65) 
        leftPressed = false;

    if (event.keyCode == 39 || event.keyCode == 68) 
        rightPressed = false;
    
}

/*
* sleep measures if a specific amount of time has passed
*
* parameter amountOfTime: the amount of time desired to measure 
* parameter timestamp: the clock/timestamp provided by requestAnimationFrame to measure against
*
* moveDelay: increases by 'amountOfTime' each time the function returns true 
*
* returns whether the amountOfTime has passed by comparing it to the clock/timestamp
*/
let moveDelay = 0;
function sleep (amountOfTime, timestamp) {

    if ((timestamp - moveDelay) >= amountOfTime) {
        moveDelay = timestamp;
        return true;
    }

    return false;
}

/*
* generateBerries moves the berry elements to a random spot on the screen every X seconds
*
* parameter timestamp: the clock/timestamp provided by requestAnimationFrame to pass to sleep
*
*/
function generateBerries(timestamp) {
    if (sleep (3000, timestamp)) {
        blueberry.style.left = randomNumberX() + "px";
        blueberry.style.top = randomNumberY() + "px";
        
        strawberry.style.left = randomNumberX () + "px";
        strawberry.style.top = randomNumberY () + "px";
    }
}

/*
* randomNumberY generates a random number between a min and max
*
* returns a random number to be used as the Y-coordinate
*/
function randomNumberY () {
    let minY = 0;
    let maxY = 480;

    //https://stackoverflow.com/questions/71327425/best-choice-for-javascript-random-number-generator
    let randomY = Math.floor (Math.random () * (maxY - minY + 1)) + minY;
    return randomY;

}

/*
* randomNumberX generates a random number between a min and max
*
* returns a random number to be used as the X-coordinate
*/
function randomNumberX() {
    let minX = 0;
    let maxX = 760;

    //https://stackoverflow.com/questions/71327425/best-choice-for-javascript-random-number-generator
    let randomX = Math.floor (Math.random () * (maxX - minX + 1)) + minX;
    return randomX;
}

/*
* managePoints updates the points when the basket overlaps with the berries
*
*/
function managePoints (timestamp) {

    // update points is basket overlapped with blueberry
    if (checkOverlap (blueberry))
    {
        //update points
        points.textContent = parseInt (points.textContent) + 1;

        //move blueberry out of screen to avoid points continually updating
        blueberry.style.top = 800 + "px";
        blueberry.style.left = 500 + "px";  
       
    }

    // update points is basket overlapped with strawberry
    if (checkOverlap (strawberry)) 
    {
        //update points
        points.textContent = parseInt (points.textContent) + 1;

        //move strawberry out of screen to avoid points continually updating
        strawberry.style.top = 800 + "px";
        strawberry.style.left = 500 + "px"; 
       
    }
     
}

/*
* checkOverlap checks if the basket is overlapping with the parameter element
*
* parameter element: the element to check if the basket overlapped it
*
* returns a boolean value whether there's overlap (true) or not (false)
*/
function checkOverlap (element) {
    // DOMRect objects for each of the elements providing information about sizes & position relative to viewport
    let basketPos = basket.getBoundingClientRect ();
    let elementPos = element.getBoundingClientRect ();

    // check all the conditions where basket & element don't intersect 
    let notOverlap = basketPos.right < elementPos.left
    || basketPos.left > elementPos.right
    || basketPos.bottom < elementPos.top
    || basketPos.top > elementPos.bottom;

    // negate conditions where the overlap can't happen to check if there's overlap
    return !notOverlap;
}


//Original Blok Game (keeping for review)

// const canvas = document.getElementById ("gameArea");
// const ctx = canvas.getContext ("2d");

// let x = 100; 
// let y = 100;
// let radius = 50;
// let speed = 10;

// let upPressed = false;
// let downPressed = false;
// let leftPressed = false;
// let rightPressed = false;


// //Game Loop
// function drawGame () {
// requestAnimationFrame (drawGame);
// clearScreen ();
// inputs ();
// boundaryCheck ();
// drawBlob ();
// }

// function clearScreen () {
//     ctx.fillStyle = "pink";
//     ctx.fillRect (0,0,canvas.clientWidth, canvas.clientHeight);
// }

// function inputs () {
//     if (upPressed) {
//         y -= speed;
//     }
//     if (downPressed) {
//         y = y + speed;
//     }
//     if (leftPressed) {
//         x -= speed;
//     }
//     if (rightPressed) {
//         x += speed;
//     }
// }

// function boundaryCheck () {
//     //up boundary
//     if (y < radius)
//         y = radius;

//     //down boundary
//     if (y > canvas.clientHeight - radius)
//         y = canvas.clientHeight - radius;

//     //left boundary
//     if (x < radius)
//         x = radius;

//     //right boundary
//     if (x > canvas.clientWidth - radius)
//         x = canvas.clientWidth - radius;

// }
// function drawBlob () {
//     ctx.fillStyle = "purple";
//     ctx.beginPath ();
//     ctx.arc (x, y, radius, 0, Math.PI * 2);
//     ctx.fill ();
// }


// document.body.addEventListener ('keydown',keyDown);
// document.body.addEventListener ('keyup',keyUp);

// function keyDown (event) {
//     if (event.keyCode == 38) 
//         upPressed = true;

//     if (event.keyCode == 40) 
//         downPressed = true;

//     if (event.keyCode == 37) 
//         leftPressed = true;

//     if (event.keyCode == 39) 
//         rightPressed = true;
    
// }
// function keyUp (event) {
//     if (event.keyCode == 38) 
//         upPressed = false;

//     if (event.keyCode == 40) 
//         downPressed = false;

//     if (event.keyCode == 37) 
//         leftPressed = false;

//     if (event.keyCode == 39) 
//         rightPressed = false;
    
// }

// drawGame ();