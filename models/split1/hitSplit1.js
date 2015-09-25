var express = require('express');
var router = express.Router();
var hit = require('../../logic/singleCard');
var track = require('../../logic/trackingDeck');
var calcScore = require('../../logic/calcScores');
var score = require('../../logic/scoreVars');
var aceSplit1 = require('../../logic/split1Logic/checkSplit1Ace');
var bustP = require ('../../logic/split1Logic/split1Bust');
var bank = require('../../logic/bankVars');
var canSplit = require('../../logic/split1Logic/split1CanSplit');
var empty = require('../../logic/areSplitsEmpty');

var hitSplit1Hand = function() {

    //draw one more card
    hit();
    //check which splits are empty
    empty();
    //check if player can split if they have already split once/ie first card after split
    canSplit(track.split1Array);
    //check the new score
    calcScore.split1ScoreF();
    //see if there is an ace and recalculate the score
    aceSplit1(track.split1Array);
    //Check to see if the player bust if true subtract the bet
    bustP();
};

module.exports = hitSplit1Hand;