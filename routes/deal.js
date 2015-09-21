var express = require('express');
var router = express.Router();
//var cards = require('../models/cards');
var deal = require('../models/deal');
var track = require('../models/trackingDeck');
var emptyHands =require('../models/emptyHands');


//this will get the cards to deal the hand
router.get('/', function(req, res, next) {

    emptyHands.dealerEmpty();
    emptyHands.playerEmpty();
    emptyHands.split1Empty();
    emptyHands.split2Empty();
    emptyHands.split3Empty();

    deal();

    console.log('this is the dealer array');
    console.log(track.dealerArray );

    console.log('this is the player array ');
    console.log(track.playerArray );

    console.log('this is the discard array ');
    console.log( track.discardArray);

    console.log('this is the deckArray');
    console.log(track.startDeckArray);

    res.render('index');
});

module.exports = router;
