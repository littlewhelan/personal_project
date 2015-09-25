var express = require('express');
var router = express.Router();
var score = require('../scoreVars');
var bank = require('../bankVars');




var split1Bust = function(){
    if(score.split1Score > 21){
        score.split1Bust = true;
        bank.playersBank -= bank.playerBet;
    }

};


module.exports = split1Bust;