var express = require('express');
var router = express.Router();
var cards = require('./cards');
var track = require('./trackingDeck');

 var score = {

     createLoop: function(array){
       var score = 0;
         array.forEach(function(element){
             score += element.value;
         });
         return score;
     },

     dealerScore: function() {
         return this.createLoop(track.dealerArray);
     },

     playerScore: function () {
        return this.createLoop(track.playerArray);
     },

     split1Score: function () {
         return this.createLoop(track.split1Array);
     },

     split2Score: function () {
         return this.createLoop(track.split2Array);
     },

     split3Score: function () {
         return this.createLoop(track.split3Array);
     }

 };
module.exports = score;