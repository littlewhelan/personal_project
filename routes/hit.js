var express = require('express');
var router = express.Router();
var hit = require('../models/hit');
var score = require('../logic/vars');
var vars = require('../logic/vars');


//set the route for the hit button
router.get('/', function(req, res, next) {

    hit();

    console.log('D',vars.dealerArray,vars.dealerScore,'nBLJ',vars.naturalBlackjackDealer,'FirstAce',vars.dealersFirstCardIsAce, 'bust',vars.dealerBust);
    console.log('P',vars.playerArray,'score',vars.playerScore,'split',vars.playerCanSplit,'canDouble',vars.playerCanDouble,'NBLJ',vars.naturalBlackjackPlayer,'bank',vars.playersBank,'bust', vars.playerBust);
    console.log('this is the number of cards in the deck if it is not 52 or a multiple of 52 you have a problem!',vars.startDeckArray.length + vars.playerArray.length + vars.dealerArray.length + vars.discardArray.length + vars.split1Array.length + vars.split2Array.length + vars.split3Array.length);


    res.render('index');
});

module.exports = router;