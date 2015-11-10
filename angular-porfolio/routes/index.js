var express = require('express');
var router = express.Router();
var lib = require('../lib/compile.js')

lib.compile('index.jade')
lib.compile('home.jade')
lib.compile('projects.jade')
lib.compile('resume.jade')
lib.compile('bio.jade')

router.get('*', function(req, res, next) {
  res.sendFile('index.html', {
    root: __dirname + '/../public/'
  })
});

module.exports = router;
