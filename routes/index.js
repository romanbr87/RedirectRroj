var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/', function(req, res, next){
  console.log("Authenticate and Redirect")
  res.redirect('/12');
  next();
});

router.get('/12', function(req, res, next) {
  res.render('index', { title: 'Express.js Node.js' });
});

module.exports = router;
