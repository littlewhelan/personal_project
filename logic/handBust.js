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

    dealer:function(){
        if(vars.dealerScore > 21) {
           vars.dealerBust = true;
           vars.playersBank += vars.playerBet;
        }
    },

    split1:function() {
        if(vars.split1Score > 21) {
           vars.split1Bust = true;
           vars.split1Done = true;
           vars.split1CanHit = false;
           vars.playersBank -= vars.playerBet;
        }
    },
    split2:function() {
        if(vars.split2Score > 21) {
           vars.split2Bust = true;
           vars.split2Done = true;
           vars.split2CanHit = false;
           vars.playersBank -= vars.playerBet;
        }
    },
    split3:function() {
        if(vars.split3Score > 21) {
           vars.split3Bust = true;
           vars.split3Done = true;
           vars.split3CanHit =false;
           vars.playersBank -= vars.playerBet;
        }
    }
};

module.exports = handBust;