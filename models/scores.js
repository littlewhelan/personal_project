var express = require('express');
var router = express.Router();
var cards = require('./cards');
var track = require('./trackingDeck');

 var score = {

     createLoop: function(element){
       var score = element.value + score;
         return score;
     },

     dealerScore: function () {
         track.dealerArray().forEach(this.createLoop());

     },

     playerScore: function () {
         track.playerArray().forEach(this.createLoop());


     }
 };
module.exports = score;