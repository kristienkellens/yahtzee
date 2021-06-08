export default class Scorecard {
    constructor(diceValuesArr) {
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
        this.ones = 0;
        this.twos = 0;
        this.threes = 0;
        this.fours = 0;
        this.fives = 0;
        this.sixes = 0;
        this.upperTotal = 0;
        this.bonus = 0;
    }

    fillScorecard() {
        this.onesBtn.innerText = this.ones;

    }

}