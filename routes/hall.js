var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hall', { title: 'Search Results By Hall' });
});

module.exports = router;
