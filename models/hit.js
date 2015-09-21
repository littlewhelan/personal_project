var express = require('express');
var router = express.Router();
var draw = require('./drawCard');
var track = require('./trackingDeck');

//this will need to add one more card to the hand of the player

var hit = function() {
    track.playerArray.push(draw());
};


module.exports = hit;