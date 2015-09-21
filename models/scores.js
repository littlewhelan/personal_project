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
     }

 };
module.exports = score;