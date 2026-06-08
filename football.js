const goal = document.getElementById ("goal");
const field = document.getElementById ("field");
const sky = document.getElementById ("sky");

gameLoop();

function gameLoop () {
    moveGoal();
    requestAnimationFrame (gameLoop);
}

function moveGoal () {
    const horizontalBound = sky.clientWidth;
    console.log ('hi1');

    if (parseInt (goal.style.left) <= parseInt (horizontalBound)) {
        goal.style.left = ((parseInt (goal.style.left)) + 1) + "px";
        console.log ('hi2');
    }

    if (parseInt (goal.style.left) >= 0) {
        goal.style.left = ((parseInt(goal.style.left)) - 1) + "px";
        console.log ('hi3');

    }    
}