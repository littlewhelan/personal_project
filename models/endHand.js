var express = require('express');
var router = express.Router();
var empty = require('./emptyHandsAll');
var bet =  require('./bankVars');
var track = require('./trackingDeck');
var score =require('./scoreVars');



var end = function () {
    empty();
    bet.playerBet = 0;
};
module.exports = end;