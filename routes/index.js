var express = require('express');
var router = express.Router();
// const client = require("./pg");
const db = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) { //
  // res.render('index', { title: 'Express' });
  res.status(200).json({title: 'Express'});

});

module.exports = router;
