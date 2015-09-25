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
    score.dealerBust = false;
    score.playerBust = false;
    score.split1Bust = false;
    score.split2Bust = false;
    score.split3Bust = false;
    score.dealersFirstCardIsAce = false;
    score.naturalBlackjackDealer = false;
    score.naturalBlackjackPlayer = false;
    score.playerBust = false;
    score.playerHandActive = true;
    score.split1Active = false;
    score.split2Active = false;
    score.split3Active = false;
    score.split1Empty = true;
    score.split2Empty = true;
    score.split3Empty = true;
};


module.exports = emptyAllHands;