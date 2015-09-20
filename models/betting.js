var express = require('express');
var router = express.Router();
var cards = require('./cards');
var scores = require('./scores');

var bets = {
          bank: function() {
               var playersBank =0;
               var bet = '';//some input value that the player selects
               //this will have to add and subtract what the player bets looses etc.
               if (scores.dealerScore == scores.playerScore && scores.dealerScore == 21) {
                    //player gets  1 to 1
                    playersBank = playersBank + bet;
               } else if (scores.playerScore == 21) {
                    //player earns 3:2
                    playersBank = playersBank + bet;
               } else if (scores.dealerScore == 21) {
                    //the player looses the bet
                    playersBank = playersBank - bet;
               } else if (scores.dealerScore > scores.playerScore && scores.dealerScore <= 21) {
                    //player looses the bet
                    playersBank = playersBank - bet;
               } else if (scores.dealerScore < scores.playerScore && scores.playerScore <= 21) {
                    //player wins the bet
                    playersBank = playersBank + bet;
               } else if (scores.playerScore > 21) {
                    //player looses the bet
                    playersBank = playersBank - bet;
               } else if (scores.dealerScore > 21) {
                    //player gets bet
                    playersBank = playersBank + bet;
               }
          },

     betMade: 54



};


module.exports = bets ;

