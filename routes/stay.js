var express = require('express');
var router = express.Router();
var stay = require('../models/stay');
var track = require('../models/trackingDeck');
//set the route for the stay button
router.get('/', function(req, res, next) {

  //stay();

    console.log('this is the dealer array');
    console.log(track.dealerArray );

    console.log('this is the player array ');
    console.log(track.playerArray );

    console.log(track.startDeckArray.length + track.playerArray.length + track.dealerArray.length + track.discardArray.length + track.split1Array.length + track.split2Array.length + track.split3Array.length);


    res.render('index');

});

module.exports = router;