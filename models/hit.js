var vars = require('../logic/vars');
var cards = require('../logic/cards');
var calc = require('../logic/calcScores');
var bust = require('../logic/handBust');

var hitOriginalHand = function() {

    //draw one more card
    vars.playerArray.push(cards.drawCard());
    //check the new score
    calc.playerScoreF();
    //Check to see if the player bust if true subtract the bet
    bust.player();




};

module.exports = hitOriginalHand;