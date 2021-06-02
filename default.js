"use strict";

import Dice from '/modules/dice.js';

export class Game {
    constructor() {
        this.newGameBtn = document.getElementById("btn-new");
        this.rollDiceBtn = document.getElementById("btn-roll");
        this.instructionsTxt = document.querySelector(".instructions");
        this.diceOneDisplay = document.getElementById("diceOne");

    }

    start() {
        // display instructions
        this.instructionsTxt.style.display = "block";
        //make roll dice button active

        // LATER: display score card
    }

}



//dice
let game = new Game();
let diceOne = new Dice(game);

game.newGameBtn.addEventListener('click', function () {
    //console.log("clicked new game");
    game.start();

});

game.rollDiceBtn.addEventListener('click', function () {
    //console.log("clicked roll dice");
    //IF start new game has not been pressed, rolldice button should be inactive
    diceOne.roll();

});
