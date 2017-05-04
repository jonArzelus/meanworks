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