var express = require('express');
var router = express.Router();
var cards = require('../models/cards');
var deal = require('../models/deal');
var arrays = require('../models/hands');
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
    console.log(arrays.dealerArray );

    console.log('this is the player array ');
    console.log(arrays.playerArray );

    console.log('this is the discard array ');
    console.log( arrays.discardArray);

    console.log('this is the deckArray');
    console.log(cards.theDeck());

    res.render('index');
});

module.exports = router;
