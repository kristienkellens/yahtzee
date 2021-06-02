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
        //remove previous dice
        if (this.diceArr.length > 0) {
            this.diceArr = [];
            document.querySelector(".dices").innerHTML = "";
        }

        //make 5 dice
        for (let i = 0; i < 5; i++) {
            //console.log(i);
            this.diceArr.push(new Dice());
        }

        //roll each dice
        this.diceArr.forEach(dice => {
            dice.roll();

        });

    }

}



//start game
let game = new Game();

//eventlisteners: probably move in separate js file later
game.newGameBtn.addEventListener('click', function () {
    //console.log("clicked new game");
    game.start();

});

game.rollDiceBtn.addEventListener('click', function () {
    //console.log("clicked roll dice");
    //IF start new game has not been pressed, rolldice button should be inactive
    if (game.hasStarted) {
        game.createDice();
        console.log(game.diceArr); //check if dice value is kept
    }

});

//check diceArr
