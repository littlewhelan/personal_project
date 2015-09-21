var express = require('express');
var router = express.Router();
var cards = require('./cards');
var scores = require('./scores');


var checkScore = function () {
        //this will have to add and subtract what the player bets looses etc.
        if (scores.dealerScore == scores.playerScore && scores.dealerScore == 21) {
            //player gets  1 to 1
            this.playersBank = this.playersBank + this.bet;
        } else if (scores.playerScore == 21) {
            //player earns 3:2
            this.playersBank = this.playersBank + (((this.bet * 3)/2));
        } else if (scores.dealerScore == 21) {
            //the player looses the bet
            this.playersBank = this.playersBank - this.bet;
        } else if (scores.dealerScore > scores.playerScore && scores.dealerScore <= 21) {
            //player looses the bet
            this.playersBank = this.playersBank - this.bet;
        } else if (scores.dealerScore < scores.playerScore && scores.playerScore <= 21) {
            //player wins the bet
            this.playersBank = this.playersBank + this.bet;
        } else if (scores.playerScore > 21) {
            //player looses the bet
            this.playersBank = this.playersBank - this.bet;
        } else if (scores.dealerScore > 21) {
            //player gets bet
            this.playersBank = this.playersBank + this.bet;
        }

};

module.exports = checkScore;

