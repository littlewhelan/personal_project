var calcScore = require('../logic/calcScores');
var checkSplits = require('../logic/splitsEmptyOrCompleteDHand');
var vars = require('../logic/vars');
var bust = require('../logic/handBust');

var stand = function () {
    //check the score of the dealer will account for any aces as well
    calcScore.dealerScoreF();
    //check if there are any splits that need to be completed, else finish hand
    //if  split 1 has  a card add a card and sum the total of the two cards
    //set the active route to split1
    checkSplits.split1();

};

module.exports = stand;