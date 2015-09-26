var vars = require('./vars');

var handBust = {

    playerBust:function() {
        if (vars.playerScore > 21) {
            vars.playerBust = true;
            vars.playersBank -= vars.playerBet;
        }
    },

    dealerBust:function(){
        if(vars.dealerScore > 21) {
           vars.dealerBust = true;
           vars.playersBank += vars.playerBet;
        }
    },

    split1Bust:function() {
        if(vars.split1Score > 21) {
           vars.split1Bust = true;
           vars.playersBank -= vars.playerBet;
        }
    },
    split2Bust:function() {
        if(vars.split2Score > 21) {
           vars.split2Bust = true;
           vars.playersBank -= vars.playerBet;
        }
    },
    split3Bust:function() {
        if(vars.split3Score > 21) {
           vars.split3Bust = true;
           vars.playersBank -= vars.playerBet;
        }
    },
};

module.exports = handBust;