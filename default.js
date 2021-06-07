"use strict";

import Dice from '/modules/dice.js';

export class Game {
    constructor() {
        this.newGameBtn = document.getElementById("btn-new");
        this.rollDiceBtn = document.getElementById("btn-roll");
        this.instructionsTxt = document.querySelector(".instructions");
        this.diceArea = document.querySelector(".dice-area");
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
        //on first throw
        if (this.diceArr.length === 0) {
            //make 5 dice
            for (let i = 0; i < 5; i++) {
                //console.log(i);
                this.diceArr.push(new Dice(i));
            }

            //roll each dice
            this.diceArr.forEach(dice => {
                dice.roll();
            });
        } else {
            this.diceArr.forEach(dice => {
                this.keepLockedDice(dice);
            })
        }
    }

    keepLockedDice(dice) {
        if (!dice.isLocked) {
            dice.roll();
        }
    }
}












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
