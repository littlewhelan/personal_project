var calcScore = require('../logic/calcScores');
var checkSplits = require('../logic/splitsEmptyOrCompleteDHand');

var stand = function () {
    //check the score of the dealer will account for any aces as well
    calcScore.dealerScoreF();
    //check if there are any splits that need to be completed, else finish hand
    checkSplits.split1();
};

module.exports = stand;