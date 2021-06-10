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
        //this.dots = [1, 2, 3, 4, 5, 6] // each dice has 6 faces with 1 - 6 dots, see calculateUpperScore()
        this.diceValuesArr = diceValuesArr; //simple array with the final dice values, see game.js

        this.occurences = {}; //create object of occurences per dice value

        //this.sums = []; // keep sums of upper scores
        this.upperScores = [this.onesBtn, this.twosBtn, this.threesBtn, this.foursBtn, this.fivesBtn, this.sixesBtn] //display sums in upperScores DOM elements

        //counter used for looping over arrays
        //this.counter;

        //totals
        this.upperTotal = 0;
        this.addBonus = false;
    }

    calculateOccurences() { //calculates occurences per dice value
        this.diceValuesArr.forEach(element => this.occurences[element] ? this.occurences[element]++ : (this.occurences[element] = 1));
    }

    fillScorecard() {
        this.calculateOccurences();
        console.log(this.occurences);

        this.calculateUpperScore();

        //console.log(Object.keys(this.occurences).length);


        //LATER: calculate lower score combo's


    }

    calculateUpperScore() {
        for (let i = 1; i < 7; i++) {

            if (Object.keys(this.occurences).includes(i.toString())) { //if dice value occurs
                this.upperScores[i - 1].innerText = i * this.occurences[i];
            } else {
                this.upperScores[i - 1].innerText = 0;
                this.upperScores[i - 1].classList.add("zero");
            }
        }


        /** OLD VERSION */
        /*
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
                //this.upperScores[i].disabled = true;

            }
        }*/
    }

    isThreeOfKind(diceValuesArr) {

    }

    isFourOfKind(diceValuesArr) {

    }


    isYathzee(diceValuesArr) {
        if (new Set(diceValuesArr).size === 1) {
            console.log("yathzee");
        }
    }

    isFullHouse(diceValuesArr) {

    }

    isSmallStraight(diceValuesArr) {//there are three possible small straights: {1, 2, 3, 4}, {2, 3, 4, 5} and {3, 4, 5, 6}

    }

    isLargeStraight(diceValuesArr) {
        const diceSet = (new Set(diceValuesArr));
        if ((diceSet.size === 5) && (!diceSet.has(1) || !diceSet.has(6))) {
            console.log("large straight");
        }
    }

    isChance(diceValuesArr) { //got the sum
        let sum = diceValuesArr.reduce(function (acc, currentValue) {
            return acc + currentValue
        }, 0)

        console.log(`Chance sum is ${sum}`);
    }



}