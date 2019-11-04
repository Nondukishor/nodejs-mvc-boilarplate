
require('dotenv').config()
 /**********************************************************************
                mongodb configuration

  **********************************************************************/

const mongoDB = {
    DB_NAME: `mongodb://127.1.1.0/${process.env.DATABASE_NAME}` // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
     
     //Please replace your host file Here : 127.1.1.0 , Express is Collection Name (Database Name)
};


 /**********************************************************************
                mysql configuration

  **********************************************************************/
 const dbMysql = {
    host     : process.env.HOST, //database host name
    user     : process.env.USER, //database user name
    password : process.env.PASSWORD,//database password
    database : process.env.DATABASE_NAME //database name
};


 /**********************************************************************
                postgresshQL configuration

  **********************************************************************/

 const dbPg = {
   user: process.env.USER, //database user name
   host: process.env.HOST, //database host name
   database: process.env.DATABASE_NAME, //database name
   password: process.env.PASSWORD, //database password
   port: process.env.DB_PORT, //database port
 }


 /**********************************************************************
            sqllite3 configuration

  **********************************************************************/  
 const dbSqllite3 = {
    DB_NAME : process.env.DATABASE_NAME
 }


/**********************************************************************
                 end of mysql configuration
 **********************************************************************/


 module.exports={
    mongoDB,
    dbMysql,
    dbPg,
    dbSqllite3
 }