const { Pool, Client } = require('pg');
require('dotenv').config();

// "username": process.env.DB_USER,
// "password": process.env.DB_PASS,
// "database": process.env.DB_NAME,
// "host": process.env.DB_HOST,

// const client = new Client({ //
//     //database: process.env.DB_NAME,
//     // database: "node_test_db",
//     // password: "postgres",
//     // user: "postgres",
//     // host: "postgres",
//     //port: 9229
// });

const client = new Client({ //
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    host: process.env.DB_HOST
});

// const client = new Client({
//     password: "postgres",
//     user: "postgres",
//     host: "postgres",
// });

// client.connect();
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected with Postgres Database!");
});

module.exports = client;
