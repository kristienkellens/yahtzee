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
        this.dots = [1, 2, 3, 4, 5, 6] // each dice has 6 faces with 1 - 6 dots, see calculateUpperScore()
        this.diceValuesArr = diceValuesArr; //simple array with the final dice values, see game.js
        this.sums = []; // keep sums of upper scores
        this.upperScores = [this.onesBtn, this.twosBtn, this.threesBtn, this.foursBtn, this.fivesBtn, this.sixesBtn] //display sums in upperScores DOM elements

        //counter used for looping over arrays
        this.counter;

        //totals
        this.upperTotal = 0;
        this.addBonus = false;
    }

    fillScorecard() {
        this.calculateUpperScore();
        //LATER: calculate lower score combo's

    }

    calculateUpperScore() {
        for (const dot of this.dots) {
            this.counter = 0; //reset counter on each iteration
            for (let i = 0; i < this.diceValuesArr.length; i++) {
                //console.log(dot, values[i]);
                if (this.diceValuesArr[i] === dot) { this.counter++ };
            }
            this.sums.push(dot * this.counter);
            //console.log(this.sums);
        }

        //display the results in DOM and disable button once clicked
        for (let i = 0; i < this.upperScores.length; i++) {
            this.upperScores[i].innerText = this.sums[i];
            //if score is 0, add red background and disable button
            if (this.sums[i] === 0) {
                this.upperScores[i].classList.add("zero");
                this.upperScores[i].disabled = true;

            }
        }
    }
}