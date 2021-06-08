export default class Scorecard {
    constructor(diceValuesArr) {
        this.eyes = [1, 2, 3, 4, 5, 6] // possible eyes each die can have
        this.diceValuesArr = diceValuesArr; //simple array with the final dice values, see game.js

        //DOM elements
        this.onesBtn = document.getElementById("ones");
        this.twosBtn = document.getElementById("twos");
        this.threesBtn = document.getElementById("threes");
        this.foursBtn = document.getElementById("fours");
        this.fivesBtn = document.getElementById("fives");
        this.sixesBtn = document.getElementById("sixes");
        this.upperTotalTd = document.getElementById("upper-total");
        this.bonusTd = document.getElementById("bonus");

        //score keeping variables corresponding with DOM elements above
        this.counter = 0;
    }

    fillScorecard() {
        //TEST
        this.countEyes();




    }

    /*countOnes() {
        let counter = 0;
        for (let i = 0; i < this.diceValuesArr.length; i++) {
            if (this.diceValuesArr[i] === 1) { counter++; };
        }

        this.ones = 1 * counter;
    }*/

    countEyes() {
        for (const eye of this.eyes) {
            this.counter = 0; //reset counter
            for (let i = 0; i < this.diceValuesArr.length; i++) {
                //console.log(eye, values[i]);
                if (this.diceValuesArr[i] === eye) { this.counter++ };
            }
            console.log(eye * this.counter);
        }


    }

}