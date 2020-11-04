var createError = require('http-errors');

const mongoose = require('mongoose');
var path = require('path');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const express = require("express");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/Recipes');

const mongodbURI = 'mongodb+srv://Benjamin:12345@cluster0.px8cq.mongodb.net/Esculent?retryWrites=true&w=majority'
const app = express()

mongoose
.connect(mongodbURI || 'mongodb://localhost/esculent', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!!!!!!1!!!')
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
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




//parse express body might replace with body parser
//used when utilizing the build file
//app.use(express.static(path.join(__dirname, "./frontend/dist")));
//used when using public folder html file