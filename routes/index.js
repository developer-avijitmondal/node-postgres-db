var express = require('express');
var router = express.Router();
const Client = require("pg");
// import { Client } from "pg";

const client = new Client({
  password: "postgres",
  user: "postgres",
  host: "postgres",
});

client.connect(function (err) {
  if (err) throw err;
  console.log("postgres connected...");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
