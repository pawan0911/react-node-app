const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
 let response = [];
 axios
  .get('https://www.mist-one.com/pub/languages')
  .then((res) => {
   response = res.data;
  })
  .then(() => {
   return res.status(200).send({
    data: response.data.rows.map((lanObj) => {
     return { ...lanObj, state: 'Noida' };
    }),
   });
  });
});

module.exports = router;
