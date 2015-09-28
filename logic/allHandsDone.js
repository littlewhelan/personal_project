var vars = require('./vars');

var allHandsDone = function() {
    if(vars.playerDone == true && vars.split1Done == true && vars.split2Done == true && vars.split3Done == true ){
        vars.allHandsDone = true;
    };


};

module.exports = allHandsDone;