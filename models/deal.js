var express = require('express');
var router = express.Router();
var deal = require('../logic/dealCards');
var track = require('../logic/trackingDeck');
var reset =require('../logic/reset');
var score = require('../logic/scoreVars');
var calcScore = require('../logic/calcScores');
var aceP = require('../logic/checkAcePlayer');
var aceD = require('../logic/checkAceDealer');
var natBJackP = require('../logic/naturalBlJP');
var natBJackD = require('../logic/naturalBlJD');
var blJPay = require('../logic/blackjackPayout');
var dealFirst = require('../logic/dealersFirstCard');
var bank = require('../logic/bankVars');
var splits = require('../logic/checkSplitArrays');

var dealMainHand = function() {
    // resets hands and to have no cards and natBlJ values to false
    reset();
    // deals two cards to the player and the dealer
    deal();
    //gets the score of the player and the dealer, takes into account the first two cards with a value of 1 for an ace
    calcScore.dealerScoreF();
    calcScore.playerScoreF();
    //this checks for an ace in the hand and recalculates the score
    aceP(track.playerArray);
    aceD(track.dealerArray);
    //checks to see if the dealer has an ace face up
    dealFirst(track.dealerArray);
    //does the player or the dealer have a natural blackjack with two cards
    natBJackP();
    natBJackD();
    //pays out the bet if the dealer or the player has any form of blackjack
    blJPay();
    //check if split arrays are empty
    splits();
    // if true will need to run the deal function for split1, split2, split3  also at this point the deal button should be blocked until the splits are complete
};

module.exports = dealMainHand;