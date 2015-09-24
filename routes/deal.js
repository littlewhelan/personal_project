var express = require('express');
var router = express.Router();
var deal = require('../logic/dealCards');
var track = require('../logic/trackingDeck');
var reset =require('../logic/reset');
var score = require('../logic/scoreVars');
var calcScore = require('../logic/calcScores');
var aceP = require('../logic/checkAcePlayer');
var aceD = require('../logic/checkAceDealer');
var natBJackP = require('../logic/naturalBlJP');
var natBJackD = require('../logic/naturalBlJD');
var blJPay = require('../logic/blackjackPayout');
var dealFirst = require('../logic/dealersFirstCard');
var bank = require('../logic/bankVars');
var splits = require('../logic/checkSplitArrays');


//this will get the cards to deal the hand
router.get('/', function(req, res, next) {

    //checks to see if splits are empty/ is no should empty player hand transfer cards in and replay that hand and bet without closing out the dealers hand
    //splits();

    // resets hands and to have no cards and natBlJ values to false
    reset();
    // deals two cards to the player and the dealer
    deal();
    //gets the score of the player and the dealer, takes into account the first two cards with a value of 1 for an ace
    calcScore.dealerScoreF();
    calcScore.playerScoreF();

    //this checks for an ace in the hand and recalculates the score
    aceP(track.playerArray);
    aceD(track.dealerArray);

    //checks to see if the dealer has an ace face up
    dealFirst(track.dealerArray);

    //does the player or the dealer have a natural blackjack with two cards
    natBJackP();
    natBJackD();

   //pays out the bet if the dealer or the player has any form of blackjack
    blJPay();
    //check if split arrays are empty
    splits();
    // if true will need to run the deal function for split1, split2, split3  also at this point the deal button should be blocked until the splits are complete

    console.log('this is the dealer array');
    console.log(track.dealerArray );
    console.log('this is the dealer score');
    console.log(score.dealerScore);
    console.log('is this a natural blackjack for the dealer');
    console.log(score.naturalBlackjackDealer);
    console.log('Is the dealers first Card an Ace');
    console.log(score.dealersFirstCardIsAce);

    console.log('this is the player array ');
    console.log(track.playerArray );
    console.log('this is the player score');
    console.log(score.playerScore);
    console.log('is this a natural blackjack for the player');
    console.log(score.naturalBlackjackPlayer);
    console.log('this is the players bank');
    console.log(bank.playersBank);

    console.log('this is the number of cards in the deck if it is not 52 or a multiple of 52 you have a problem!');
    console.log(track.startDeckArray.length + track.playerArray.length + track.dealerArray.length + track.discardArray.length + track.split1Array.length + track.split2Array.length + track.split3Array.length);

    res.render('index');
});

module.exports = router;