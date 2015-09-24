var express = require('express');
var router = express.Router();
var score = require('./scoreVars');
var bank = require('./bankVars');




var playerBust = function(){
    if(score.playerScore > 21){
        score.playerBust = true;
        bank.playersBank -= bank.playerBet;
    }

};


module.exports = playerBust;