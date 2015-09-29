var emptyHands = require('./emptyHandsF');
var vars = require('./vars');

var reset = function() {
    //move all cards to discard pile
    emptyHands.dealerEmpty();
    emptyHands.playerEmpty();
    emptyHands.split1Empty();
    emptyHands.split2Empty();
    emptyHands.split3Empty();
    // reset initial values for next round
    vars.dealerBust = false;
    vars.playerBust = false;
    vars.split1Bust = false;
    vars.split2Bust = false;
    vars.split3Bust = false;
    //reset blj stats
    vars.dealersFirstCardIsAce = false;
    vars.naturalBlackjackDealer = false;
    vars.naturalBlackjackPlayer = false;
    //reset active hand
    vars.playerActive = true;
    vars.split1Active = false;
    vars.split2Active = false;
    vars.split3Active = false;
    //empty out the split hands
    vars.split1Empty = true;
    vars.split2Empty = true;
    vars.split3Empty = true;
    //resets the value of the split hands to be completed
    vars.playerDone = false;
    vars.split1Done = false;
    vars.split2Done = false;
    vars.split3Done = false;
    //resets the double buttons
    vars.playerCanDouble = false;
    vars.split1CanDouble = false;
    vars.split2CanDouble = false;
    vars.split3CanDouble = false;
    //resets split buttons
    vars.playerCanSplit = false;
    vars.split1CanSPlit = false;
    vars.split2CanSplit = false;
    //set functions of the hit buttons
    vars.playerCanHit = true;
    vars.split1CanHit = true;
    vars.split2CanHit = true;
    vars.split3CanHit = true;
    //setting all hands back to unfinished
    vars.allHandsDone = false;
    //reset all scores back to zero
    vars.playerScore = 0;
    vars.split1Score = 0;
    vars.split2Score = 0;
    vars.split3Score = 0;
    vars.playerBet = 2;


};


module.exports = reset;