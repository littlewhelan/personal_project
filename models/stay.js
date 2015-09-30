var calcScore = require('../logic/calcScores');
var vars = require('../logic/vars');
var bust = require('../logic/handBust');
var dFin = require('../logic/dealerHitTo17');
var comp = require('../logic/compareScores');

var stand = function () {
    //check the score of the dealer will account for any aces as well
    calcScore.dealerScoreF();
    //dealer hits until he has 17
    dFin();
    // checks if the dealer has bust if yes pays out
    vars.allHandsDone = true;
    vars.playerCanHit = false;
    vars.playerCanDouble = false;
    bust.dealer();
    //if neither the player or the dealer bust compares the scores and pays out
    comp.player();
};

module.exports = stand;