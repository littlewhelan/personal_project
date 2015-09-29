var express = require('express');
var router = express.Router();
var vars = require('../logic/vars');

//will be the route of the split action
router.get('/', function (req, res, next) {
    res.json(vars);
});

module.exports = router;