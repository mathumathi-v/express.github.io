var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/v1');

var app = express();
// 
app.set('view engine', 'ejs');
app.set('views', 'views');
// 
app.use(logger('dev'));
app.use(express.json());
// 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 
app.use(express.static(path.resolve(path.join(__dirname, 'public'))));

app.use('', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});
const port = 3000; // or any other port you prefer
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
