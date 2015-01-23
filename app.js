var express = require('express')
var app = express()
var quotes = "./quotes.json"
app.get('/', function (req, res) {
  res.send('Hello World!')
})

var server = app.listen(3000);