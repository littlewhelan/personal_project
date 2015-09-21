var express = require('express');
var router = express.Router();
var initDeck =require('./initDeck');


var hands = {
    startDeckArray:initDeck,
    dealerArray: [],
    playerArray: [],
    discardArray: [],
    split1Array: [],
    split2Array: [],
    split3Array: []
};

module.exports = hands;