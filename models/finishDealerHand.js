var express = require('express');
var router = express.Router();
var score = require('./scores');
var dealerHit = require('./dealerHit');
var bank = require('./bank');

var completeDealerHand = function() {

    while(score.dealerScore() < 17) {
        dealerHit();
    };
    //this will check the scores of each hand and take care of the bet balance
    bank.checkScore();

};



module.exports = completeDealerHand;