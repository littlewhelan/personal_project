var emptyHands = require('./emptyHandsF');
var vars = require('./vars');

var reset = function() {
    //move all cards to discard pile
    emptyHands.dealerEmpty();
    emptyHands.playerEmpty();

    // reset inital values for next round
    vars.dealerBust = false;
    vars.playerBust = false;

    vars.dealersFirstCardIsAce = false;
    vars.naturalBlackjackDealer = false;
    vars.naturalBlackjackPlayer = false;

    vars.playerBust = false;

    vars.playeDone = false;

    vars.playerCanDouble = false;

    vars.playerCanSplit = false;

    vars.playerCanHit = true;

    vars.allHandsDone = false;
    vars.playerBet = 2;


};


module.exports = reset;