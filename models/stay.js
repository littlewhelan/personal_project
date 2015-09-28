var calcScore = require('../logic/calcScores');
var checkSplits = require('../logic/splitsEmptyOrCompleteDHand');
var allHandsDone = require('../logic/allHandsDone');
var vars = require('../logic/vars');
var bust = require('../logic/handBust');

var stand = function () {
    //check the score of the dealer will account for any aces as well
    calcScore.dealerScoreF();
    //check if there are any splits that need to be completed, else finish hand
    checkSplits.split1();
    allHandsDone();
    vars.playerCanHit = false;
    vars.playerCanSplit = false;
};

module.exports = stand;