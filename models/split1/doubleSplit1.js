var express = require('express');
var router = express.Router();
var track = require('../logic/trackingDeck');
var hit = require('../logic/singleCard');
var bank = require('../logic/bankVars');
var calcScore = require('../logic/calcScores');
var aceP = require('../logic/checkAcePlayer');
var pBust = require('../logic/playerBust');
var dFin = require('../logic/dealerFinish');




var doubleSplit1 = function() {

    // double the current bet that the player made
    bank.playerBet = (bank.playerBet*2);
    //add one card to the players hand
    hit();
    // recheck the value of the hand
    calcScore.split1ScoreF();
    //update the value of the hand if there is an ace
    aceP(track.split1Array);
    //check to see if the player busted if true then the bet is deducted
    pBust();

};



module.exports = doubleSplit1;