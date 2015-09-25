var express = require('express');
var router = express.Router();
var cards = require('../logic/cards');
var calcScore = require('../logic/calcScores');
var aceD = require('../logic/checkAceDealer');
var track = require('../logic/trackingDeck');
var score = require('../logic/scoreVars');
var bank = require('../logic/bankVars');
var checkSplit1 = require('../logic/split1Empty');


var stand = function () {
    //check the score of the dealer
    calcScore.dealerScoreF();
    //update the value of the hand if there is an ace
    aceD(track.playerArray);
    //check to see if split1 is empty/and set to active if true
    //set the player hand active to false
    //if split array 1 is empty then it will complete the dealers hand
    checkSplit1();
};

module.exports = stand;