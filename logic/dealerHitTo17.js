var cards = require('./cards');
var calc = require('./calcScores');
var vars = require('./vars');


var dealerHit= function () {

    while (vars.dealerScore < 17) {
        vars.dealerArray.push(cards.drawCard());
        calc.dealerScoreF();
    }
};





module.exports = dealerHit;