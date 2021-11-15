const { createServer } = require("http")

// console.log("Hello World")

var http = require('http')

http.createServer(function(req, res){

    res.write("Welcome to NodeJs")
    res.end()

}).listen(8000)