"use strict";

import Game from './modules/game.js';

//start game
const game = new Game();

game.newGameBtn.addEventListener('click', function () {
    game.start();

});

game.rollDiceBtn.addEventListener('click', function () {
    //IF start new game has not been pressed, rolldice button should be inactive
    if (game.hasStarted) {
        game.createDice();
        //console.log(game.diceArr);
    }
});

game.diceArea.addEventListener('click', function (e) {
    const target = e.target;

    if (target.dataset.value !== undefined) {
        //add correct CSS
        target.classList.toggle("rolled");
        if (target.classList.contains("rolled")) {
            //change isLocked to true in diceArr
            game.diceArr[target.dataset.index].isLocked = true;
        } else {
            game.diceArr[target.dataset.index].isLocked = false;
        }
    }
    //console.log(game.diceArr);
})

game.scoreArea.addEventListener('click', function (e) {
    const target = e.target;

    if (target.classList.contains("btn-score") && !target.disabled) {
        //add green class
        target.classList.add("selected");
        target.disabled = true;

        // add to sub total and totalscore
        game.scorecard.upperTotal += parseInt(target.innerText);
        game.totalScore += parseInt(target.innerText);

        //display total
        game.scorecard.upperTotalTd.innerText = game.scorecard.upperTotal;
        game.totalTd.innerText = game.totalScore;

        //check to add the bonus
        if (game.scorecard.upperTotal >= 63) {
            game.scorecard.bonusTd.innerText = 63;
            game.scorecard.addBonus = true;

            //add bonus to totalScore
            game.totalScore += 63;
            game.totalTd.innerText = game.totalScore;
        }

        //reset throws
        game.throws = 3;
        game.throwsSpan.innerText = game.throws;


    }

    if (target.classList.contains("btn-combo") && !target.disabled) {
        game.totalScore += parseInt(target.innerText);
        game.totalTd.innerText = game.totalScore;

        //add green class
        target.classList.add("selected");
        target.disabled = true;

        //reset throws
        game.throws = 3;
        game.throwsSpan.innerText = game.throws;


    }
})