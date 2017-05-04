var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    erabsController   = require('./server/controllers/erabs-controller'),
    filmsController   = require('./server/controllers/films-controller');


mongoose.connect('mongodb://localhost:27017/mean-demo2');
mongoose.connection.on('connected', function(){console.log("Konexioa egina datubasera")});
mongoose.connection.on('error', function(){console.log("Errorea datubasera konexioa egitean")});
mongoose.connection.on('disconnected', function(){console.log("Datubasera konexioa amaituta")});

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

/*app.get('/filmak', function (req, res) {
  res.sendfile(__dirname + '/client/views/filmak.html');
});*/
app.get('/filmak/:userposta', function (req, res) {
  res.sendfile(__dirname + '/client/views/filmak.html');
});

app.use('/js', express.static(__dirname + '/client/js'));


//REST API
app.get('/api/erabs', erabsController.list);
app.post('/api/erabs', erabsController.create);
app.get('/api/erab/frogacreate', erabsController.frogacreate);
app.get('/api/erab/frogadelete', erabsController.frogadelete);
app.get('/api/erab/:posta/:pass', erabsController.login);
app.get('/api/films', filmsController.list);
app.post('/api/films', filmsController.create);

app.listen(3000, function() {
  console.log('Zerbitzaria prest...');
})