var path = require('path');
var express = require('express');
var app = express();
var devServer = require('devServer');


app.use(express.static(path.join(__dirname, 'dist')));

app.set('port', process.env.PORT || 8080);

app.use(express.static(path.join(__dirname, 'public')));

devServer.use(historyApiFallback({
    // Paths with dots should still use the history fallback.
    // See https://github.com/facebookincubator/create-react-app/issues/387.
    disableDotRule: true
  }));

var server = app.listen(app.get('port'), function() {
  console.log('http://localhost:',server.address().port);
});