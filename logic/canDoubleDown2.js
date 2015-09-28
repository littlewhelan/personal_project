var vars = require('./vars');

var doubleDown = {

    player: function () {
        var sum = vars.playerScore;
        if(sum == 9  && vars.playerArray.length == 2 ) {
            vars.playerCanDouble = true;
        } else if (sum == 10  && vars.playerArray.length == 2 ) {
            vars.playerCanDouble = true;
        } else if( sum == 11  && vars.playerArray.length == 2  ) {
            vars.playerCanDouble = true;
        }
    },

    split1: function () {
        var sum = vars.split1Score;
        if(sum == 9  && vars.split1Array.length == 2 ) {
            vars.split1CanDouble = true;
        } else if (sum == 10  && vars.split1Array.length == 2 ) {
            vars.split1CanDouble = true;
        } else if( sum == 11  && vars.split1Array.length == 2 ) {
            vars.split1CanDouble = true;
        }
    },

    split2: function () {
        var sum = vars.split2Score;
        if(sum == 9  && vars.split2Array.length == 2 ) {
            vars.split2CanDouble = true;
        } else if (sum == 10  && vars.split2Array.length == 2 ) {
            vars.split2CanDouble = true;
        } else if( sum == 11  && vars.split2Array.length == 2 ) {
            vars.split2CanDouble = true;
        }
    },

    split3: function () {
        var sum = vars.split3Score;
        if(sum == 9  && vars.split3Array.length == 2 ) {
            vars.split3CanDouble = true;
        } else if (sum == 10  && vars.split3Array.length == 2 ) {
            vars.split3CanDouble = true;
        } else if( sum == 11  && vars.split3Array.length == 2 ) {
            vars.split3CanDouble = true;
        }
    }
};

module.exports = doubleDown;

