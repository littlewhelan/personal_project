var cards = require('./cards');
var calcScore = require('./calcScores');
var vars = require('./vars');

var dealerHit= function () {
    while (vars.dealerScore < 17 && vars.playerBust == false) {
        vars.dealerArray.push(cards.drawCard());
        calcScore.dealerScoreF();
    }
};

module.exports = dealerHit;