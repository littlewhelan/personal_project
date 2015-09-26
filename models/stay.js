var calcScore = require('../logic/calcScores');
var checkSplit1 = require('../logic/splitsEmptyOrCompleteDHand');

var stand = function () {
    //check the score of the dealer
    calcScore.dealerScoreF();
    //update the value of the hand if there is an ace
    //check to see if split1 is empty/and set to active if true
    //set the player hand active to false
    //if split array 1 is empty then it will complete the dealers hand
    checkSplit1();
};

module.exports = stand;