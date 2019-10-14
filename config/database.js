// module.exports = {

//     'url' : 'mongodb://127.1.1.0/express' // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
     
//      //Please replace your host file Here : 127.1.1.0 , Express is Collection Name (Database Name)
// };


 /**********************************************************************
                mysql configureation

  **********************************************************************/
// module.exports = {
//     host     : process.env.HOST,
//     user     : process.env.USER,
//     password : process.env.PASSWORD,
//     database : process.env.DATABASE_NAME
// };




var mysql = require('mysql');
require('dotenv').config()
var connection = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE_NAME
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = connection;




/**********************************************************************
                 endof mysql configureation
 **********************************************************************/