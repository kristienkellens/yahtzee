"use strict";

import Game from './modules/game.js';

//start game
let game = new Game();

//eventlisteners:  move in separate js file later?
game.newGameBtn.addEventListener('click', function () {
    game.start();

});

game.rollDiceBtn.addEventListener('click', function () {
    //IF start new game has not been pressed, rolldice button should be inactive
    console.log(game.diceArr);

    if (game.hasStarted) {
        game.createDice();
        //console.log(game.diceArr);
    }

});

game.diceArea.addEventListener('click', function (e) {
    const target = e.target;

    if (target.dataset.value !== undefined) {
        //add correct CSS
        target.classList.toggle("rolled");
        if (target.classList.contains("rolled")) {
            //change isLocked to true in diceArr
            game.diceArr[target.dataset.index].isLocked = true;
        } else {
            game.diceArr[target.dataset.index].isLocked = false;

        }
        //LATER: store in a new array for scorecard?
    }
    //console.log(game.diceArr);

})
