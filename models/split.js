var express = require('express');
var router = express.Router();
var deal = require('../logic/split1Logic/dealSplit1');
var canSplit1 = require('../logic/split1Logic/possibleSplit1');


var splitOriginalHand = function() {
    //need to separate out the cards to two arrays
    //need to finish
    deal();
    canSplit1();
};

module.exports = splitOriginalHand;