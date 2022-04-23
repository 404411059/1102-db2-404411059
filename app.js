import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import index from './routes/index';
import crown_59 from './routes/crown_59';
import crown2_59 from './routes/crown2_59';
import shop59 from './routes/shop_59';

const app = express();

// view engine setup as '/views' directory
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// set cookies
app.use(cookieParser())
// set public directory as root of the website
app.use(express.static(path.join(__dirname, 'public')))

// user-defined routers
app.use('/', index)
app.use('/crown_59', crown_59)
app.use('/crown2_59', crown2_59)
app.use('/crown2_59/shop_59', shop59)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app;
