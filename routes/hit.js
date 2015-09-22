var express = require('express');
var router = express.Router();
var hit = require('../models/hit');
var track = require('../models/trackingDeck');
var calcScore = require('../models/calcScores');
var score = require('../models/scoreVars');
var aceP = require('../models/checkAcePlayer');
var bust = require ('../models/playerBust');

//set the route for the hit button
router.get('/', function(req, res, next) {

    hit();
    calcScore.playerScoreF();
    aceP(track.playerArray);
    bust();


    //will eventually need to check the score for now just want to add a card to the players hand

    console.log('this is the dealer array');
    console.log(track.dealerArray );
    console.log('this is is dealer score');
    console.log(score.dealerScore);

    console.log('this is the player array ');
    console.log(track.playerArray );
    console.log('this is the player score');
    console.log(score.playerScore);

    console.log('this is the number of cards in the deck if it is not 52 or a multiple of 52 you have a problem!');
    console.log(track.startDeckArray.length + track.playerArray.length + track.dealerArray.length + track.discardArray.length + track.split1Array.length + track.split2Array.length + track.split3Array.length);


    res.render('index');
});

module.exports = router;ts = router;