var cards = require('../logic/cards');
var vars = require('../logic/vars');
var calcScore = require('../logic/calcScores');
var bust = require('../logic/handBust');


var double = function() {
    // double the current bet that the player made
    vars.playerBet = (vars.playerBet*2);
    //add one card to the players hand
    vars.playerArray.push(cards.drawCard());
    // recheck the value of the hand will check for ace as well
    calcScore.playerScoreF();
    //check to see if the player busts if the player busts take money from the account
    //set hand to done
    bust.player();
    //if the split does not have any cards it will finish the dealers hand
    //it will also compare the score if neither the dealer or the player bust
    vars.playerCanDouble = false;
    vars.playerCanHit = false;
};



module.exports = double;