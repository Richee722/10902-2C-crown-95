var express = require('express');
var router = express.Router();
const crown2Controller_95 = require('../controllers/crown2Controller_95');
const categories = require('../data/categories');
const db = require('../utils/database');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_95', { title: 'ChenChi Lin 408411295(static)', data: categories });
  
});

router.get('/homepage',crown2Controller_95.getHomepage);

module.exports = router;
