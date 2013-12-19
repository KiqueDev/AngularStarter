//SERVER SETUP
var express = require('express');
var path = require('path');
var http = require('http');
var db = require('./mongoDB/db');
var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/db', db.findAllRecords);

http.createServer(app).listen(app.get('port'), function () {
   console.log("Express server listening on port " + app.get('port'));
});
