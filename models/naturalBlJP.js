var express = require('express');
var router = express.Router();
var score =  require('./scoreVars');
var track = require('./trackingDeck');

var naturalBlackjack = function () {

    if(score.playerScore == 21 && track.playerArray.length == 2) {
        score.naturalBlackjackPlayer = true;
    }
};






module.exports = naturalBlackjack;