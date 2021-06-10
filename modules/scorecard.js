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
        this.isThreeOfKind();
        this.isYathzee();
        this.isSmallStraight(); //not working
        this.isLargeStraight();
        this.isChance();


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

    isThreeOfKind() {
        if (Object.values(this.occurences).includes(3)) {
            let sum = this.diceValuesArr.reduce(function (acc, currentValue) {
                return acc + currentValue
            }, 0);

            document.getElementById("three-of-kind").innerText = sum;

        } else {
            document.getElementById("three-of-kind").innerText = 0;
            document.getElementById("three-of-kind").classList.add("zero");
        }
    }

    isFourOfKind() {
        if (Object.values(this.occurences).includes(4)) {
            let sum = this.diceValuesArr.reduce(function (acc, currentValue) {
                return acc + currentValue
            }, 0);

            document.getElementById("four-of-kind").innerText = sum;

        } else {
            document.getElementById("four-of-kind").innerText = 0;
            document.getElementById("four-of-kind").classList.add("zero");
        }

    }


    isYathzee() {
        if (new Set(this.diceValuesArr).size === 1) {
            console.log("yathzee");
            document.getElementById("yahtzee").innerText = 50;
        } else {
            document.getElementById("yahtzee").innerText = 0;
            document.getElementById("yahtzee").classList.add("zero");
        }
    }

    isFullHouse() {


    }

    isSmallStraight() {//there are three possible small straights: {1, 2, 3, 4}, {2, 3, 4, 5} and {3, 4, 5, 6}
        if (this.diceValuesArr.includes(1 && 2 && 3 && 4) || this.diceValuesArr.includes(2 && 3 && 4 && 5) || this.diceValuesArr.includes(3 && 4 && 5 && 6)) {
            document.getElementById("sm-straight").innerText = 30;
        } else {
            document.getElementById("sm-straight").innerText = 0;
            document.getElementById("sm-straight").classList.add("zero");
        }

    }

    isLargeStraight() {
        const diceSet = (new Set(this.diceValuesArr));
        if ((diceSet.size === 5) && (!diceSet.has(1) || !diceSet.has(6))) {
            document.getElementById("l-straight").innerText = 30;
        } else {
            document.getElementById("l-straight").innerText = 0;
            document.getElementById("l-straight").classList.add("zero");
        }
    }

    isChance() { //got the sum
        let sum = this.diceValuesArr.reduce(function (acc, currentValue) {
            return acc + currentValue
        }, 0);

        document.getElementById("chance").innerText = sum;
    }

}