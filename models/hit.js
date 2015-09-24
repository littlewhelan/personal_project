var express = require('express');
var router = express.Router();
var hit = require('../logic/drawOneMoreCard');
var track = require('../logic/trackingDeck');
var calcScore = require('../logic/calcScores');
var score = require('../logic/scoreVars');
var aceP = require('../logic/checkAcePlayer');
var bustP = require ('../logic/playerBust');
var bank = require('../logic/bankVars');


var hitOriginalHand = function() {

//draw one more card
    hit();
//check the new score
    calcScore.playerScoreF();
//see if there is an ace and recalculate the score
    aceP(track.playerArray);
//Check to see if the player bust if true subtract the bet
    bustP();


};

module.exports = hitOriginalHand;