var express = require('express');
var router = express.Router();
var score = require('./scoreVars');
var bank = require('./bankVars');

var compare = function() {
    if(score.dealerBust ==false && score.playerBust ==false && score.playerScore > score.dealerScore){
        bank.playersBank += bank.playerBet;
    } else if(score.dealerBust ==false && score.playerBust ==false && score.playerScore < score.dealerScore){
        bank.playersBank -= bank.playerBet;
    }

};

module.exports = compare;

