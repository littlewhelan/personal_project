var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var deal = require('./routes/deal');
var double = require('./routes/double');
var hit = require('./routes/hit');
var stay = require('./routes/stay');
var split = require('./routes/split');
var rules = require('./routes/rules');
var activeHandler = require('./routes/activeHands');

var hitSplit1 = require('./routes/hitSplit1');
var staySplit1 = require('./routes/staySplit1');
var doubleSplit1 = require('./routes/doubleSplit1');
var splitSplit1 = require('./routes/splitSplit1');

var hitSplit2 = require('./routes/hitSplit2');
var staySplit2 = require('./routes/staySplit2');
var doubleSplit2 =require('./routes/doubleSplit2');
var splitSplit2 = require('./routes/splitSplit2');

var hitSplit3 = require('./routes/hitSplit3');
var staySplit3 = require('./routes/staySplit3');
var doubleSplit3 =require('./routes/doubleSplit3');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/deal', deal);
app.use('/double', double);
app.use('/hit', hit);
app.use('/stay', stay);
app.use('/split', split);
app.use('/rules', rules);
app.use('/activeHands',activeHandler);

app.use('/hitSplit1', hitSplit1);
app.use('/staySplit1', staySplit1);
app.use('/doubleSplit1', doubleSplit1);
app.use('/splitSplit1',splitSplit1);

app.use('/hitSplit2', hitSplit2);
app.use('/staySplit2', staySplit2);
app.use('/doubleSplit2', doubleSplit2);
app.use('/splitSplit2',splitSplit2);

app.use('/hitSplit3', hitSplit3);
app.use('/staySplit3', staySplit3);
app.use('/doubleSplit3', doubleSplit3);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
