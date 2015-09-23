var express = require('express');
var router = express.Router();
var cards = require('./cards');
var track = require('./trackingDeck');
var score = require('./scoreVars');

 var scores = {

     createLoop: function(array){
       var score = 0;
         array.forEach(function(element){
             score += element.value;
         });
         return score;
     },

     dealerScoreF: function() {
         score.dealerScore = this.createLoop(track.dealerArray);
         return score.dealerScore;
     },

     playerScoreF: function () {
         score.playerScore = this.createLoop(track.playerArray);
        return score.playerScore;
     },

     split1ScoreF: function () {
         score.split1Score = this.createLoop(track.split1Array);
         return  score.split1Score;
     },

     split2ScoreF: function () {
         score.split2Score = this.createLoop(track.split2Array);
         return score.split2Score;
     },

     split3ScoreF: function () {
         score.split3Score = this.createLoop(track.split3Array);
         return score.split3Score;
     }

 };
module.exports = scores;