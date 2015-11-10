var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("1")
  res.render('index');
});

router.get('/home', function(req, res, next) {
  console.log("2")
  res.render('home');
});

router.get('/dogs', function(req, res, next) {
  res.render('index');
});

router.get('/dogs1', function (req, res, next){
  res.render('dog')
})

module.exports = router;
