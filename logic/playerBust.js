var express = require('express');
var router = express.Router();
var score = require('./scoreVars');
var bank = require('./bankVars');
var empty = require('./reset');



var playerBust = function(){
    if(score.playerScore > 21){
        bank.playersBank = bank.playersBank - bank.playerBet;
        empty();
        //need to just show dealers hand value
        console.log('the House wins!');
    }

};


module.exports = playerBust;