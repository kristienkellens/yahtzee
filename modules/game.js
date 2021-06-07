"use strict";

import Dice from '/modules/dice.js';

export default class Game {
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
