var express = require('express');
var router = express.Router();
var lib = require('../lib/compile.js')

lib.compile('index.jade')
lib.compile('dog.jade')
lib.compile('home.jade')

// var jade = require('jade')
// var fn = jade.compileFile(__dirname + '/../views/index.jade');
// var fn2 = jade.compileFile(__dirname + '/../views/dog.jade');
// var fn3 = jade.compileFile(__dirname + '/../views/home.jade');
// var html = fn({})
// var html2 = fn2({})
// var html3 = fn3({})
// var fs = require('fs')
// fs.writeFile('./public/index.html', html)
// fs.writeFile('./public/dog.html', html2)
// fs.writeFile('./public/home.html', html3)

router.get('*', function(req, res, next) {
  res.sendFile('index.html', {
    root: __dirname + '/../public/'
  })
});

// router.get('/home', function(req, res, next) {
//   res.render('home');
// });
//
// router.get('/dogs', function(req, res, next) {
//   res.render('index');
// });
//
// router.get('/dogs1', function (req, res, next){
//   res.render('dog')
// })

module.exports = router;
