var express = require('express');
var router = express.Router();
var score = require('./scoreVars');
var bank = require('./bankVars');

var compare = function() {
    if(score.dealerBust == true && score.playerBust == false){
        bank.playersBank += bank.playerBet;
    } else if (score.playerBust == true){
        bank.playersBank -= bank.playerBet;
    } else if(score.playerScore > score.dealerScore){
        bank.playersBank += bank.playerBet;
    } else if (score.dealerScore == score.playerScore){
        bank.playersBank = bank.playersBank;
    }
};

module.exports = compare;

