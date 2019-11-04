/* Author   :   Nipu Chakraborty
   Email    :   pro.nipu@gmail.com
   facebook :   https://facebook.com/pro.nipuchakraborty


   Note : if you connect any database please close other connection 
   or comment them for avoid error

 */



const express = require('express');
const app = express();

const multer              = require('multer')
const constants           = require('constants');
const constant            = require('./config/constants');

 const  mongoose          = require('mongoose');
 const mysql              = require('mysql')
 const sqlite3            = require('sqlite3').verbose();
 const {Client }          = require('pg')


const passport            = require('passport');
const flash               = require('connect-flash');
const path                = require('path');

const morgan              = require('morgan');
const cookieParser        = require('cookie-parser');
const bodyParser          = require('body-parser');
const session             = require('express-session');
const dateFormat          = require('dateformat');
const now                 = new Date();
const {
    mongoDB,
    dbMysql,
    dbPg,
    dbSqllite3 }          = require('./config/database.js');


const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));






/***************Mongodb configuratrion********************/
const connection = mongoose.connect(mongoDB);
/***************Mongodb configuratrion********************/


/***************Sqllite configuratrion********************/
let connection = new sqlite3.Database(dbSqllite3, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });
  /***********close the database connection*****************/


  connection.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
/***************Sqlite configuratrion********************/




/***************MYSQL configuratrion********************/
const connection = mysql.createConnection(dbMysql)
connection.connect()
console.log(connection);
/***************MYSQL configuratrion********************/





/***************PG configuratrion********************/
const connection = new Client(dbPg)
/***************PG configuratrion********************/



require('./config/passport')(passport); // pass passport for configuration

//set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
//app.use(bodyParser()); // get information from html forms

//view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
//you can also use hbs and other template as you want 

//app.set('view engine', 'ejs'); // set up ejs for templating


//required for passport
//app.use(session({ secret: 'I love you dear...' })); // session secret

app.use(session({
    secret: 'I Love bangladesh',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./config/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


//launch ======================================================================
app.listen(port,()=>console.log(`you app running http://localhost:${port}`));

//catch 404 and forward to error handler=======================================
app.use(function (req, res, next) {
    res.status(404).render('404', {title: "Sorry, page not found", session: req.sessionbo});
});

app.use(function (req, res, next) {
    res.status(500).render('404', {title: "Sorry, page not found"});
});


exports = module.exports = app;