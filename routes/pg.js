const { Pool, Client } = require('pg');
require('dotenv').config();

const client = new Client({
    //database: process.env.DB_NAME,
    password: "postgres",
    user: "postgres",
    host: "postgres"
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