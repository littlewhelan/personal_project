var express = require('express');
var router = express.Router();
var split = require('../models/split');
var score = require('../logic/scoreVars');
var track = require('../logic/trackingDeck');
var bank = require('../logic/bankVars');

//will be the route of the split action
router.get('/', function(req, res, next) {


    split();

    console.log('this is the split array');
    console.log(track.split1Array);
    console.log('is split array 1 active');
    console.log(score.split1Active);

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