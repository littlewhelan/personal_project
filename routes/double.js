var express = require('express');
var router = express.Router();
var double = require('../models/double');
var track = require('../models/trackingDeck');

//set the route for the double button
router.get('/', function(req, res, next) {
   //this will need to add only one card to the players hand and then it will need to double the bet and aslo finish the dealers hand

   double();

    console.log('this is the dealer array');
    console.log(track.dealerArray );

    console.log('this is the player array ');
    console.log(track.playerArray );

 console.log(track.startDeckArray.length + track.playerArray.length + track.dealerArray.length + track.discardArray.length + track.split1Array.length + track.split2Array.length + track.split3Array.length);

 res.render('index');
});

module.exports = router;