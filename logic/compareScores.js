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

      }
};

module.exports = compare;

