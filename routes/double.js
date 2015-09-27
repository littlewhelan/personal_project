var express = require('express');
var router = express.Router();
var double = require('../models/double');
var vars = require('../logic/vars');

//set the route for the double button
router.get('/', function(req, res, next) {

 double();

 console.log('D',vars.dealerArray,vars.dealerScore,'nBLJ',vars.naturalBlackjackDealer,'FirstAce',vars.dealersFirstCardIsAce);
 console.log('P',vars.playerArray,'score',vars.playerScore,'split',vars.playerCanSplit,'canDouble',vars.playerCanDouble,'NBLJ',vars.naturalBlackjackPlayer,'bank',vars.playersBank, 'handComplete',vars.playerDone);
 console.log('S1',vars.split1Array,'score',vars.split1Score);
 console.log('s2',vars.split2Array,'score',vars.split2Score);
 console.log('s3',vars.split3Array,'score',vars.split3Score);
 console.log('this is the number of cards in the deck if it is not 52 or a multiple of 52 you have a problem!',vars.startDeckArray.length + vars.playerArray.length + vars.dealerArray.length + vars.discardArray.length + vars.split1Array.length + vars.split2Array.length + vars.split3Array.length);



 res.render('index');
});

module.exports = router;