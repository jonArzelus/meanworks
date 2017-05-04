var Erab = require('../models/erabDB');

module.exports.create = function (req, res) {
  var erab = new Erab(req.body);
  erab.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Erab.find({}, function (err, results) {
    res.json(results);
  });
}

//Errore kontrolarekin eta eskatutako datuak dituen erabiltzailea itzultzen du
module.exports.login = function(req, res) {
	Erab.find({postaElektronikoa: req.params.posta, pasahitza: req.params.pass}, function(err, result) {
		if(err) {
			res.send(err);
		}
		res.json(result);
	});
}

module.exports.frogacreate = function (req, res) {
  //var erab = new Erab(req.body);
  var erab = new Erab({
		izena: 'asdf',
	  abizena: 'asdf',
	  postaElektronikoa: 'asdf@asdf.com',
	  pasahitza: 'asdf1234',
	  rol: 'user',
	  gogokoDitu: [],
	  bozkatuDitu:[]
  });
  erab.save(function (err, result) {
  	if(err) {
			res.send(err);
		}
    res.json(result);
  });
}

module.exports.frogadelete = function(req, res) {
	Erab.remove({postaElektronikoa: 'asdf@asdf.com'}, function(err, result) {
		if(err) {
			res.send(err);
		}
		res.send("ezabatua?");
	});
}

module.exports.exists = function(req, res) {
	Erab.find({postaElektronikoa: req.params.posta}, function(err, result) {
		if(err) {
			res.send(err);
		}
		res.json(result);
	});
}