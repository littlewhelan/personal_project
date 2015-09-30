var vars = require('./vars');
var dFin = require('./dealerHitTo17');

var handBust = {

    player:function() {
        if (vars.playerScore > 21) {
            vars.allHandsDone = true;
            vars.playerBust = true;
            vars.playerCanHit = false;
            vars.playersBank -= vars.playerBet;
            dFin();
        }
    },

    dealer:function() {
        if(vars.dealerScore > 21) {
           vars.allHandsDone = true;
           vars.dealerBust = true;
           vars.playersBank += vars.playerBet;
        }
    }
};

module.exports = handBust;