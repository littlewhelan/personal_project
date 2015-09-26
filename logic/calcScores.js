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
         var aceHigh = 0;
         track.dealerArray.forEach(function(element) {
             if (element.name == 'Ace') {
                 aceHigh = score.dealerScore + 10;
             }
         });
         if(aceHigh == 21) {
             score.dealerScore = 21;
         } else if (aceHigh > score.dealerScore && aceHigh < 21 ) {
             score.dealerScore = aceHigh;
         }
         return score.dealerScore;
     },

     playerScoreF: function () {
         score.playerScore = this.createLoop(track.playerArray);
             var aceHigh = 0;
             track.playerArray.forEach(function(element) {
                 if (element.name == 'Ace') {
                     aceHigh = score.playerScore + 10;
                 }
             });
             if(aceHigh == 21) {
                 score.playerScore = 21;
             } else if (aceHigh > score.playerScore && aceHigh < 21 ) {
                 score.playerScore = aceHigh;
             }
        return score.playerScore;
     },

     split1ScoreF: function () {
         score.split1Score = this.createLoop(track.split1Array);
         var aceHigh = 0;
             track.split1Array.forEach(function(element) {
                 if (element.name == 'Ace') {
                     aceHigh = score.split1Score + 10;
                 }
             });
             if(aceHigh == 21) {
                 score.split1Score = 21;
             } else if (aceHigh > score.split1Score && aceHigh < 21 ) {
                 score.split1Score = aceHigh;
             }
         return  score.split1Score;
     },

     split2ScoreF: function () {
         score.split2Score = this.createLoop(track.split2Array);
             var aceHigh= 0;
             track.split2Array.forEach(function(element) {
                 if (element.name == 'Ace') {
                     aceHigh = score.split2Score + 10;
                 }
             });
             if(aceHigh == 21) {
                 score.split2Score = 21;
             } else if (aceHigh > score.split2Score && aceHigh < 21 ) {
                 score.split2Score = aceHigh;
             }
         return score.split2Score;
     },

     split3ScoreF: function () {
         score.split3Score = this.createLoop(track.split3Array);
         var aceHigh= 0;
         track.split3Array.forEach(function(element) {
             if (element.name == 'Ace') {
                 aceHigh = score.split3Score + 10;
             }
         });
         if(aceHigh == 21) {
             score.split3Score = 21;
         } else if (aceHigh > score.split3Score && aceHigh < 21 ) {
             score.split3Score = aceHigh;
         }
         return score.split3Score;
     }

 };
module.exports = scores;