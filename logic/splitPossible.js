var vars = require('./vars');

var splitPossible = {

    player: function (array) {
        if (array[0].value == array[1].value && vars.playerArray.length == 2 ) {
            vars.playerCanSplit = true;
        }
    },

    split1:function (array) {
        if (array[0].value == array[1].value && vars.split1Array.length == 2) {
            vars.split1CanSplit = true;
        }
    },
    split2:function (array) {
        if (array[0].value == array[1].value && vars.split2Array.length == 2) {
            vars.split2CanSplit = true;
        }
    },
};

module.exports = splitPossible;


