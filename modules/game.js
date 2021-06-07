"use strict";

import Dice from './modules/dice.js';

export default class Game {
    constructor() {
        this.newGameBtn = document.getElementById("btn-new");
        this.rollDiceBtn = document.getElementById("btn-roll");
        this.instructionsTxt = document.querySelector(".instructions");
        this.diceArea = document.querySelector(".dice-area");
        this.throwsSpan = document.querySelector(".throws");
        this.throws = 3;
        this.hasStarted = false;
        this.diceArr = [];

    }

    start() {
        if (this.hasStarted) { window.location.reload(); };
        // display instructions, number of throws
        this.instructionsTxt.style.display = "block";
        this.throwsSpan.innerText = this.throws;

        // make roll dice button active
        this.hasStarted = true;
    }

    createDice() {
        //you can only roll dice for three throws
        if (this.throws <= 3 && this.throws > 0) {
            //on first throw
            if (this.diceArr.length === 0) {
                //make 5 dice
                for (let i = 0; i < 5; i++) {
                    //console.log(i);
                    this.diceArr.push(new Dice(i));
                }

                //roll each dice
                this.diceArr.forEach(dice => { dice.roll(); });
            } else {
                this.diceArr.forEach(dice => {
                    this.keepLockedDice(dice);
                })
            }

            //count throws
            this.throws -= 1;
            this.throwsSpan.innerText = this.throws;
        }

    }

    keepLockedDice(dice) {
        if (!dice.isLocked) {
            dice.roll();
        }
    }
}
