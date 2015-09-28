var express = require('express');
var router = express.Router();
var vars = require('../logic/vars');

//will be the route of the split action
router.get('/', function (req, res, next) {
        res.json(vars);



    //var dataToSend = {
    //    playerActive: vars.playerActive,
    //    split1Active: vars.split1Active,
    //    split2Active: vars.split2Active,
    //    split3Active: vars.split3Active
    //};
    //res.json(dataToSend);
});

module.exports = router;