var express = require('express');
var router = express.Router();
var cards = require('cards');

/* GET home page. */
router.get('/rules', function(req, res, next) {
    res.render('rules');
});

module.exports = router;