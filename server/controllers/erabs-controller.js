var Erab = require('../models/erabDB');

/*
ARIKETA 1 - Erabiltzailea sortzerakoan ikusi ea existitzen den
*/
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

//Errore kontrolarekin, eskatutako datuak dituen erabiltzailea itzultzen du
module.exports.login = function(req, res) {
	Erab.find({postaElektronikoa: req.params.posta, pasahitza: req.params.pass}, function(err, result) {
		if(err) {
			res.send(err);
		}
		res.json(result);
	});
}

module.exports.frogacreate = function (req, res) {
  var erab = new Erab({
		izena: 'admin',
	  abizena: 'admin',
	  postaElektronikoa: 'admin@admin.com',
	  pasahitza: 'admin1234',
	  rol: 'admin',
	  gogokoDitu: [],
	  bozkatuDitu:[]
  });
  var erab1 = new Erab({
		izena: 'user',
	  abizena: 'user',
	  postaElektronikoa: 'user@user.com',
	  pasahitza: 'user1234',
	  rol: 'user',
	  gogokoDitu: [],
	  bozkatuDitu:[]
  });
  erab.save(function (err, result) {
  	if(err) {
			res.send(err);
		}
  });
  erab1.save(function (err, result) {
  	if(err) {
			res.send(err);
		}
    res.json(result);
  });
}

module.exports.frogadelete = function(req, res) {
	Erab.remove({}, function(err, result) {
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