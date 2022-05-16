var PORT = 5000;
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
})

app.get('/redirect.html', function (req, res) {
    res.sendFile('redirect.html', {root: __dirname});
})  

var http = require('http');
var server = http.Server(app);

server.listen(PORT, function() {
    console.log('App running');
});
