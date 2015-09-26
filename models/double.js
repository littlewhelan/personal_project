//var cards = require('../logic/cards');
//var vars = require('../logic/vars');
//var calcScore = require('../logic/calcScores');
//var check = require('../logic/splitPossible');
//var checkS1 =require('../logic/splitsEmptyOrCompleteDHand');
//
//var double = function() {
//    // double the current bet that the player made
//    vars.playerBet = (vars.playerBet*2);
//    //add one card to the players hand
//    cards.drawCard();
//    // recheck the value of the hand will check for ace
//    calcScore.playerScoreF();
//    //check to see if the player busts
//
//    //check if splits are empty
//    check.player();
//    //will check if split1 has a hand that needs to be complete
//    //else it will finish out the dealers hand and compare scores if the player
//    //has not already busted
//    checkS1();
//};
//
//
//
//module.exports = double;