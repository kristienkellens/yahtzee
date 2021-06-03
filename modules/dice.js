export default class Dice {
    constructor() {
        this.value = 0; //store the random value after rollDice here
        this.isLocked = false; //turns to true if this dice is locked
        this.diceDiv = document.querySelector(".dices");
        this.diceImg = undefined; //see create()
    }

    roll() {
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
        this.diceImg.src = `img\/${value}\.png`;
        this.diceImg.value = value; //TEST if it stores the value in the img
        //set img to visible
        this.diceImg.style.display = "inline";
        //console.log(this.value);

    }

    lockDice() {
        //store the random number

        //change appearance of this dice: make smaller and add red border
        this.diceImg.classList.add("rolled"); //TEST add a class to add event delegation lock()
        //set isLocked to true
        this.isLocked = true;
    }
}