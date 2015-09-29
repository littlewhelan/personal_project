var calcScore = require('../logic/calcScores');
var checkSplits = require('../logic/splitsEmptyOrCompleteDHand');



var standSplit1 = function () {
    //check the score of the dealer will account for any aces as well
    calcScore.split1ScoreF();
    calcScore.dealerScoreF();
    //check if there are any splits that need to be completed
    //if a split needs to be completed set that route as active
    // else finish split 1 hand
    checkSplits.split2();


};

module.exports = standSplit1;