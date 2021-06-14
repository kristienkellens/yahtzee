export default class Scorecard {
    constructor(diceValuesArr) {
        //DOM elements
        this.onesBtn = document.getElementById("ones");
        this.twosBtn = document.getElementById("twos");
        this.threesBtn = document.getElementById("threes");
        this.foursBtn = document.getElementById("fours");
        this.fivesBtn = document.getElementById("fives");
        this.sixesBtn = document.getElementById("sixes");
        this.threeOfKindBtn = document.getElementById("three-of-kind");
        this.fourOfKindBtn = document.getElementById("four-of-kind");
        this.fullHouseBtn = document.getElementById("full-house");
        this.smStraightBtn = document.getElementById("sm-straight");
        this.lStraightBtn = document.getElementById("l-straight");
        this.chanceBtn = document.getElementById("chance");
        this.yahtzeeBtn = document.getElementById("yahtzee");

        //arrays and variables
        this.diceValuesArr = diceValuesArr; //array with the final dice values e.g [1, 5, 2, 1, 1]
        this.occurences = {}; //object with occurence of each dice values e.g. {1: 3, 2:1, 5:1}
        this.upperScores = [this.onesBtn, this.twosBtn, this.threesBtn, this.foursBtn, this.fivesBtn, this.sixesBtn]
    }

    calculateOccurences() { //fill in this.occurences based on this.diceValuesArr
        this.diceValuesArr.forEach(element => this.occurences[element] ? this.occurences[element]++ : (this.occurences[element] = 1));
    }

    fillScorecard() {
        this.calculateOccurences();
        //console.log(this.occurences);

        this.calculateUpperScore();

        //calculate score combo's. If Dom Element has already been added to scorecard (= CSS class .selected), skip calculation
        if (!this.threeOfKindBtn.classList.contains("selected")) {
            this.threeOfKindBtn.classList.remove("zero");
            this.isThreeOfKind();
        }

        if (!this.fourOfKindBtn.classList.contains("selected")) {
            this.fourOfKindBtn.classList.remove("zero");
            this.isFourOfKind();
        }

        if (!this.fullHouseBtn.classList.contains("selected")) {
            this.fullHouseBtn.classList.remove("zero");
            this.isFullHouse();
        }

        this.isStraight(); //both small & large straight

        if (!this.yahtzeeBtn.classList.contains("selected")) {
            this.yahtzeeBtn.classList.remove("zero");
            this.isYathzee();
        }

        if (!this.chanceBtn.classList.contains("selected")) {
            this.chanceBtn.classList.remove("zero");
            this.isChance();
        }
    }

    calculateUpperScore() {
        for (let i = 1; i < 7; i++) {

            if (!this.upperScores[i - 1].classList.contains("selected")) {
                if (Object.keys(this.occurences).includes(i.toString())) { //if dice value occurs & is not already used on scorecard
                    this.upperScores[i - 1].classList.remove("zero");
                    this.upperScores[i - 1].innerText = i * this.occurences[i];
                } else {
                    this.upperScores[i - 1].innerText = 0;
                    this.upperScores[i - 1].classList.add("zero");
                }
            }
        }
    }

    sumOfValues(DomElement) {
        let sum = this.diceValuesArr.reduce(function (acc, currentValue) {
            return acc + currentValue;
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
                //console.log(parseInt(Object.keys(this.occurences)[i + 1]), (parseInt(Object.keys(this.occurences)[i]) + 1));

                //if key[i+1] and key[i] + 1 match, consecutiveCounter++;
                if (parseInt(Object.keys(this.occurences)[i + 1]) === (parseInt(Object.keys(this.occurences)[i]) + 1)) {
                    //console.log("match", consecutiveCounter);
                    consecutiveCounter++;

                } else {
                    //no match, reset consecutive counter
                    consecutiveCounter = 1;
                }
            }
        }

        //console.log(consecutiveCounter);

        switch (consecutiveCounter) {
            case 4: //small straight
                if (!this.smStraightBtn.classList.contains("selected")) {
                    this.smStraightBtn.classList.remove("zero");
                    this.smStraightBtn.innerText = 30;
                }

                if (!this.lStraightBtn.classList.contains("selected")) {
                    this.lStraightBtn.innerText = 0;
                    this.lStraightBtn.classList.add("zero");
                }
                break;

            case 5: //large straight
                if (!this.lStraightBtn.classList.contains("selected")) {
                    this.lStraightBtn.classList.remove("zero");
                    this.lStraightBtn.innerText = 40;
                }

                if (!this.smStraightBtn.classList.contains("selected")) {
                    this.smStraightBtn.innerText = 0;
                    this.smStraightBtn.classList.add("zero");
                }
                break;

            default: //no straight
                if (!this.smStraightBtn.classList.contains("selected")) {
                    this.smStraightBtn.innerText = 0;
                    this.smStraightBtn.classList.add("zero");
                }

                if (!this.lStraightBtn.classList.contains("selected")) {
                    this.lStraightBtn.innerText = 0;
                    this.lStraightBtn.classList.add("zero");
                }
        }
    }

    isChance() {
        this.sumOfValues(this.chanceBtn);
    }
}