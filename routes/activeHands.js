var express = require('express');
var router = express.Router();
var scoreVars = require('../logic/scoreVars');

//will be the route of the split action
router.get('/', function (req, res, next) {
    var dataToSend = {
        playerHandActive: scoreVars.playerHandActive,
        split1Active: scoreVars.split1Active,
        split2Active: scoreVars.split2Active,
        split3Active: scoreVars.split3Active
    };
    res.json(dataToSend);
});

module.exports = router;