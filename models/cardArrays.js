var express = require('express');
var router = express.Router();
var cards = require('./models/cards');

var deckTrackingArrays = {

    dealerArray: [],
    playerArray: [],
    discardArray: [],
    splitArray: [],
    split2Array: []
}

module.exports = cardArrays;