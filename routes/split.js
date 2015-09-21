var express = require('express');
var router = express.Router();


//will be the route of the split action
router.get('/', function(req, res, next) {
    res.render('index');
});

module.exports = router;