var express = require('express');
var router = express.Router();
var emptyHands = require('./emptyHands');

var emptyAllHands = function() {
    emptyHands.dealerEmpty();
    emptyHands.playerEmpty();
    emptyHands.split1Empty();
    emptyHands.split2Empty();
    emptyHands.split3Empty();
};


module.exports = emptyAllHands;