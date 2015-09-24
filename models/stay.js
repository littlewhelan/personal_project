var express = require('express');
var router = express.Router();
var cards = require('../logic/cards');
var calcScore = require('../logic/calcScores');
var aceD = require('../logic/checkAceDealer');
var dFin = require('../logic/dealerFinish');
var dBust = require('../logic/dealerBust');
var comp = require('../logic/compareScores');
var track = require('../logic/trackingDeck');
var score = require('../logic/scoreVars');
var bank = require('../logic/bankVars');


var stay = function () {
    //check the score of the dealer
    calcScore.dealerScoreF();
    //update the value of the hand if there is an ace
    aceD(track.playerArray);
    //complete the dealers hand
    dFin();
    //check to see if the dealer bust if yes pays the player
    dBust();
    //compares the value of the hands if neither have bust and pay out the bets
    comp();
};

module.exports = stay;