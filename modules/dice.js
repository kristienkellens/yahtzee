export default class Dice {
    constructor(game) { //remove game as key, create the dice element in the DOM here
        this.game = game;
        this.value = 0; //store the random value after rollDice here
        this.isLocked = false; //turns to true if this dice is locked
        this.diceDiv = document.querySelector(".dices");
        this.diceImg = undefined; //see create()
    }

    roll() {
        console.log("roll the dice");
        if (!this.isLocked) {
            //pick a random number between 1 - §
            let currentValue = Math.floor(Math.random() * 6) + 1;
            this.value = currentValue;
            if (this.diceImg === undefined) { //else it will create a new dice on each roll
                this.create();
            }
            this.display(this.value);
        }
    }

    create() {
        const img = document.createElement("img");
        this.diceImg = this.diceDiv.appendChild(img);
    }

    display(value) {
        //change the img (value).png in the html
        this.diceImg.src = `img\/${value}\.png`
        //set img to visible
        this.diceImg.style.display = "inline"; //LATER: how to add multiple dice??
        console.log(this.value);

    }

    lockDice() {
        //store the random number
        //change appearance of this dice: make smaller and add red border
        //set isLocked to true
    }
}