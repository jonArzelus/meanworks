var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    erabsController   = require('./server/controllers/erabs-controller');

mongoose.connect('mongodb://localhost:27017/mean-demo2');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.get('/filmak', function (req, res) {
  res.sendfile(__dirname + '/client/views/filmak.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

//REST API
app.get('/api/erabs', erabsController.list);
app.post('/api/erabs', erabsController.create);

app.listen(3000, function() {
  console.log('Zerbitzaria prest...');
})