const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const crown2_59Router = require('./routes/crown2_59');
const Shop59Router = require('./routes/shop_59');
const Shop59WomensRouter = require('./routes/shop_59/womens');
const Shop59MensRouter = require('./routes/shop_59/mens');
const Shop59HatsRouter = require('./routes/shop_59/hats');
const Shop59JacketsRouter = require('./routes/shop_59/jackets');
const Shop59SneakersRouter = require('./routes/shop_59/sneakers');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// set public dir as root dir for website
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/crown2_59', crown2_59Router);
app.use('/crown2_59/shop_59', Shop59Router);
app.use('/crown2_59/shop_59/womens', Shop59WomensRouter);
app.use('/crown2_59/shop_59/mens', Shop59MensRouter);
app.use('/crown2_59/shop_59/hats', Shop59HatsRouter);
app.use('/crown2_59/shop_59/jackets', Shop59JacketsRouter);
app.use('/crown2_59/shop_59/sneakers', Shop59SneakersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
