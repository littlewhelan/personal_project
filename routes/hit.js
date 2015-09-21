var express = require('express');
var router = express.Router();
var hit = require('../models/hit');
var track = require('../models/trackingDeck');

//set the route for the hit button
router.get('/', function(req, res, next) {

    hit();
    //will eventually need to check the score for now just want to add a card to the players hand

    console.log('this is the dealer array');
    console.log(track.dealerArray );

    console.log('this is the player array ');
    console.log(track.playerArray );

    console.log(track.startDeckArray.length + track.playerArray.length + track.dealerArray.length + track.discardArray.length);

    res.render('index');
});

module.exports = router;