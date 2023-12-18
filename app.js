var createError = require('http-errors');
var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var computersprogRouter = require('./routes/computersprog');
var webapplikationerRouter = require('./routes/webapplikationer');
//var computersprog1Router = require('./routes/computersprog1');
var webapplikationer1Router = require('./routes/webapplikationer1');
var opretbogRouter = require('./routes/opretbog');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/computersprog', computersprogRouter);
app.use('/webapplikationer', webapplikationerRouter);
//app.use('/computersprog1', computersprog1Router);
app.use('/webapplikationer1', webapplikationer1Router);
app.use('/opretbog', opretbogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
