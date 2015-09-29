var vars = require('./vars');
var dFin = require('./dealerHitTo17');
var comp = require('./compareScores');
var cards = require('./cards');
var allHandsDone = require('./allHandsDone');
var bust = require('./handBust');
var calc = require('./calcScores');

var checkSplits = {

    split1:function() {
        if (vars.split1Array.length > 0) {
            vars.split1Active = true;
            vars.playerActive = false;
            vars.split2Active = false;
            vars.split3Array = false;
            vars.split1Array.push(cards.drawCard());
            calc.split1ScoreF();
        } else if (vars.split1Array.length == 0) {
            vars.allHandsDone = true;
            dFin();
            bust.dealer();
            allHandsDone();
            comp.player();
        }
    },
    split2:function() {
        if (vars.split2Array.length > 0) {
            vars.split1Active = false;
            vars.playerActive = false;
            vars.split2Active = true;
            vars.split3Array = false;
            vars.split2Array.push(cards.drawCard());
        } else if (vars.split2Array.length == 0) {
            dFin();
            bust.dealer();
            vars.allHandsDone = true;
            allHandsDone();
            comp.player();
            comp.split1();

        }
    },
    split3:function() {
        if (vars.split3Array.length > 0) {
            vars.split1Active = false;
            vars.playerActive = false;
            vars.split2Active = false;
            vars.split3Array = true;
            vars.split3Array.push(cards.drawCard());
        } else if (vars.split3Array.length == 0) {
            dFin();
            bust.dealer();
            vars.allHandsDone = true;
            comp.player();
            comp.split1();
            comp.split2();
        }
    }
};

module.exports = checkSplits;

