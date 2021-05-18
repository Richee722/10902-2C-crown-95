var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_95', { title: 'ChenChi Lin 408411295' });
});

module.exports = router;
