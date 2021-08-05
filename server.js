var path = require('path');
var express = require('express');
var app = express();
var fallback = require('express-history-api-fallback')

var root = __dirname + '/dist'
app.use(express.static(root))
app.use(fallback('index.html', { root: root }))


app.use(express.static(path.join(__dirname, 'dist')));

app.set('port', process.env.PORT || 8080);

app.use(express.static(path.join(__dirname, 'public')));


 


var server = app.listen(app.get('port'), function() {
  console.log('http://localhost:',server.address().port);
});