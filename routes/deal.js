var express = require('express');
var router = express.Router();
var deal = require('../models/deal');
var track = require('../models/trackingDeck');
var emptyHands =require('../models/emptyHandsAll');
var score = require('../models/scoreVars');
var calcScore = require('../models/calcScores');
var aceP = require('../models/checkAcePlayer');
var aceD = require('../models/checkAceDealer');
var natBJackP = require('../models/naturalBlJP');
var natBJackD = require('../models/naturalBlJD');
var blJPay = require('../modles/blackjackPayout');


//this will get the cards to deal the hand
router.get('/', function(req, res, next) {

    emptyHands();
    deal();
    calcScore.dealerScoreF();
    calcScore.playerScoreF();
    aceP(track.playerArray);
    aceD(track.dealerArray);
    natBJackP();
    natBJackD();
    //compare player blackjack to dealer blackjack and payout if applicable
    //blJPay();//within this function it should end the hand
    //after this the the player will hit, stand, double or split which will route to a different page




    console.log('this is the dealer array');
    console.log(track.dealerArray );
    console.log('this is the dealer score');
    console.log(score.dealerScore);
    console.log('is this a natural blackjack for the dealer');
    console.log(score.naturalBlackjackDealer);

    console.log('this is the player array ');
    console.log(track.playerArray );
    console.log('this is the player score');
    console.log(score.playerScore);
    console.log('is this a natural blackjack for the player');
    console.log(score.naturalBlackjackPlayer);



    //console.log('this is the players bank');
    //console.log(bank.playersBank); //think this is stuck at 1000

    console.log('this is the number of cards in the deck if it is not 52 or a multiple of 52 you have a problem!');
    console.log(track.startDeckArray.length + track.playerArray.length + track.dealerArray.length + track.discardArray.length + track.split1Array.length + track.split2Array.length + track.split3Array.length);

    res.render('index');
});

module.exports = router;