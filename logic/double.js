var express = require('express');
var router = express.Router();
var track = require('./trackingDeck');
var draw = require('./drawCard');
var bank = require('./bankVars');
var calcScore = require('./calcScores');
var aceP = require('./checkAcePlayer');
var pBust = require('./playerBust');
var dFin = require('./dealerFinish');
var comp = require('./compareScores');
var dBust = require('./dealerBust');


var double = function() {

    // double the bet that the player made
    bank.playerBet = (bank.playerBet*2);

    //add one card to the players hand
    track.playerArray.push(draw());

    // recheck the value of the hand
    calcScore.playerScoreF();
    //update the value of the hand if there is an ace
    aceP();
    //check to see if the player busted
    pBust();
    //complete the dealers hand
    dFin();
    //check to see if the dealer bust
    dBust();
    //compares the value of the hands if neither have bust and pay out the bets
    comp();
    //bets have been paid for the hand now check for split
};



module.exports = double;