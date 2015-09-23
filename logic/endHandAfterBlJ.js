var express = require('express');
var router = express.Router();
var score =require('./scoreVars');
var reset = require('./reset');




var end = function () {
   if (score.dealersFirstCardIsAce == true && score.naturalBlackjackDealer == true || score.naturalBlackjackPlayer == true){

         reset();

   };



};
module.exports = end;