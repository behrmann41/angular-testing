var jade = require('jade')
var fs = require('fs')

var Compile = {
  compile: function (fileName){
    var fn = jade.compileFile(__dirname + '/../views/' + fileName)
    var html = fn({})
    var newFile = fileName.split('.')
    fs.writeFile('./public/' + newFile[0] + '.html', html)
  }
}

module.exports = Compile
