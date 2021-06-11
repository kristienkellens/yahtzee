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
        console.log(this.diceValuesArr);
        this.calculateOccurences();
        console.log(this.occurences);

        this.calculateUpperScore();

        //console.log(Object.keys(this.occurences).length);

        //LATER: calculate lower score combo's
        this.isThreeOfKind();
        this.isFourOfKind();
        this.isFullHouse();
        this.isStraight(); //both small & large straight
        this.isYathzee();
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
        if ((new Set(this.diceValuesArr).size === 1)) {
            document.getElementById("yahtzee").innerText = 50;
        } else {
            document.getElementById("yahtzee").innerText = 0;
            document.getElementById("yahtzee").classList.add("zero");
        }
    }

    isFullHouse() {
        if (Object.values(this.occurences).includes(3) && Object.values(this.occurences).includes(2)) {
            document.getElementById("full-house").innerText = 25;
        } else {
            document.getElementById("full-house").innerText = 0;
            document.getElementById("full-house").classList.add("zero");
        }


    }

    isStraight() {//there are three possible small straights: {1, 2, 3, 4}, {2, 3, 4, 5} and {3, 4, 5, 6}, first number will always be 1, 2 or 3. there are 2 possible options for large straight: {1,2,3,4,5} or {2,3,4,5,6}
        //small straight = 4 consecutive nrs, large straight = 5 consecutive nrs
        let consecutiveCounter = 1; //small straight = 4, large straight = 5

        if (Object.keys(this.occurences)[0] <= 3 && new Set(this.diceValuesArr).size >= 4) {

            for (let i = 0; i < Object.keys(this.occurences).length - 1; i++) {
                //loop through all keys
                console.log(parseInt(Object.keys(this.occurences)[i + 1]), (parseInt(Object.keys(this.occurences)[i]) + 1));

                //if key[i+1] == key[i] + 1, counter++;
                if (parseInt(Object.keys(this.occurences)[i + 1]) === (parseInt(Object.keys(this.occurences)[i]) + 1)) {



                    console.log("match", consecutiveCounter);
                    consecutiveCounter++;

                    //if 4 break out of loop
                    //if (consecutiveCounter === 4) break;

                } else {
                    //reset consecutive counter
                    consecutiveCounter = 1;
                    console.log("no match", consecutiveCounter);
                }
            }

        } else {
            console.log("not a straight: either first key is +3 or set size is below 4");

        }

        console.log(consecutiveCounter);

        switch (consecutiveCounter) {
            case 4: //small straight
                document.getElementById("sm-straight").innerText = 30;
                document.getElementById("l-straight").innerText = 0;
                document.getElementById("l-straight").classList.add("zero");
                break;

            case 5: //large straight
                document.getElementById("l-straight").innerText = 40;
                document.getElementById("sm-straight").innerText = 0;
                document.getElementById("sm-straight").classList.add("zero");
                break;

            default: //no straight
                document.getElementById("sm-straight").innerText = 0;
                document.getElementById("sm-straight").classList.add("zero");
                document.getElementById("l-straight").innerText = 0;
                document.getElementById("l-straight").classList.add("zero");


        }

    }

    isChance() { //get the sum
        let sum = this.diceValuesArr.reduce(function (acc, currentValue) {
            return acc + currentValue
        }, 0);

        document.getElementById("chance").innerText = sum;
    }

}