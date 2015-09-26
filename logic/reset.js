var emptyHands = require('./emptyHandsF');
var vars = require('./vars');

var emptyAllHands = function() {
    //move all cards to discard pile
    emptyHands.dealerEmpty();
    emptyHands.playerEmpty();
    emptyHands.split1Empty();
    emptyHands.split2Empty();
    emptyHands.split3Empty();
    // reset inital values for next round
    vars.dealerBust = false;
    vars.playerBust = false;
    vars.split1Bust = false;
    vars.split2Bust = false;
    vars.split3Bust = false;
    vars.dealersFirstCardIsAce = false;
    vars.naturalBlackjackDealer = false;
    vars.naturalBlackjackPlayer = false;
    vars.playerBust = false;
    vars.playerHandActive = true;
    vars.split1Active = false;
    vars.split2Active = false;
    vars.split3Active = false;
    vars.split1Empty = true;
    vars.split2Empty = true;
    vars.split3Empty = true;
    vars.playerHandDone = false;
    vars.split1Done = false;
    vars.split2Done = false;
    vars.split3Done = false;
};


module.exports = emptyAllHands;