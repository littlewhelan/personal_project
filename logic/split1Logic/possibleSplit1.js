var express = require('express');
var router = express.Router();
var score = require('./scoreVars');

var split1Possible = function(array) {

    if(array[0].value == array[1].value) {
        score.possibleToSplitPlayer =true;
    }
};

module.exports = split1Possible;
