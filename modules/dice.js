export default class Dice {
    constructor(index) {
        this.index = index; //index of array game.diceArr
        this.value = 0; //random value 1-6 after rolling the dice
        this.isLocked = false; //turns to true if this dice is locked
        this.diceDiv = document.querySelector(".dices");
        this.diceImg = undefined; //see display()
    }

    roll() {
        if (!this.isLocked) {
            //pick a random number between 1 - 6
            let currentValue = Math.floor(Math.random() * 6) + 1;
            this.value = currentValue;
            if (this.diceImg === undefined) { //else it will create a new dice on each roll
                this.create();
            }
            this.display(this.value);
        }
    }

    create() { //create dice object in DOM
        const img = document.createElement("img");
        this.diceImg = this.diceDiv.appendChild(img);

    }

    display() {
        //change the img in the html + add index and value
        this.diceImg.src = `img\/${this.value}\.png`;
        this.diceImg.setAttribute("data-value", this.value);
        this.diceImg.setAttribute("data-index", this.index);

        //set img to visible
        this.diceImg.style.display = "inline";
        //console.log(this.value);

    }

}