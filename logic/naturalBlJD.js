var express = require('express');
var router = express.Router();
var score =  require('./scoreVars');
var track = require('./trackingDeck');

var naturalBlackjack = function () {

    if(score.dealerScore == 21 && track.dealerArray.length == 2) {
        score.naturalBlackjackDealer =true;
    }
};






module.exports = naturalBlackjack;