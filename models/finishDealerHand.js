var express = require('express');
var router = express.Router();
var score = require('./calcScores');
var dealerHit = require('./dealerHit');
var bank = require('./bankVars');

var completeDealerHand = function() {

    while(score.dealerScore() < 17) {
        dealerHit();
    };
    //this will check the scores of each hand and take care of the bet balance
    bank.checkScore();

};



module.exports = completeDealerHand;