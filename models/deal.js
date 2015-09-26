var deal = require('../logic/dealHandF');
var reset =require('../logic/reset');
var vars = require('../logic/vars');
var calcScore = require('../logic/calcScores');
var canSplit = require('../logic/splitPossible');
var checkBLJ = require('../logic/checkNatBlackjack');

var dealMainHand = function() {
    // resets hands and to have no cards and natBlJ values to false
    reset();
    // deals two cards to the player and the dealer
    deal();
    //gets the score of the player and the dealer, takes into account the first two cards with a value of 1 for an ace
    //then checks for an ace and recalculates
    //calcScore.dealerScoreF();
    //calcScore.playerScoreF();
    //check for nat blackjack both dealer and player and pays out if there is one
    //checkBLJ();
    //check can this hand be split
    //canSplit(vars.playerArray);
};

module.exports = dealMainHand;