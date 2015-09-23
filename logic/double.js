var express = require('express');
var router = express.Router();
var track = require('./trackingDeck');
var draw = require('./drawCard');
var bank = require('./bankVars');
var calcScore = require('./calcScores');
var aceP = require('./checkAcePlayer');
var pBust = require('./playerBust');
var dFin = require('./dealerHit');

var double = function() {

    // double the bet that the player made
    bank.playerBet = (bank.playerBet*2);

    //add one card to the players hand
    track.playerArray.push(draw());

    // recheck the value of the hand
    calcScore.playerScoreF();
    //update the value of the hand if there is an ace
    aceP();
    //check to see if the player busted and if yes subtract from player bank
    pBust();
    //complete the dealers hand
    dFin();



    //if the players hand is more than 21 and there have been no splits the round is over
};



module.exports = double;