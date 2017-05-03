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