var express = require('express');
var router = express.Router();

var users = require('../db');

/* GET users listing. */
router.get('/', function (req, res, next) {
 return res.status(200).send({ data: users });
});

module.exports = router;
