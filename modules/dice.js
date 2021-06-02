export default class Dice {
    constructor(game) {
        this.game = game;
        this.value = 0; //store the random value after rollDice here
        this.isLocked = false; //turns to true if this dice is locked

    }

    roll() {
        console.log("roll the dice");
        //conditions: if !isLocked
        if (!this.isLocked) {
            //pick a random number between 1 - §
            let currentValue = Math.floor(Math.random() * 6) + 1;
            this.value = currentValue;
            this.display(this.value);
        }
        //return the value? needed?
    }

    display(value) {
        //change the img (value).png in the html
        this.game.diceOneDisplay.src = `img\/${value}\.png`
        //set img to visible
        this.game.diceOneDisplay.style.display = "inline"; //LATER: how to fix for multiple dice?? >> add id as attribute in constructor(diceNr, game)

    }

    lockDice() {
        //store the random number
        //change appearance of this dice: make smaller and add red border
        //set isLocked to true
    }
}