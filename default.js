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
            //FOR EACH item in array where isLocked is true, skip. When isLocked is false, dice.roll()
            this.diceArr.forEach(dice => {
                //console.log(dice.isLocked);
                this.keepLockedDice(dice);
            })
        }
    }

    keepLockedDice(dice) {
        if (!dice.isLocked) {
            dice.roll();

        }
    }


    //NOT NEEDED, this will empty array and remove imgs
    //this.diceArr = [];
    //document.querySelector(".dices").innerHTML = "";

}
/*
if (this.diceArr.length > 0) {
    this.diceArr = [];
    document.querySelector(".dices").innerHTML = "";
}
//LATER: if dice isLocked, keep in array
/*this.diceArr.forEach(item => {
    item.isLocked
})*/











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
        target.classList.add("rolled");

        //change isLocked to true in diceArr
        //console.log(game.diceArr[target.dataset.index]);
        //console.log(game.diceArr[target.dataset.index].isLocked);
        game.diceArr[target.dataset.index].isLocked = true;
        console.log(game.diceArr);

        //LATER: toggle?
        //LATER: store in a new array for scorecard
    }
})
