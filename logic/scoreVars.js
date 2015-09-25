var express = require('express');
var router = express.Router();

var score = {
    playerHandActive:true,
    split1Active:false,
    split2Active:false,
    split3Active:false,
    split1Empty:true,
    split2Empty:true,
    split3Empty:true,
    dealerScore:'',
    playerScore:'',
    split1Score:'',
    split2Score:'',
    split3Score:'',
    possibleToSplitPlayer:false,
    possibleToSplit1:false,
    possibleToSplit2:false,
    dealerBust:false,
    playerBust:false,
    split1Bust:false,
    split2Bust:false,
    split3Bust:false,
    naturalBlackjackPlayer:false,
    naturalBlackjackDealer:false,
    dealersFirstCardIsAce:false,
};


module.exports= score;