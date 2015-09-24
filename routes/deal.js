var express = require('express');
var router = express.Router();
var dealMainHand = require('../models/deal');

//these are needed for the console logs only
var track = require('../logic/trackingDeck');
var score = require('../logic/scoreVars');
var bank = require('../logic/bankVars');

//this will get the cards to deal the hand
router.get('/', function(req, res, next) {

    dealMainHand();

    console.log('this is the dealer Stats');
    console.log(track.dealerArray );
    console.log(score.dealerScore);
    console.log('is this a natural blackjack for the dealer');
    console.log(score.naturalBlackjackDealer);
    console.log('Is the dealers first Card an Ace');
    console.log(score.dealersFirstCardIsAce);
    console.log('this is the player stats ');
    console.log(track.playerArray );
    console.log('Can the player Split');
    console.log(score.possibleToSplitPlayer);
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