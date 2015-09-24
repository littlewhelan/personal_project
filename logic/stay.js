var express = require('express');
var router = express.Router();
var cards = require('./cards');
var calcScore = require('');
var aceD = require('./checkAceDealer');
var dFin = require('./dealerFinish');
var dBust = require('./dealerBust');
var comp = require('./compareScore');
var track = require('./trackingDeck');


var stay = function() {

    //check the score of the dealer
    calcScore.dealerScoreF();
    //update the value of the hand if there is an ace
    aceD(track.playerArray);
    //complete the dealers hand
    dFin();
    //check to see if the dealer bust if yes pays the player
    dBust();
    //compares the value of the hands if neither have bust and pay out the bets
    comp();

};




module.exports = stay;