var express = require('express');
var router = express.Router();
var empty = require('./reset');
var bet =  require('./bankVars');
var track = require('./trackingDeck');
var score =require('./scoreVars');



var end = function () {
    empty();
    bet.playerBet = 0;
    //should check if all split arrays are empty
};
module.exports = end;