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
        this.threeOfKindBtn = document.getElementById("three-of-kind");
        this.fourOfKindBtn = document.getElementById("four-of-kind");
        this.fullHouseBtn = document.getElementById("full-house");
        this.smStraightBtn = document.getElementById("sm-straight");
        this.lStraightBtn = document.getElementById("l-straight");
        this.chanceBtn = document.getElementById("chance");
        this.yahtzeeBtn = document.getElementById("yahtzee");

        //arrays and variables
        this.diceValuesArr = diceValuesArr; //array with the final dice values, see game.js
        this.occurences = {}; //object with number of dice values per value
        this.upperScores = [this.onesBtn, this.twosBtn, this.threesBtn, this.foursBtn, this.fivesBtn, this.sixesBtn] //display sums in upperScores DOM elements

        //totals
        this.upperTotal = 0;
        this.addBonus = false;
        this.totalScore = 0;
    }

    calculateOccurences() { //calculates occurences per dice value
        this.diceValuesArr.forEach(element => this.occurences[element] ? this.occurences[element]++ : (this.occurences[element] = 1));
    }

    fillScorecard() {
        //console.log(this.diceValuesArr);
        this.calculateOccurences();
        //console.log(this.occurences);

        this.calculateUpperScore();

        //calculate score combo's
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

    sumOfValues(DomElement) {
        let sum = this.diceValuesArr.reduce(function (acc, currentValue) {
            return acc + currentValue
        }, 0);

        DomElement.innerText = sum;

    }

    isThreeOfKind() {
        if (Object.values(this.occurences).includes(3) && !Object.values(this.occurences).includes(2)) {
            this.sumOfValues(this.threeOfKindBtn);

        } else {
            this.threeOfKindBtn.innerText = 0;
            this.threeOfKindBtn.classList.add("zero");
        }
    }

    isFourOfKind() {
        if (Object.values(this.occurences).includes(4)) {
            this.sumOfValues(this.fourOfKindBtn);

        } else {
            this.fourOfKindBtn.innerText = 0;
            this.fourOfKindBtn.classList.add("zero");
        }

    }


    isYathzee() {
        if ((new Set(this.diceValuesArr).size === 1)) {
            this.yahtzeeBtn.innerText = 50;
        } else {
            this.yahtzeeBtn.innerText = 0;
            this.yahtzeeBtn.classList.add("zero");
        }
    }

    isFullHouse() {
        if (Object.values(this.occurences).includes(3) && Object.values(this.occurences).includes(2)) {
            this.fullHouseBtn.innerText = 25;
        } else {
            this.fullHouseBtn.innerText = 0;
            this.fullHouseBtn.classList.add("zero");
        }


    }

    isStraight() {
        let consecutiveCounter = 1; //small straight = 4, large straight = 5

        if (Object.keys(this.occurences)[0] <= 3 && new Set(this.diceValuesArr).size >= 4) {

            for (let i = 0; i < Object.keys(this.occurences).length - 1; i++) {
                //loop through all keys
                console.log(parseInt(Object.keys(this.occurences)[i + 1]), (parseInt(Object.keys(this.occurences)[i]) + 1));

                //if key[i+1] == key[i] + 1, counter++;
                if (parseInt(Object.keys(this.occurences)[i + 1]) === (parseInt(Object.keys(this.occurences)[i]) + 1)) {
                    //console.log("match", consecutiveCounter);
                    consecutiveCounter++;

                } else {
                    //reset consecutive counter
                    consecutiveCounter = 1;
                }
            }

        }

        //console.log(consecutiveCounter);

        switch (consecutiveCounter) {
            case 4: //small straight
                this.smStraightBtn.innerText = 30;
                this.lStraightBtn.innerText = 0;
                this.lStraightBtn.classList.add("zero");
                break;

            case 5: //large straight
                this.lStraightBtn.innerText = 40;
                this.smStraightBtn.innerText = 0;
                this.smStraightBtn.classList.add("zero");
                break;

            default: //no straight
                this.smStraightBtn.innerText = 0;
                this.smStraightBtn.classList.add("zero");
                this.lStraightBtn.innerText = 0;
                this.lStraightBtn.classList.add("zero");
        }
    }

    isChance() { //get the sum
        this.sumOfValues(this.chanceBtn)
    }



}