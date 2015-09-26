var express = require('express');
var router = express.Router();
var cards = require('../logic/cards');
var vars = require('../logic/vars');
var stay = require('../models/staySplit1');


//set the route for the stay button
router.get('/', function(req, res, next) {

    stay();

    console.log('dealer',vars.dealerArray,vars.dealerScore,'nBLJ',vars.naturalBlackjackDealer,'FirstAce',vars.dealersFirstCardIsAce);

    console.log('this is the player stats',vars.playerArray,'split',vars.possibleToSplitPlayer,'score',vars.playerScore,'NBLJ',vars.naturalBlackjackPlayer,'bank',vars.playersBank);

    console.log('this is the number of cards in the deck if it is not 52 or a multiple of 52 you have a problem!');
    console.log(vars.startDeckArray.length + vars.playerArray.length + vars.dealerArray.length + vars.discardArray.length + vars.split1Array.length + vars.split2Array.length + vars.split3Array.length);


    res.render('index');

});

module.exports = router;