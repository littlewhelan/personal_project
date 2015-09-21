var express = require('express');
var router = express.Router();
var deal = require('../models/deal');
var track = require('../models/trackingDeck');
var emptyHands =require('../models/emptyHands');
var score = require('../models/scores');


//this will get the cards to deal the hand
router.get('/', function(req, res, next) {

    emptyHands.dealerEmpty();
    emptyHands.playerEmpty();
    emptyHands.split1Empty();
    emptyHands.split2Empty();
    emptyHands.split3Empty();

    deal();
    score.playerScore();
    score.dealerScore();
    score.split1Score();
    score.split2Score();
    score.split3Score();



    console.log('this is the dealer array');
    console.log(track.dealerArray );

    console.log('this is the player array ');
    console.log(track.playerArray );

    console.log('this is the player score');
    console.log(score.playerScore());

    console.log('this is the dealer score');
    console.log(score.dealerScore());

    console.log('this is the number of cards in the deck if it is not 52 or a multiple of 52 you have a problem!');
    console.log(track.startDeckArray.length + track.playerArray.length + track.dealerArray.length + track.discardArray.length + track.split1Array.length + track.split2Array.length + track.split3Array.length);

    res.render('index');
});

module.exports = router;
