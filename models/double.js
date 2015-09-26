var express = require('express');
var router = express.Router();
var track = require('../logic/trackingDeck');
var addCard = require('../logic/singleCard');
var bank = require('../logic/bankVars');
var calcScore = require('../logic/calcScores');
var aceP = require('../logic/checkAcePlayer');
var pBust = require('../logic/playerBust');
var check = require('../logic/areSplitsEmpty');
var checkS1 =require('../logic/split1empty');


var double = function() {

    // double the current bet that the player made
    bank.playerBet = (bank.playerBet*2);
    //add one card to the players hand
    addCard();
    // recheck the value of the hand
    calcScore.playerScoreF();
    //update the value of the hand if there is an ace
    aceP(track.playerArray);
    //check to see if the player busted if true then the bet is deducted
    pBust();
    //check if splits are empty
    check();
    //will check if split1 has a hand that needs to be complete
    //else it will finish out the dealers hand and compare scores if the player
    //has not already busted
    checkS1();
};



module.exports = double;