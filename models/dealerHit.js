var express = require('express');
var router = express.Router();
var draw = require('./drawCard');
var track = require('./trackingDeck');
var calcScore = require('./calcScores');
var aceD = require('./checkAceDealer');
var score = require('./scoreVars');

//this will need to add one more card to the hand of the dealer

var dealerCompleteHand = {

    dealerHit: function() {
        track.dealerArray.push(draw());
        calcScore.dealerScoreF();
        aceD(track.dealerArray);},

    complete: function() {
        while (score.dealerScore < 17 && score.playerBust == false)
        {
            this.dealerHit();}
    },
};


module.exports = dealerCompleteHand;