var express = require('express')
var app = express()
var quotes = "./quotes.json"

app.get('/', function (req, res) {
  var rand = Math.floor((Math.random() * quotes["quotes"].length))
  res.send(quotes["quotes"][rand]);
})

var server = app.listen(3000);