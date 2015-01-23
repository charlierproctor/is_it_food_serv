var express = require('express')
var app = express()
var quotes = require("./quotes.json")

app.get('/', function (req, res) {
  var rand = Math.floor((Math.random() * quotes["quotes"].length))
  res.json(quotes["quotes"][rand]);
})

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Express server listening on port " + port);
});