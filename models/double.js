var express = require('express');
var router = express.Router();
var track = require('./cards/trackingDeck');
var draw = require('./cards/drawCard');

var double = function() {
    //check what the current bet is
    //does the player have enough to double
    //draw one more card and add it to the players hand
    track.playerArray.push(draw());


    //if the players hand is more than 21 and there have been no splits the round is over
};



module.exports = double;