var express = require('express');
var router = express.Router();
var track = require('../logic/trackingDeck');
var hit = require('../logic/singleCard');
var bank = require('../logic/bankVars');
var calcScore = require('../logic/calcScores');
var aceP = require('../logic/checkAcePlayer');
var pBust = require('../logic/playerBust');
var dFin = require('../logic/dealerFinish');
var comp = require('../logic/compareScores');
var dBust = require('../logic/dealerBust');


var double = function() {

    // double the current bet that the player made
    bank.playerBet = (bank.playerBet*2);
    //add one card to the players hand
    hit();
    // recheck the value of the hand
    calcScore.playerScoreF();
    //update the value of the hand if there is an ace
    aceP(track.playerArray);
    //check to see if the player busted if true then the bet is deducted
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