var express = require('express');
var router = express.Router();
var emptyHands = require('./emptyHands');
var score = require('./scoreVars');

var emptyAllHands = function() {
    emptyHands.dealerEmpty();
    emptyHands.playerEmpty();
    emptyHands.split1Empty();
    emptyHands.split2Empty();
    emptyHands.split3Empty();
    score.dealersFirstCardIsAce = false;
    score.naturalBlackjackDealer = false;
    score.naturalBlackjackPlayer = false;
    score.playerBust = false;
};


module.exports = emptyAllHands;