var express = require('express');
var router = express.Router();
var draw = require('./drawCard');
var track = require('./trackingDeck');
var calcScore = require('./calcScores');
var aceD = require('./checkAceDealer');
var score = require('./scoreVars');

//this will need to add one more card to the hand of the dealer

var dealerHit= function () {

    while (score.dealerScore < 17 && score.playerBust == false){
        track.dealerArray.push(draw());
        calcScore.dealerScoreF();
        aceD(track.dealerArray);
    }
};

module.exports = dealerHit;