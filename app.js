var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var crown59Router = require('./routes/crown59');
var crown2_59Router = require('./routes/crown2_59');
var crown2_59ShopRouter = require('./routes/shop_59');
var Shop59WomensRouter = require('./routes/shop_59/womens');
var Shop59MensRouter = require('./routes/shop_59/mens');
var Shop59HatsRouter = require('./routes/shop_59/hats');
var Shop59JacketsRouter = require('./routes/shop_59/jackets');
var Shop59SneakersRouter = require('./routes/shop_59/sneakers');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/crown_59', crown59Router);
app.use('/crown2_59', crown2_59Router);
app.use('/crown2_59/shop_59', crown2_59ShopRouter);
app.use('/crown2_59/shop_59/womens', Shop59WomensRouter);
app.use('/crown2_59/shop_59/mens', Shop59MensRouter);
app.use('/crown2_59/shop_59/hats', Shop59HatsRouter);
app.use('/crown2_59/shop_59/jackets', Shop59JacketsRouter);
app.use('/crown2_59/shop_59/sneakers', Shop59SneakersRouter);
app.use('/users', usersRouter);

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
