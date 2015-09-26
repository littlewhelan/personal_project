var express = require('express');
var router = express.Router();
var dealHand = require('../models/deal');
var vars = require('../logic/vars');

router.get('/', function(req, res, next) {

    dealHand();

    console.log('D',vars.dealerArray,vars.dealerScore,'nBLJ',vars.naturalBlackjackDealer,'FirstAce',vars.dealersFirstCardIsAce);
    console.log('P',vars.playerArray,'split',vars.possibleToSplitPlayer,'score',vars.playerScore,'NBLJ',vars.naturalBlackjackPlayer,'bank',vars.playersBank);
    console.log('this is the number of cards in the deck if it is not 52 or a multiple of 52 you have a problem!',vars.startDeckArray.length + vars.playerArray.length + vars.dealerArray.length + vars.discardArray.length + vars.split1Array.length + vars.split2Array.length + vars.split3Array.length);

    res.render('index');
});

module.exports = router;