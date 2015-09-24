var express = require('express');
var router = express.Router();
var track = require('../logic/trackingDeck');
var hit = require('../logic/drawOneMoreCard');
var bank = require('../logic/bankVars');
var calcScore = require('../logic/calcScores');
var aceP = require('../logic/checkAcePlayer');
var pBust = require('../logic/playerBust');
var dFin = require('../logic/dealerFinish');
var comp = require('../logic/compareScores');
var dBust = require('../logic/dealerBust');
var score = require('../logic/scoreVars');


//set the route for the double button
router.get('/', function(req, res, next) {

 // double the current bet that the player made
 bank.playerBet = (bank.playerBet*2);
 //add one card to the players hand
 hit();
 // recheck the value of the hand
 calcScore.playerScoreF();
 //update the value of the hand if there is an ace
 aceP(track.playerArray);
 //check to see if the player busted if true then the bet is deducted
 pBust();
 //complete the dealers hand
 dFin();
 //check to see if the dealer bust
 dBust();
 //compares the value of the hands if neither have bust and pay out the bets
 comp();
 //bets have been paid for the hand now check for split


 console.log('this is the dealer array');
 console.log(track.dealerArray );
 console.log('this is the dealer score');
 console.log(score.dealerScore);
 console.log('is this a natural blackjack for the dealer');
 console.log(score.naturalBlackjackDealer);
 console.log('Is the dealers first Card an Ace');
 console.log(score.dealersFirstCardIsAce);

 console.log('this is the player array ');
 console.log(track.playerArray );
 console.log('this is the player score');
 console.log(score.playerScore);
 console.log('is this a natural blackjack for the player');
 console.log(score.naturalBlackjackPlayer);
 console.log('this is the players bank');
 console.log(bank.playersBank);

 console.log('this is the number of cards in the deck if it is not 52 or a multiple of 52 you have a problem!');
 console.log(track.startDeckArray.length + track.playerArray.length + track.dealerArray.length + track.discardArray.length + track.split1Array.length + track.split2Array.length + track.split3Array.length);

 res.render('index');
});

module.exports = router;