var express = require('express');
var router = express.Router();
var score = require('./scoreVars');
var bank = require('./bankVars');




var dealerBust = function(){
    if(score.dealerScore > 21){
        score.dealerBust = true;
            bank.playersBank = bank.playersBank - bank.playerBet;
    }

};


module.exports = dealerBust;