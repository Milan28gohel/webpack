var path = require('path');
var express = require('express');
var app = express();
var history = require('connect-history-api-fallback');


app.use(express.static(path.join(__dirname, 'dist')));

app.set('port', process.env.PORT || 8080);

app.use(express.static(path.join(__dirname, 'public')));


 
var app = express();
app.use(history());


var server = app.listen(app.get('port'), function() {
  console.log('http://localhost:',server.address().port);
});