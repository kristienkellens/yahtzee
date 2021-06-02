"use strict";

import Dice from '/modules/dice.js';

export class Game {
    constructor() {
        this.newGameBtn = document.getElementById("btn-new");
        this.rollDiceBtn = document.getElementById("btn-roll");
        this.instructionsTxt = document.querySelector(".instructions");
        this.hasStarted = false;
        this.diceArr = [];

    }

    start() {
        // display instructions
        this.instructionsTxt.style.display = "block";
        //make roll dice button active
        this.hasStarted = true;

        // LATER: display score card
    }

    createDice() {
        //make 5 dice and roll them
        for (let i = 0; i < 5; i++) {
            //console.log(i);
            let dice = new Dice();
            dice.roll();
            this.diceArr.push(dice);
            console.log(this.diceArr); //BUG: every roll adds 5 more dice... need to remove the previous ones
        }

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
    if (game.hasStarted) {
        game.createDice();
        //diceOne.roll();
    }

});
