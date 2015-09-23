var express = require('express');
var router = express.Router();
var cards = require('./cards');
var track = require('./trackingDeck');

//this will separate the top card from the deck

var drawCard  = function() {

  var aCard =  track.startDeckArray.shift();
    return aCard;
};
module.exports =drawCard;