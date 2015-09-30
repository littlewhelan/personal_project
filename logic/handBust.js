var vars = require('./vars');

var handBust = {

    player:function() {
        if (vars.playerScore > 21) {
            vars.playerBust = true;
            vars.playerDone = true;
            vars.playerCanHit = false;
            vars.playersBank -= vars.playerBet;
        }
    },

    dealer:function() {
        if(vars.dealerScore > 21) {
           vars.dealerBust = true;
           vars.playersBank += vars.playerBet;
        }
    }
};

module.exports = handBust;