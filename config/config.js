require('dotenv').config();
/*
DB_HOST=3.222.63.70
DB_USER=postgres
DB_PASS=gpnavsoft$%^GY2
DB_NAME=poneacallcenternode

ELASTIC_HOST=localhost:9200
*/

/*
DB_HOST=3.222.63.70
DB_USER=postgres
DB_PASS=gpnavsoft$%^GY2
DB_NAME=poneabackend

ELASTIC_HOST=3.222.63.70:9200
*/
module.exports = {
    "development": {
      "username": process.env.DB_USER,
      "password": process.env.DB_PASS,
      "database": process.env.DB_NAME,
      "host": process.env.DB_HOST,
      "port" : 9229,
      "dialect": "postgres",
      "operatorsAliases": 0
    },
    "test": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASS,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "port" : 9229,
        "dialect": "postgres",
        "operatorsAliases": 0
    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASS,
        "database": process.env.DB_NAME,
        "port" : 9229,
        "host": process.env.DB_HOST,
        "dialect": "postgres",
        "operatorsAliases": 0
    }
}