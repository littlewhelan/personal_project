var express = require('express');
var router = express.Router();
var score = require('./scoreVars');

var dealersFirstCard = function (array) {
    if (array[0].name == 'Ace') {
            score.dealersFirstCardIsAce = true;
    }
};

module.exports = dealersFirstCard;

