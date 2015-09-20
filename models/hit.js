var express = require('express');
var router = express.Router();
var cards = require('./cards');
var draw = require('./drawCard');
var arrays = require('./hands');

//this will need to add one more card to the hand of the player

var hit = function() {
    arrays.playerArray.push(draw());
};


module.exports = hit;