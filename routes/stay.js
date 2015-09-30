var express = require('express');
var router = express.Router();
var vars = require('../logic/vars');
var stay = require('../models/stay');


//set the route for the stay button
router.get('/', function(req, res, next) {

        stay();


    console.log('D',vars.dealerArray,vars.dealerScore,'nBLJ',vars.naturalBlackjackDealer,'FirstAce',vars.dealersFirstCardIsAce);
    console.log('P',vars.playerArray,'score',vars.playerScore,'canDouble',vars.playerCanDouble,'NBLJ',vars.naturalBlackjackPlayer,'bank',vars.playersBank);


    console.log('this is the number of cards in the deck if it is not 52 or a multiple of 52 you have a problem!',vars.startDeckArray.length + vars.playerArray.length + vars.dealerArray.length + vars.discardArray.length);



    res.render('index');

});

module.exports = router;