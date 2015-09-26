var vars = require('./vars');

var compare =function () {

        if(vars.dealerBust ==false && vars.playerBust ==false && vars.playerScore > vars.dealerScore) {
            vars.playersBank += vars.playerBet;
        } else if(vars.dealerBust ==false && vars.playerBust ==false && vars.playerScore < vars.dealerScore) {
            vars.playersBank -= vars.playerBet;
        };

        if(vars.dealerBust ==false && vars.split1Bust ==false && vars.split1Score > vars.dealerScore) {
            vars.playersBank += vars.playerBet;
        } else if(vars.dealerBust ==false && vars.split1Bust ==false && vars.split1Score < vars.dealerScore) {
            vars.playersBank -= vars.playerBet;
        };

        if(vars.dealerBust ==false && vars.split2Bust ==false && vars.split2Score > vars.dealerScore) {
            vars.playersBank += vars.playerBet;
        } else if(vars.dealerBust ==false && vars.split2Bust ==false && vars.split2Score < vars.dealerScore) {
            vars.playersBank -= vars.playerBet;
        };

        if(vars.dealerBust ==false && vars.split3Bust ==false && vars.split3Score > vars.dealerScore) {
            vars.playersBank += vars.playerBet;
        } else if(vars.dealerBust ==false && vars.split3Bust ==false && vars.split3Score < vars.dealerScore) {
            vars.playersBank -= vars.playerBet;
        };
};

module.exports = compare;

