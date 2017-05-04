var Film = require('../models/filmDB');

module.exports.create = function (req, res) {
  var film = new Film(req.body);
  film.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Film.find({}, function (err, results) {
    res.json(results);
  });
}

module.exports.frogacreate = function (req, res) {
  //var erab = new Erab(req.body);
  var film = new Film({
	izena: "El cuchitril de Joe",
	urtea: "1996",
	sipnosia: "Un joven de Iowa llega a Nueva York con la idea de vivir una agradable experiencia. Pronto descubre lo insegura y difícil que es la vida en la gran manzana. Pero la suerte le llega cuando descubre un pequeño apartamento de renta antigua gracias a las cucarachas que en éste viven. Los insectos se convertirán en sus mejores aliados...",
	irudia: "http://pics.filmaffinity.com/joe_s_apartment-642676719-mmed.jpg",
	bozkak: [],
	iritsiak: []
  });
  var film1 = new Film({
	izena: "War Horse (Caballo de batalla)",
	urtea: "2011",
	sipnosia: "En un pueblo inglés, Albert, el hijo de un granjero, ve nacer un potrillo. Poco después, su padre lo adquiere en una subasta, y el chico le pone de nombre Joey. Pero la familia se arruina y no tiene más remedio que vender el caballo justo cuando estalla la Primera Guerra Mundial (1914-1918). Ése es el punto de partida de un viaje en el que tanto Albert como Joey lucharán por sobrevivir a la contienda y volver a estar juntos.",
	irudia: "http://pics.filmaffinity.com/war_horse-925261133-mmed.jpg",
	bozkak: [],
	iritsiak: []
  });
  film.save(function (err, result) {
  	if(err) {
			res.send(err);
		}
    //res.json(result);
  });
  film1.save(function (err, result) {
  	if(err) {
			res.send(err);
		}
    res.json(result);
  });
}

module.exports.frogadelete = function(req, res) {
	Film.remove({}, function(err, result) {
		if(err) {
			res.send(err);
		}
		res.send("ezabatua?");
	});
}