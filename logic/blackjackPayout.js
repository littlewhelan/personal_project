var express = require('express');
var router = express.Router();
var score = require('./scoreVars');
var bank = require('./bankVars');

var BlJPayout =function() {
if(score.naturalBlackjackPlayer == true && score.naturalBlackjackDealer == true && score.dealersFirstCardIsAce == true) {
    bank.playersBank += bank.playerBet;
} else if(score.naturalBlackjackPlayer ==true){
    bank.playersBank += ((bank.playerBet*3)/2);
}

};

module.exports = BlJPayout;


