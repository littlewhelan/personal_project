var vars = require('./vars');

var compare = {

      player: function() {
          if (vars.dealerBust == false && vars.playerBust == false && vars.playerScore > vars.dealerScore) {
              vars.playersBank += vars.playerBet;
              vars.playerDone = true;
          } else if (vars.dealerBust == false && vars.playerBust == false && vars.playerScore < vars.dealerScore) {
              vars.playersBank -= vars.playerBet;
              vars.playerDone = true;
          }

      },
    split1: function() {
        if (vars.dealerBust == false && vars.split1Bust == false && vars.split1Score > vars.dealerScore) {
            vars.playersBank += vars.playerBet;
            vars.split1Done = true;
        } else if (vars.dealerBust == false && vars.split1Bust == false && vars.split1Score < vars.dealerScore) {
            vars.playersBank -= vars.playerBet;
            vars.split1Done = true;
        }
    },
    split2: function() {
        if (vars.dealerBust == false && vars.split2Bust == false && vars.split2Score > vars.dealerScore) {
            vars.playersBank += vars.playerBet;
            vars.split2Done = true;
        } else if (vars.dealerBust == false && vars.split2Bust == false && vars.split2Score < vars.dealerScore) {
            vars.playersBank -= vars.playerBet;
            vars.split2Done = true;
        }
    },
    split3: function() {
        if (vars.dealerBust == false && vars.split3Bust == false && vars.split3Score > vars.dealerScore) {
            vars.playersBank += vars.playerBet;
            vars.split3Done = true;
        } else if (vars.dealerBust == false && vars.split3Bust == false && vars.split3Score < vars.dealerScore) {
            vars.playersBank -= vars.playerBet;
            vars.split3Done = true;
        }
    }
};

module.exports = compare;

