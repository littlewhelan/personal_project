var express = require('express');
var router = express.Router();
var deal = require('../logic/deal');
var track = require('../logic/trackingDeck');
var reset =require('../logic/emptyHandsAll');
var score = require('../logic/scoreVars');
var calcScore = require('../logic/calcScores');
var aceP = require('../logic/checkAcePlayer');
var aceD = require('../logic/checkAceDealer');
var natBJackP = require('../logic/naturalBlJP');
var natBJackD = require('../logic/naturalBlJD');
var blJPay = require('../logic/blackjackPayout');
var dealFirst = require('../logic/dealersFirstCard');
var bank = require('../logic/bankVars');


//this will get the cards to deal the hand
router.get('/', function(req, res, next) {

    reset();
    deal();
    calcScore.dealerScoreF();
    calcScore.playerScoreF();
    aceP(track.playerArray);
    aceD(track.dealerArray);
    dealFirst(track.dealerArray);
    natBJackP();
    natBJackD();
    blJPay();

    //compare player blackjack to dealer blackjack and payout if applicable
    //blJPay();//within this function it should end the hand
    //after this the the player will hit, stand, double or split which will route to a different page




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
    console.log(bank.playersBank); //think this is stuck at 1000

    console.log('this is the number of cards in the deck if it is not 52 or a multiple of 52 you have a problem!');
    console.log(track.startDeckArray.length + track.playerArray.length + track.dealerArray.length + track.discardArray.length + track.split1Array.length + track.split2Array.length + track.split3Array.length);

    res.render('index');
});

module.exports = router;