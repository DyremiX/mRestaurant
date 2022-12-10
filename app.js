const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const passport = require('passport');

/**
 * Database connection
 */
/*mongoose
    .connect(
        process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log('Connected to the MongoDB database'))
    .catch(err => {
        console.log(err)
        process.exit();
    });*/


/**
 * Create Express.js app
 */
const app = express();


/**
 * View engine setup
 */
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');


/**
 * Express.js basic setups
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src/public')));

/**
 * Passport.js and session setup
 */
app.use(
  session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie:{_expires : 1000 * 60 * 60 * 24 * 7},
      //store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(passport.initialize());
app.use(passport.session());


/**
 * Flash setup
 */
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});


/**
 * Routes setup
 */
const indexRouter = require('./src/routes/index.router.js');
const accountRouter = require('./src/routes/account.router.js');

app.use('/', indexRouter);
app.use('/account', accountRouter);


/**
 * Error handler
 */
//Catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('errors/error');
});

module.exports = app;