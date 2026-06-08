const canvas = document.getElementById ("gameArea");
const ctx = canvas.getContext ("2d");
const basket = document.getElementById ("basket");
basket.style.display = "none";

const playBtn = document.getElementById ("play-mode");
const easyBtn = document.getElementById ("easy-mode");
const mediumBtn = document.getElementById ("medium-mode");
const hardBtn = document.getElementById ("hard-mode");

import { drawGame } from "./no_math_mode.js";
import { drawEasyGame } from "./easy_math_mode.js";

addEvents ();

clearScreen ();

function clearScreen () {
    //game Area
    ctx.fillStyle = "pink";
    ctx.fillRect (0,0,canvas.clientWidth, canvas.clientHeight);
}

function addEvents () {
    
    playBtn.addEventListener ("click", () => 
        { revertScreenToPlayingMode ();
            drawGame ();  });

    easyBtn.addEventListener ("click", () => {
        revertScreenToPlayingMode ();
        drawEasyGame ();
    });
            
}
function revertScreenToPlayingMode () {
    playBtn.style.display = "none"; 
    easyBtn.style.display = "none"; 
    mediumBtn.style.display = "none"; 
    hardBtn.style.display = "none"; 

    basket.style.display = "initial";
}