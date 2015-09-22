var express = require('express');
var router = express.Router();
var hit = require('../models/cards/hit');
var track = require('../models/cards/trackingDeck');
var score = require('../models/scores/scores');

//set the route for the hit button
router.get('/', function(req, res, next) {

    hit();
    score.playerScore();
    //will eventually need to check the score for now just want to add a card to the players hand

    console.log('this is the dealer array');
    console.log(track.dealerArray );

    console.log('this is the player array ');
    console.log(track.playerArray );

    console.log('this is the player score');
    console.log(score.playerScore());

    console.log('this is the number of cards in the deck if it is not 52 or a multiple of 52 you have a problem!');
    console.log(track.startDeckArray.length + track.playerArray.length + track.dealerArray.length + track.discardArray.length + track.split1Array.length + track.split2Array.length + track.split3Array.length);


    res.render('index');
});

module.exports = router;