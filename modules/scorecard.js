export default class Scorecard {
    constructor(diceValuesArr) {
        //DOM elements
        this.onesBtn = document.getElementById("ones");
        this.twosBtn = document.getElementById("twos");
        this.threesBtn = document.getElementById("threes");
        this.foursBtn = document.getElementById("fours");
        this.fivesBtn = document.getElementById("fives");
        this.sixesBtn = document.getElementById("sixes");
        this.upperTotalTd = document.getElementById("upper-total");
        this.bonusTd = document.getElementById("bonus");

        //Arrays
        this.eyes = [1, 2, 3, 4, 5, 6] // to loop over eyes per dice, see calculateUpperScore()
        this.diceValuesArr = diceValuesArr; //simple array with the final dice values, see game.js
        this.sums = []; // keep sums of upper scores
        this.upperScores = [this.onesBtn, this.twosBtn, this.threesBtn, this.foursBtn, this.fivesBtn, this.sixesBtn] //display sums in upperScores

        //counter used for looping over arrays
        this.counter;

        //totals
        this.upperTotal = 0;
        this.addBonus = false;
    }

    fillScorecard() {
        this.calculateUpperScore();

    }

    calculateUpperScore() {
        for (const eye of this.eyes) {
            this.counter = 0; //reset counter
            for (let i = 0; i < this.diceValuesArr.length; i++) {
                //console.log(eye, values[i]);
                if (this.diceValuesArr[i] === eye) { this.counter++ };
            }
            this.sums.push(eye * this.counter);
            //console.log(this.sums);
        }

        //display the results
        for (let i = 0; i < this.upperScores.length; i++) {
            this.upperScores[i].innerText = this.sums[i];
            //if score is 0, add red background
            if (this.sums[i] === 0) {
                this.upperScores[i].classList.add("zero");
                this.upperScores[i].disabled = true;

            }
        }

    }

}