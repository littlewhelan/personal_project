var calcScore = require('../logic/calcScores');
var vars = require('../logic/vars');
var bust = require('../logic/handBust');
var dFin = require('../logic/dealerHitTo17');
var comp = require('../logic/compareScores');

var stand = function () {
    //check the score of the dealer will account for any aces as well
    calcScore.dealerScoreF();
    dFin();
    //bust.dealer();
    //comp();
};

module.exports = stand;